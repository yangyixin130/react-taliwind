/*
 * @Author: yangyixin 1578111082@qq.com
 * @Date: 2023-07-24 07:37:08
 * @LastEditors: yangyixin 1578111082@qq.com
 * @LastEditTime: 2023-07-24 21:20:44
 * @FilePath: \netflix-clone\lib\prismadb.ts
 * @Description: 下一代 Node.js、TypeScript、Go 的数据库 ORM
 */
import { PrismaClient } from "@prisma/client";

const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV === "production") global.prismadb = client;
export default client;
