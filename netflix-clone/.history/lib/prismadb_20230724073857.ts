/*
 * @Author: yangyixin 1578111082@qq.com
 * @Date: 2023-07-24 07:37:08
 * @LastEditors: yangyixin 1578111082@qq.com
 * @LastEditTime: 2023-07-24 07:38:51
 * @FilePath: \netflix-clone\lib\prismadb.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { PrismaClient } from "@prisma/client";

const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV === "production") global.prismadb = client;
export default client;
