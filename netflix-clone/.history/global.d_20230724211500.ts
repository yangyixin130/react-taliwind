// DECLARE定义局部变量
import { PrismaClient } from "@prisma/client";
declare global {
  namespace globalThis {
    var Prisma: PrismaClient;
  }
}
