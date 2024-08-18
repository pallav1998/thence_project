// components/InsightCard.jsx
import React from "react";
import Image from "next/image";
import Person_Image from "../../../../Images/Person_Image.jpg";

const InsightCard = () => {
  return (
    <div className="justify-center text-center w-[55%]">
      <Image
        src={Person_Image}
        alt="Example image"
        width={450}
        height={200}
        className="m-auto rounded-[30px]"
      />

      <div className="w-52 h-44 bg-white rounded-[30px] absolute top-[550px] left-[100px] shadow-lg p-4 text-left">
        <h1 className="text-3xl font-bold mb-2">40%</h1>
        <p className="text-gray-500">
          Achieved reduction in project execution time by optimizing team
          availability
        </p>
      </div>

      <div className="w-56 h-20 bg-slate-50 rounded-[30px] absolute top-[850px] left-[150px] shadow-lg p-4 text-left flex items-center">
        <p className="w-10 h-10 bg-red-100 rounded-full mr-2 flex items-center justify-center">
          🚀
        </p>
        <div>
          <h1 className="text-xl font-semibold">10 DAYS</h1>
          <p className="text-orange-500">Staff Development</p>
        </div>
      </div>

      <div className="w-52 h-36 bg-rose-700 rounded-[30px] absolute top-[840px] left-[500px] shadow-lg p-4 text-left text-white">
        <h1 className="text-4xl mb-4">
          $0.5 <span className="text-base">MILLION</span>
        </h1>
        <p className="text-sm">
          Reduce client expenses by saving on hiring and employment costs.
        </p>
      </div>
    </div>
  );
};

export default InsightCard;
