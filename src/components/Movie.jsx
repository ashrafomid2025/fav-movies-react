import { useState } from "react";
import Details from "./Details";

function Movie({ name, imgUrl, ep, details }) {
  const [showD, setShowD] = useState(false);
  function showDetails() {
    setShowD(!showD);
  }
  let result =
    ep > -1 ? (
      <div className="bg-sky-500 p-4 text-white text-center w-[30%] h-fit">
        <img className="h-[180px] w-full" src={imgUrl} alt="" />
        <h1>{name}</h1>
        <p>Episode: {ep}</p>
        <button
          onClick={showDetails}
          className="px-4 py-2 bg-white text-black rounded-md"
        >
          نمایش جزییات
        </button>

        {showD && <Details details={details} />}
      </div>
    ) : (
      ""
    );

  return result;
}
export default Movie;
