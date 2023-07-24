/*
 * @Author: yangyixin130 1578111082@qq.com
 * @Date: 2023-05-03 17:23:52
 * @LastEditors: yangyixin130 1578111082@qq.com
 * @LastEditTime: 2023-07-18 21:34:13
 * @FilePath: \netflix-clone\pages\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { NextPage } from "next";
import Auth from "./auth";

const Home: NextPage = () => {
  return (
    <>
      {/* <h1 className="text-2xl text-green-500 underline-offset-0">杨宜信</h1> */}
      <Auth></Auth>
    </>
  );
};

export default Home;
