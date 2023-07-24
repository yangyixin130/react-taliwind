/*
 * @Author: yangyixin 1578111082@qq.com
 * @Date: 2023-05-04 21:20:57
 * @LastEditors: yangyixin 1578111082@qq.com
 * @LastEditTime: 2023-07-24 21:00:21
 * @FilePath: \netflix-clone\pages\auth.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useCallback, useState } from "react";
import Input from "../components/Input";
import axios from "axios";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");
  /**
   * 用于切换登录注册
   */
  const toggleVarint = useCallback(() => {
    setVariant((currentVarinent) =>
      currentVarinent === "login" ? "register" : "login"
    );
  }, []);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  }, [email,name,password]);
  return (
    <>
      <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center">
        <div className="bg-black w-full h-full lg:bg-opacity-50">
          <nav className="px-12 py-5">
            <img src="/images/logo.png" alt="Logo" className="h-12" />
          </nav>
          <div className="flex justify-center">
            <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md w-full rounded-md ">
              <h2 className="text-white text-4xl mb-8 font-semibold">
                {variant === "login" ? " Sign in" : "Register"}
              </h2>
              <div className="flex flex-col gap-4">
                {variant === "register" && (
                  <Input
                    label="Username"
                    onChange={(e: any) => {
                      setName(e.target.value);
                    }}
                    id="name"
                    type="text"
                    value={name}
                  />
                )}

                <Input
                  label="Email"
                  onChange={(e: any) => {
                    setEmail(e.target.value);
                  }}
                  id="email"
                  type="email"
                  value={email}
                />
                <Input
                  label="Password"
                  onChange={(e: any) => {
                    setPassword(e.target.value);
                  }}
                  id="password"
                  type="password"
                  value={password}
                />
              </div>
              <button
                className=" bg-red-600 py-3 text-white rounded-md w-full mt-10  hover:bg-red-700  transition
              "
              onClick={register}
              >
                {variant === "login" ? "Login" : "Sigin up"}
              </button>
              <p className="text-neutral-500 mt-12">
                {variant === "login"
                  ? "First time using NetFlix"
                  : "Already have an acount"}
                <span
                  className="text-white ml-1 hover:underline cursor-pointer"
                  onClick={toggleVarint}
                >
                  {variant === "login" ? "Create and account" : "Login"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Auth;
