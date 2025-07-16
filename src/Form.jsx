import { useState } from "react";

export default function Form() {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    dob: "",
  });

  function controlSubmit(e) {
    e.preventDefault();
    console.log(details);
  }

  // object
  return (
    <div className="h-screen w-full bg-gray-400 flex justify-center items-center">
      <div className="w-1/2 p-4 bg-white rounded-[9px] shadow-[9px] shadow-black">
        <h1>Registration Form</h1>

        <form onSubmit={controlSubmit}>
          <input
            value={details.firstName}
            type="text"
            onChange={(p) =>
              setDetails({ ...details, firstName: p.target.value })
            }
            placeholder="Enter your first name"
            className="border w-full my-2 p-2 rounded-md"
          />
          {/* second */}
          <input
            value={details.lastName}
            type="text"
            onChange={(e) =>
              setDetails({ ...details, lastName: e.target.value })
            }
            placeholder="Enter your last name"
            className="border w-full my-2 p-2 rounded-md"
          />
          {/* third */}
          <input
            value={details.dob}
            type="date"
            onChange={(event) =>
              setDetails({
                ...details,
                dob: event.target.value,
              })
            }
            placeholder="Enter your dob"
            className="border w-full my-2 p-2 rounded-md"
          />
          <button className="py-2 px-4 bg-blue-500 text-white">Save</button>
        </form>
      </div>
    </div>
  );
}
