import React, { useState, useRef, useEffect, useContext } from "react";
import Section from "./Section.js";
import SeatStageHelp from "./SeatStageHelper.js";
import NextBtn from "./NextBtn.js";
import BackBtn from "./BackBtn.js";
import MovieInfo from "./MovieInfo.js";
import TicketInfo from "./TickertInfo.js";

export const SelectChairContext = React.createContext();
export const UserChairsContext=React.createContext();
const TicketPage = () => {
  const [stageNumber, setStageNumber] = useState(1);
  const [stageNo, setStageNo] = useState("Theatre No.2");

  const [all_seats, setAllSeats] = useState(null);
  const [seats_A, setSeats_A] = useState([]);
  const [seats_B, setSeats_B] = useState([]);
  const [seats_C, setSeats_C] = useState([]);
  const [seats_D, setSeats_D] = useState([]);

  const stage = [];
  stage[0] = useRef();
  stage[1] = useRef();
  stage[2] = useRef();
  stage[3] = useRef();

  const stageMoverRef = useRef();


  const [userChairs,setUserChairs] =useState([]);
  const SelectChair = (chairData) => {
    let all_seats_copy = all_seats;
    for (let index = 0; index < all_seats_copy.length; index++) {
      let element = all_seats[index];
      if (element.number == chairData.number) {
        const chairState = element.state;
      
        let newChairState = "selected";
        switch (chairState) {
          case "selected":
            newChairState = "selected";
            break;
          case "unselected":
            newChairState = "userselected";
            break;
          case "userselected":
            newChairState = "inqueu";
            break;
          case "inqueu":
            newChairState = "selected";
            if(!userChairs.includes(element.number)){
              setUserChairs([...userChairs,element]);
              console.log("Added UserChair")
            }
            break;
          default:
        }
        element.state = newChairState;

        all_seats_copy[index] = element;
        break;
      }
    }

    setAllSeats([...all_seats_copy]);
  };

  const stageChanger = (number) => {
    setStageNumber(number);
  };

  useEffect(() => {
    console.log("Changed AllSeats");
    let section_A = [];
    let section_B = [];
    let section_C = [];
    let section_D = [];
    if (all_seats != null) {
      all_seats.map((the_chair) => {
        if (the_chair.section == "A") {
          section_A.push(the_chair);
        } else if (the_chair.section == "B") {
          section_B.push(the_chair);
        } else if (the_chair.section == "C") {
          section_C.push(the_chair);
        } else if (the_chair.section == "D") {
          section_D.push(the_chair);
        }
      });
      setSeats_A(createStageA(section_A));
      setSeats_B(createStageB(section_B));
      setSeats_C(createStageC(section_C));
      setSeats_D(createStageD(section_D));
    }
  }, [all_seats,userChairs]);

  useEffect(() => {
    apiGetInfo();
  }, []);
  useEffect(() => {
    changeStagePointer();
  }, [stageNumber]);

  const createStages = (seatsArray, firstRow, anothersRow) => {
    let seatRows = [];
    //Push NewArray Created by map
    seatRows.push(seatsArray.slice(0, firstRow));
    let anothersSeats = seatsArray.slice(firstRow);
    while (anothersSeats.length > anothersRow) {
      seatRows.push(anothersSeats.slice(0, anothersRow));
      anothersSeats = anothersSeats.slice(anothersRow);
    }
    if (anothersSeats.length > 0) {
      seatRows.push(anothersSeats);
    }
    
    return seatRows;
  };
  const createStageA = (seatsArray) => {
    const firstRow = 13;
    const anothersRow = 19;

    return createStages(seatsArray, firstRow, anothersRow);
  };
  const createStageB = (seatsArray) => {
    const firstRow = 3;
    const anothersRow = 3;

    return createStages(seatsArray, firstRow, anothersRow);
  };
  const createStageC = (seatsArray) => {
    const firstRow = 3;
    const anothersRow = 3;

    return createStages(seatsArray, firstRow, anothersRow);
  };
  const createStageD = (seatsArray) => {
    const firstRow = 14;
    const anothersRow = 14;

    return createStages(seatsArray, firstRow, anothersRow);
  };
  // const createStageA = (seatsArray) => {
  //   const firstRow = 13;
  //   let seatRows = [];
  //   const anothersRow = 19;

  //   //Push NewArray Created by map
  //   seatRows.push(
  //     seatsArray.slice(0, firstRow)
  //   );
  //   let anothersSeats=seatsArray.slice(firstRow);
  //     while(anothersSeats.length>anothersRow){
  //       seatRows.push(anothersSeats.slice(0,anothersRow));
  //       anothersSeats=anothersSeats.slice(anothersRow);
  //     }
  //     if(anothersSeats.length>0){

  //       seatRows.push(anothersSeats);
  //     }
  //     console.log(seatRows);
  //     return  seatRows;
  // };

  const apiAddres = "/jsonserver/chairs.json";
  const apiGetInfo = () => {
    fetch(apiAddres)
      .then((result) => result.json())
      .then((result) => {
        let allChair = result;
        setAllSeats(allChair);
      });
  };
  const changeStagePointer = () => {
    const leftOffset = stage[stageNumber].current.offsetLeft;
    const width = stage[stageNumber].current.offsetWidth;
  
    stageMoverRef.current.style.left = leftOffset + "px";
    
    stageMoverRef.current.style.width = width + "px";
  };

  return (
    <div className="ticket-page text-red-500 border-0 border-red-500 h-screen bg-[#161A24] ">
      <div className="back-poster bg-[url('/public/images/9.jpg')] w-full h-full bg-fixed bg-no-repeat  bg-cover bg-bottom">
        <div className="back-gradient relative w-full h-full flex  border-b-8 border-b-main">
          <MovieInfo />
          <div className="stage-manager border-0 border-blue-500 relative flex flex-col text-main p-16  w-1/2  backdrop-blur-xl bg-transparent">
            <div className="stage-states w-full px-3 flex items-center justify-between">
              <span
                onClick={() => {
                  stageChanger(0);
                }}
                className={`${
                  stageNumber === 0 && "text-white hover:text-white"
                } stage-state uppercase mr-3 cursor-pointer hover:text-gray-100`}
                ref={stage[0]}
              >
                01 Choose a Artist
              </span>
              <span
                onClick={() => {
                  stageChanger(1);
                }}
                className={`${
                  stageNumber === 1 && "text-white hover:text-white"
                } stage-state uppercase mr-3 cursor-pointer hover:text-gray-100`}
                ref={stage[1]}
              >
                02 Choose Seats
              </span>
              <span
                onClick={() => {
                  stageChanger(2);
                }}
                className={`${
                  stageNumber === 2 && "text-white hover:text-white"
                }  stage-state uppercase mr-3 cursor-pointer hover:text-gray-100`}
                ref={stage[2]}
              >
                03 Cart
              </span>
              <span
                onClick={() => {
                  stageChanger(3);
                }}
                className={`${
                  stageNumber === 3 && "text-white hover:text-white"
                } stage-state  uppercase mr-3 cursor-pointer hover:text-gray-100`}
                ref={stage[3]}
              >
                04 Payment Method
              </span>
            </div>
            <span
              className={`stage-mover absolute min-w-[10px] h-2 bg-main top-0`}
              ref={stageMoverRef}
            ></span>
            <SelectChairContext.Provider value={SelectChair}>
              <div className="saloon w-full rounded-t-[50%] flex flex-col items-center border-t-4 border-t-gray-400 h-[60%] mt-16 ">
                <span className="uppercase text-[10px] mt-2 text-opacity-30 text-white">
                  {stageNo}
                </span>
                <div className="saloon-seats w-3/4 mt-8 ">
                  <Section key={"a"} SectionSeats={seats_A} SectionName={"a"} />
                  <div className="saloon-seats-rear flex justify-evenly items-start mt-4">
                    <Section  key={"b"}  SectionSeats={seats_B} SectionName={"b"} />

                    <Section  key={"d"}  SectionSeats={seats_D} SectionName={"d"} />

                    <Section key={"c"} SectionSeats={seats_C} SectionName={"c"} />
                  </div>
                </div>
              </div>
            </SelectChairContext.Provider>
            <SeatStageHelp />

            <UserChairsContext.Provider value={userChairs}>
            <TicketInfo/>
            </UserChairsContext.Provider>
          </div>
          <NextBtn />
          <BackBtn />
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
