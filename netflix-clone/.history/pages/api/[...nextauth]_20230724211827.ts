/**
 * next-auth 使用 NextAuth.js 给 Next.js 应用添加鉴权与认证
 * bcrypt Bcrypt是单向Hash加密算法，类似Pbkdf2算法 不可反向破解生成明文。
 */

import NextAUth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import prismadb from '@/lib/prismadb'
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
