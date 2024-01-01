import React from "react";
import Image from "next/image";

const Card = ({ photo, name, designation }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-4 bg-white">
      <Image
        src={photo}
        alt={name}
        className="w-full rounded-md object-contain"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-gray-700 text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{designation}</p>
      </div>
    </div>
  );
};

export default Card;
