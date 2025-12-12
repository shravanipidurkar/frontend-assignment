import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FinalScore: React.FC = () => {
  const navigate = useNavigate();
  const finalScore = 62;

  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = finalScore / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= finalScore) {
        start = finalScore;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [finalScore]);

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center 
      bg-[#EAF4F6]"
    >
      {/* KEEP LEARNING */}
      <div className="px-6 py-2 bg-white text-[#15313D] text-[16px] 
      rounded-lg shadow mb-8">
        Keep Learning!
      </div>

      {/* TITLE */}
      <h1
        className="font-dmserif italic text-[60px] tracking-[-4px] font-bold
         mb-2 bg-gradient-to-r from-[#15313D] to-[#3CABDA] bg-clip-text text-transparent"
      >
        Your Final score is
      </h1>

      {/* SCORE */}
      <div className="flex items-end justify-center gap-2 mb-12">
        <span
          className="text-[140px] font-dmserif font-bold 
          text-[#385f70] leading-none"
        >
          {count}
        </span>

        <span
          className="text-[60px] font-dmserif italic font-bold 
          bg-gradient-to-r from-[#15313D] to-[#3CABDA] bg-clip-text text-transparent mb-6"
        >
          %
        </span>
      </div>

      {/* START AGAIN BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="w-[180px] h-[50px] text-[18px] font-medium 
        bg-[#D6ECF5] text-[#15313D] rounded-[14px] shadow 
        hover:scale-105 transition"
      >
        Start Again
      </button>
    </div>
  );
};

export default FinalScore;
