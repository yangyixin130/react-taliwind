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
