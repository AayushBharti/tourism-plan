import { useState } from "react";

function Card({ id, image, info, price, name, removeTour }) {
  const [readmore, setReadMore] = useState(false);

  const description = readmore ? info : `${info.substring(0, 200)}`;

  function readMoreHandler() {
    setReadMore(!readmore);
  }

  return (
    <div
      className="card w-[400px] h-max m-[1rem] p-[1rem] flex flex-col rounded-xl
        items-center shadow-xl hover:shadow-2xl duration-200 transition-shadow ease-in"
    >
      <img
        src={image}
        className="image h-[400px] w-[380px] object-cover rounded-xl"
        alt=""
      ></img>

      <div className="tour-info mx-[5px] my-[20px]">
        <div className="tour-details">
          <h4 className="tour-price text-green-500 text-[1.2rem] font-bold">
            ₹ {price}
          </h4>
          <h4 className="tour-name text-[1.5rem] font-bold my-1">{name}</h4>
        </div>

        <div className="my-2">
          {description}
          <span
            className="read-more text-blue-600 font cursor-pointer"
            onClick={readMoreHandler}
          >
            {readmore ? "... Show Less" : "... Read More"}
          </span>
        </div>
      </div>

      <button
        className="mt-[10px] px-[85px] py-[12px] border-black border-2 rounded-xl
            font-bold bg-red-100 hover:bg-red-500 hover:text-white transition-all duration-200 ease-in"
        onClick={() => removeTour(id)}
      >
        Not Interested
      </button>
    </div>
  );
}

export default Card;
