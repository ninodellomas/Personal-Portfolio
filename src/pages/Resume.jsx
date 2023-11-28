import React from "react";
import { FaBook, FaCalendarDay } from "react-icons/fa";

function Resume() {
  return (
    <div className="w-full bg-bgColor p-[15px] mb-12" name="resume">
      <div className="max-w-[1200px] mx-auto w-full h-full gap-2">
        <h1 className="text-primary text-[32px] text-center">Resume</h1>
        <div className="flex items-center gap-1">
          <FaBook className="text-primary text-[24px]" />{" "}
          <span className="text-[32px]">Education</span>
        </div>
        <div className="grid grid-cols-2 h-full">
          <div className="border-r-[1px] border-black rounded-[35px] w-full flex flex-col text-center items-center justify-center h-[250px] px-2">
            <span className="font-bold">
            Master of Arts in Music Education in Music Education
            </span>
            <p>Bicol University , Legazpi City, Albay, Philippines</p>
            <p>Complete Academic Requirements (33Credit Units)</p>
              <p>GPA: 4.00</p>
            <div className="flex items-center gap-1">
              <FaCalendarDay className="text-primary" />{" "}
              <p>August 2021 - December 2022</p>
              <br></br>

            
            </div>
          </div>
          <div className="border-l-[1px] border-black rounded-[35px] w-full flex items-center justify-center h-[250px]"></div>
          <div className="border-r-[1px] border-black rounded-[35px] w-full flex items-center justify-center h-[250px]"></div>
          <div className="border-l-[1px] border-black rounded-[35px] w-full flex flex-col text-center items-center justify-center h-[250px] px-2">
            <span className="font-bold">
            Bachelor of Secondary Education in Music, Arts, Physical Education and Health
            </span>
            <p>Sorsogon State University, Sorsogon, Philippines</p>
            <p>GPA: 3.39</p>
            <div className="flex items-center gap-1">
              <FaCalendarDay className="text-primary" />{" "}
              <p>June 2013 - March 2017</p>
            

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
