import { use } from "react";
import { useState } from "react";

function Counter() {
  const [Increament, SetIncreament] = useState(1);
  const [countup, counter] = useState(0);
  const [Decreament, SetDecreament] = useState(1);

  function DecreamentBy() {
    SetDecreament(Decreament - 1);
  }

  function increament() {
    counter(countup + Increament);
  }

  function decreament() {
    counter(countup + Decreament);
  }

  function IncreamentBy() {
    SetIncreament(Increament + 1);
  }
  return (
    <div>
      <h1 className="p-4 text-center text-2xl bg-sky-500 text-white">
        The number is: {countup}
      </h1>
      <div className="w-full flex justify-between p-3">
        <button
          onClick={increament}
          className="px-4 my-4 rounded-md py-3 bg-green-400 text-white"
        >
          Increament
        </button>
        <button
          onClick={decreament}
          className="px-4 my-4 py-3 rounded-md bg-red-400 text-white"
        >
          Decreament
        </button>
      </div>
      <div className="p-4 mt-3 w-full flex justify-between">
        <p className="p-4 bg-sky-500 text-white">
          {" "}
          ما با یکبار کلیک شدن قیمت را با به ازای {Increament}افزایش میدهیم
        </p>
        <button
          className="px-4 my-4 py-3 rounded-md bg-gray-400 text-white"
          onClick={IncreamentBy}
        >
          افزایش قیمت
        </button>
      </div>
      <div className="p-4 flex w-full justify-between">
        <p className="p-4 text-white bg-red-400">
          ما به ازای هر بار کلیک شدن قیمت را به ازای
          {Decreament}
          کاهش میدهیم
        </p>
        <button
          className="px-4 my-4 py-3 rounded-md bg-gray-400 text-white"
          onClick={DecreamentBy}
        >
          کاهش قیمت
        </button>
      </div>
    </div>
  );
}
export default Counter;
