const ShowKeys = ({ keys, tiny }) => {
  return tiny ? (
    <div className="flex  flex-wrap w-[280px] md:w-[450px]">
      {keys.map((key) => {
        return (
          <div className="flex justify-center align-middle mx-1">
            <p className="text-[#ff79e6] text-base font-semibold font-[monospace]">
              {key}
            </p>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="flex mt-3 flex-wrap w-[280px] md:w-[450px]">
      <h3 className="text-md text-black/80 mr-1">Teclas apretadas:</h3>
      {keys.map((key) => {
        return (
          <div className="flex justify-center align-middle mx-1">
            <p className="text-[#ff79e6] text-xl font-semibold font-[monospace]">
              {key}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ShowKeys;
