/*
 * @Author: yangyixin 1578111082@qq.com
 * @Date: 2023-07-24 20:48:54
 * @LastEditors: yangyixin 1578111082@qq.com
 * @LastEditTime: 2023-07-24 22:04:52
 * @FilePath: \netflix-clone\pages\api\register.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import prismadb from '@/lib/prismadb'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }
  try {
    const { email, name, password } = req.body;
    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return res.status(422).json({ error: "邮箱错误" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emaileVerfied: new Date(),
      },
    });

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
