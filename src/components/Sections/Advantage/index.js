import React from 'react';
import Image from "next/image";
import clsx from "clsx";

const Advantage = () => {
  return (
    <div className="mt-24 mb-72 ">
      <div className="flex justify-center items-center flex-col">
        <h1 className="font-bold text-4xl text-primary text-center">SkillCounty Advantages</h1>
        <p style={{letterSpacing: "3.5px", wordSpacing: "5px"}}
           className="pl-4 pr-4 text-center tracking-widest break-words font-normal text-sp mt-2">Accelerate Hiring,
          Scale Tasks & Hire Better</p>
      </div>
      <div className="mt-56 h-full mb-16 w-full flex justify-center item-center relative">
        {/*<div className="rounded-t-full w-5/12 h-72 bg-yellow">*/}
        {/*</div>*/}
        <div className="ml-8 mr-8 -z-10 ml-2">
          <Image src="/images/professional-group.png" width="815px" height="411px" alt="Professional people's group"/>
        </div>
        {
          advantageData.map((item,index) => (
            <div key={item.id} style={{boxShadow: "7px 10px 10px rgba(0, 0, 0, 0.25)"}} className={
              clsx("xl:w-1/5 md:w-1/4 p-6 rounded-lg m-2 bg-white absolute", position[index].x, position[index].y)
            }>
              <h4 className="font-medium text-2xl mb-4">{item.title}</h4>
              <p className="font-normal tracking-wide text-md text-justify">{item.description}</p>
            </div>
          ))
        }
      </div>

    </div>
  );
};

export default Advantage;

const advantageData = [
  {
    id: 1,
    title: "Team Support",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, " +
      "by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.  or randomised words which don't look even slightly believable."
  },
  {
    id: 2,
    title: "Team Support",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum."
  },
  {
    id: 3,
    title: "Team Support",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum."
  },
]

const position = [
  {
   id: 1,
    x: "xl:left-16 md:left-0",
    y: "xl:bottom-16 md:bottom-12"
  },
  {
    id: 2,
    x: "xl:right-32 md:right-0",
    y: "xl:-top-28 md:-top-28"
  },
  {
    id: 3,
    x: "xl:right-64 md:right-28",
    y: "xl:-bottom-72 md:-bottom-72"
  }
]
