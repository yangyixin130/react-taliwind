/*
 * @Author: yangyixin 1578111082@qq.com
 * @Date: 2023-07-24 07:40:09
 * @LastEditors: yangyixin 1578111082@qq.com
 * @LastEditTime: 2023-07-24 22:04:05
 * @FilePath: \netflix-clone\global.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { PrismaClient } from "@prisma/client";
declare global {
  namespace globalThis {
    var prismadb: PrismaClient;
  }
}
