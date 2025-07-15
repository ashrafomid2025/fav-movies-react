import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  function handleChange(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }
  return (
    <div className="h-screen w-full bg-gray-400 flex justify-center items-center">
      <div className="w-1/2 p-4 bg-white rounded-[9px] shadow-[9px] shadow-black">
        <h1>Registration Form</h1>
        {name}
        <form action="">
          <input
            value={name}
            type="text"
            onChange={(e) => handleChange(e)}
            placeholder="Enter your name"
            className="border w-full p-2 rounded-md"
          />
        </form>
      </div>
    </div>
  );
}
