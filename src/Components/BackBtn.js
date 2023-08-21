const BackBtn = (porps) => {
  return (
    <span className="w-16 h-16 bg-main bg-opacity-0 left-16 top-16 flex items-center justify-center absolute text-white rounded-full hover:bg-opacity-10 cursor-pointer">
      {" "}
      <i className="fa-regular fa-arrow-left"></i>{" "}
    </span>
  );
};

export default BackBtn;
