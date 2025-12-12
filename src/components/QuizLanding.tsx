import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bestOfLuck from "../assets/bestofluck.png";
import pawImage from "../assets/paw.gif";

const QuizLanding: React.FC = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const options = ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"];

  return (
    <div
      className="relative w-full h-screen overflow-hidden 
      bg-[linear-gradient(107.96deg,#BECFEE_0%,#71C6E2_50%,#D9F4FA_75%,#BECFEE_100%)]
      flex items-center justify-center p-4"
    >
      {/* Outer White Panel */}
      <div className="absolute w-[95%] max-w-[1400px] min-h-[90%] rounded-[42px] bg-white/60 backdrop-blur-xl shadow-lg"></div>

      {/* Inner Block */}
      <div className="absolute w-[90%] max-w-[1300px] min-h-[84%] rounded-[42px] bg-[#F4FDFF] shadow-md"></div>

      {/* MAIN CONTENT */}
      <div className="relative w-[85%] max-w-[1200px] min-h-[80%] flex flex-col items-center mt-6 pb-20">

        {/* Header */}
        <h1
          className="font-dmserif italic font-normal text-[64px] text-center
            bg-gradient-to-r from-[#15313D] to-[#3CABDA]
            bg-clip-text text-transparent tracking-[-2px] mb-2"
        >
          Test Your Knowledge
        </h1>

        {/* Subtext */}
        <div className="px-6 py-2 bg-white rounded-lg text-[#15313D] text-[18px] mb-6">
          Answer all questions to see your results
        </div>

        {/* Progress Bar */}
        <div className="flex justify-center items-center gap-4 w-full mb-10">
          <div className="w-[14%] h-[3px] bg-[#082C31] rounded-full"></div>
          <div className="w-[14%] h-[3px] bg-[#D9E6EA] rounded-full"></div>
          <div className="w-[14%] h-[3px] bg-[#D9E6EA] rounded-full"></div>
          <div className="w-[14%] h-[3px] bg-[#D9E6EA] rounded-full"></div>
        </div>

        {/* Question */}
        <div
          className="w-[60%] px-6 py-5 text-center text-[20px] font-medium
          rounded-[12px] border border-[#96E5FF]
          bg-[linear-gradient(89.72deg,#C6E9F7_0.09%,#E5F8FF_99.91%)]
          text-[#15313D] mb-6"
        >
          1. What sound does a cat make?
        </div>

        {/* Options */}
        <div className="w-[60%] flex flex-col gap-4">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => setSelectedOption(index)}
              className={`
                w-full py-5 text-center rounded-[10px]
                font-medium text-[18px] transition cursor-pointer
                ${selectedOption === index 
                  ? "bg-[linear-gradient(89.72deg,#C6E9F7_0.09%,#E5F8FF_99.91%)] rounded-[12px] border border-[#96E5FF]" 
                  : "bg-[#f0fafe] border border-[#96E5FF] hover:bg-[#d9f3ff] text-[#15313D]"
                }
              `}
            >
              {option}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-10 right-10 flex gap-3">
          <button
            onClick={() => navigate(-1)}
            className="w-[45px] h-[45px] flex items-center justify-center 
            bg-[#E8F4FA] rounded-[10px] shadow hover:scale-105 transition"
          >
            ←
          </button>

          <button
            onClick={() => navigate("/question3")}
            className="w-[45px] h-[45px] flex items-center justify-center 
            bg-[#d4e8f0] rounded-[10px] shadow hover:scale-105 transition"
          >
            →
          </button>
        </div>
      </div>

      {/* Images */}
      <img
        src={bestOfLuck}
        alt="Best of Luck"
        className="absolute bottom-[20%] left-[6%] w-[180px]"
      />
      <img
        src={pawImage}
        alt="Paw"
        className="absolute bottom-[8%] left-[14%] w-[110px]"
      />
    </div>
  );
};

export default QuizLanding;
