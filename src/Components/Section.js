import React from "react";
import Seat from "./Seat";
const Section=(props)=>{
    return  <div  className={`seats-${props.SectionName} flex flex-col items-start justify-center`}>
    {props.SectionSeats &&
      props.SectionSeats.map((the_row) => {
        return (
          <div className={`seats-${props.SectionName}-row mb-4 flex w-full justify-center items-center`}>
            {the_row.map((the_seat) => {
              return (
                <Seat key={the_seat.number}  Price={the_seat.price} State={the_seat.state} Number={the_seat.number} />
                
              );
            })}
          </div>
        );
      })}
  </div>;

    };
    export default Section;