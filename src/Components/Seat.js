import React from "react";
import { useContext } from "react";
import { SelectChairContext } from "./TicketPage";

const Seat = (prop) => {
  const SelectChair = useContext(SelectChairContext);
  const propsss = prop;

  const GetStatementCss = (state) => {
    switch (state) {
      case "selected":
        return "hover:text-red-800 cursor-not-allowed text-gray-600  ";
        
      case "unselected":
        return  "text-gray-400 hover:text-yellow-300 cursor-pointer group";
        
      case "userselected":
        return "hover:text-blue-400 cursor-progress text-yellow-300  ";

        case "inqueu":
            return "hover:text-gray-600 cursor-wait  text-blue-400";
      default:
        return "hover:text-red-800 cursor-not-allowed text-gray-600  ";
    }
    return "";
  };
  return (
    <button
      onClick={() => {
        SelectChair({ number: propsss.Number, price: propsss.Price });
      }}
      type=""
      key={prop.Number}
      className={`seat relative opacity-80 mx-[2px]   fa-solid fa-loveseat ${
        GetStatementCss(prop.State)}`}
    >
      <i className="">
        <span className="seat-info flex flex-col justify-evenly rounded-lg group-hover:p-4 group-hover:opacity-100 group-hover:w-[240px]  group-hover:h-12 group-hover:text-[10px]  group-hover:text-opacity-100 text-[1px] text-opacity-0 text-gray-100 tracking-[.5rem] bg-gray-900 absolute opacity-0 w-0 h-0 p-0 -translate-y-full -top-full -translate-x-1/2">
          <span className="mb-2">Number : {prop.Number}</span>
          <span>
            Price : {prop.Price}
            {"T"}
          </span>
        </span>
      </i>
    </button>
  );
};

export default Seat;
