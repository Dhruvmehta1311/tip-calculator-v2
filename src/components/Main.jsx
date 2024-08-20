const Main = () => {
  return (
    <div className="text-white">
      <div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <p>How much was the Bill?</p>
          <input
            className="h-[38px] w-full sm:w-[600px] bg-transparent border rounded-md outline-none p-4 "
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
