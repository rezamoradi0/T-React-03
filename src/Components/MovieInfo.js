const MovieInfo = (porps) => {
    return ( 
        <div className="movie-info   p-16 w-1/2 flex flex-col items-start justify-end h-full">
        <h1 className="movie-name mb-4 text-4xl text-[#B09066]">
        Imagine Dragons : Evolve <i className="fa-sharp fa-solid fa-music"></i>
        </h1>
        <span className="movie-stars text-xl text-[#C2A886] my-4">
        <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-solid fa-star-sharp"></i> <i className="fa-regular fa-star-sharp"></i>
        </span>
        <span className="movie-detals flex items-center text-[#B09066]">
          <span className="age ">21:30</span>
          <span className="w-[1px] h-1/2 bg-[#B09066] bg-opacity-60 inline-block mx-4"></span>
          <span className="time "> 2h 13min</span>
          <span className="w-[1px] h-1/2 bg-[#B09066] bg-opacity-60 inline-block mx-4"></span>
          <span className="genres">Walking the Wire , Rise Up , Beliver and etc..</span>
        </span>
      </div>

     );
}
 
export default MovieInfo;