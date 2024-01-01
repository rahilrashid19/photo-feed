import React from "react";
import characters from "@/constants/data.js";
import Image from "next/image.js";
import { notFound } from "next/navigation.js";
import Link from "next/link";

const CharacterCard = ({ params }) => {
  const character = characters.find((char) => char.id === +params.id);
  if (!character) {
    notFound();
  }

  return (
    <>
      <Link href="/photo-feed">
        <button className="bg-blue-500 p-4 m-2 text-white cursor-pointer rounded-md hover:bg-blue-300 font-bold">
          Go Back
        </button>
      </Link>
      <div className="max-w-md mx-auto my-8 bg-white rounded-md overflow-hidden shadow-lg mt-36">
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-gray-700 mb-2">
            {character.name}
          </div>
          <p className="text-gray-700 text-base">{character.designation}</p>
        </div>
        <Image
          src={character.photo}
          alt={character.name}
          className="w-full h-64 object-cover"
        />
      </div>
    </>
  );
};

export default CharacterCard;
