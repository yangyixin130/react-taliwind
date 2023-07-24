/*
 * @Author: yangyixin 1578111082@qq.com
 * @Date: 2023-07-24 20:26:39
 * @LastEditors: yangyixin 1578111082@qq.com
 * @LastEditTime: 2023-07-24 22:06:57
 * @FilePath: \netflix-clone\pages\api\[...nextauth].ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * next-auth 使用 NextAuth.js 给 Next.js 应用添加鉴权与认证
 * bcrypt Bcrypt是单向Hash加密算法，类似Pbkdf2算法 不可反向破解生成明文。
 */

import NextAUth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import prismadb from "../../lib/prismadb";
export default NextAUth({
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("邮箱和密码必填");
        }
        const user = await prismadb.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user.hashedPassword) {
          throw new Error("邮箱不正确");
        }
        const isCorrectPassword = await compare(
          credentials.password,
          user.hashedPassword
        );
        if (!isCorrectPassword) {
          throw new Error("错误密码");
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXT_JWT_SECRET,
  },
  secret: process.env.NEXT_SECRET,
});
