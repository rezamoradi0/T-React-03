import React from "react";
const SeatStageHelp=()=>{
  return  <div className="flex justify-evenly w-full ">
        <span className="flex items-center">
            <i className="fa-solid fa-loveseat text-main"></i>
            <span className="ml-4 uppercase text-gray-400 text-xs">Selected</span>
        </span>
        <span className="flex items-center">
            <i className="fa-solid fa-loveseat text-gray-400"></i>
            <span className="ml-4 uppercase text-gray-400 text-xs">Selecable</span>
        </span>
        <span className="flex items-center">
            <i className="fa-solid fa-loveseat text-gray-600"></i>
            <span className="ml-4 uppercase text-gray-400 text-xs">Locked</span>
        </span>
    </div>;





    // <i
                
    //               className={`seat relative opacity-80 mx-[2px] fa-solid fa-loveseat ${
    //                 the_seat.state == "unselected"
    //                   ? "text-gray-400 hover:text-yellow-300 cursor-pointer group"
    //                   : "hover:text-red-800 cursor-not-allowed text-gray-600  "
    //               }`}
    //             >

    //             </i>

}
export default SeatStageHelp;