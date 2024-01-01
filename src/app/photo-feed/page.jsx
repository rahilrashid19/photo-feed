import React from "react";
import Card from "@/components/Card";
import characters from "../../constants/data.js";
import Link from "next/link.js";

const PhotoFeed = () => {
  return (
    <>
      <h1 className="font-bold text-xl flex justify-center p-4 m-4">
        My All Time Favourite TV Characters
      </h1>
      <div className="grid grid-cols-3 gap-4 justify-center items-center ml-32">
        {characters.map((character) => (
          <div key={character.id}>
            <Link href={`/photo-feed/${character.id}`}>
              <Card {...character} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default PhotoFeed;
