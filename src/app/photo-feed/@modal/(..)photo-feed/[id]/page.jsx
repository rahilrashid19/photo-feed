import React from "react";
import characters from "@/constants/data.js";
import Image from "next/image.js";
import { notFound } from "next/navigation.js";
import Modal from "@/components/Modal";

const CharacterCard = ({ params }) => {
  const character = characters.find((char) => char.id === +params.id);
  if (!character) {
    notFound();
  }

  return (
    <Modal>
      <div className="max-w-md mx-auto my-8 bg-white rounded-md overflow-hidden shadow-lg mt-36">
        <h1 className="text-black font-mono font-light">Intercepted Route</h1>
        <Image
          src={character.photo}
          alt={character.name}
          className="w-full h-64 object-cover"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-gray-700 mb-2">
            {character.name}
          </div>
          <p className="text-gray-700 text-base">{character.designation}</p>
        </div>
      </div>
    </Modal>
  );
};

export default CharacterCard;
