const Input = () => {
  return (
    <>
      <div className="relative">
        <input
          className="block rounde-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer"
          placeholder=" "
          id="email"
        ></input>
        <label
          className="
        absolute
        text-md
        text-zinc-400
        duration-150
        transform
        -translate-y-3
        scale-75
        top-4
        z-10
        origin-[0]
        left-6

        "
          htmlFor="email"
        ></label>
      </div>
    </>
  );
};
export default Input;
