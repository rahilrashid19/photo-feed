const CharacterNotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="max-w-md p-8">
        <h2 className="text-2xl text-white font-bold mb-4">
          Character Not Found
        </h2>
        <p className="text-white">
          Sorry, the requested character could not be found.
        </p>
      </div>
    </div>
  );
};

export default CharacterNotFound;
