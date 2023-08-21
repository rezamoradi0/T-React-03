import React from "react";
import { SelectChairContext, UserChairsContext } from "./TicketPage";
import { useContext } from "react";
const TicketInfo = (props) => {
  const userChairs = useContext(UserChairsContext);
    const ticketsInfo=()=>{

    }
    const TotalPriceCalc=(selectedChairs)=>{
        let totalPrice=0;
        selectedChairs.map((chair)=>{
            totalPrice+=chair.price;
        });
        return <>{totalPrice}</>;
    }
  console.log(userChairs);
  return (
    <div className='h-[140px] bg-[url("/public/images/bg/ticket-bg.png")] bg-no-repeat bg-[length:100%_100%] flex mt-5 justify-start w-full [&>div]:w-1/4 [&>div]:flex [&>div]:flex-col [&>div]:p-4 [&>div]:justify-evenly [&>div>span:first-of-type]:mb-2 [&>div]:items-center '>
      <div className="date pr-8">
        <span>Date</span>
        <span>2013/04/15</span>
      </div>
      <div className="time">
        <span>Time</span>
        <span> 07:30PM </span>
      </div>
      <div className="selected-seats relative">
        <span className="">Selected Seats</span>
        <span className="overflow-hidden text-ellipsis whitespace-nowrap w-full ">
            
          {" "}
          {userChairs &&
            userChairs.map((chair) => {
              console.log("Testing provider");
              return (
                <>
                  {chair.section} {chair.number + ","}
                </>
              );
            })}
        </span>
      </div>
      <div className="total">
        <span>Total</span>
        <span> {userChairs&&TotalPriceCalc(userChairs)} T</span>
      </div>
    </div>
  );
};

export default TicketInfo;
