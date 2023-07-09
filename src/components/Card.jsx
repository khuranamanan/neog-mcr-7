/* eslint-disable react/prop-types */
import { ImLocation } from "react-icons/im";

function Card({ heading, image, click }) {
  return (
    <div
      className="relative w-80 h-56 rounded-lg overflow-hidden cursor-pointer"
      onClick={click}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <img src={image} alt={heading} className="h-full w-full object-cover" />
      <div className="absolute bottom-2 left-2 flex gap-1 items-center">
        <ImLocation /> {heading}
      </div>
    </div>
  );
}

export default Card;
