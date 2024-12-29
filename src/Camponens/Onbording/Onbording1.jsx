import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Onbord1 from "../../assets/Onbording1.png";
import Onbord2 from "../../assets/Onbording2.png";
import Onbord3 from "../../assets/Onbording3.png";

export default function Onbording1() {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(0);

  const Data = [
    {
      image: Onbord1,
      text: "Welcome to DWD",
      text2: "Welcome as you learn a world-changing skill to get a better job.",
      buttons: [{ text: "Next", action: () => setCurrentPage(1) }],
    },
    {
      image: Onbord2,
      text: "Choose Your Course",
      text2:
        "Choose the course of your choice and gain industry knowledge and experience in it.",
      buttons: [
        { text: "Back", action: () => setCurrentPage(0) },
        { text: "Next", action: () => setCurrentPage(2) },
      ],
    },
    {
      image: Onbord3,
      text: "Get Certified",
      text2:
        "Start learning and get certified after your training to get a lucrative job.",
      buttons: [
        { text: "Back", action: () => setCurrentPage(1) },
        { text: "Get Started", action: () => navigate("/Signup") },
      ],
    },
  ];


  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen  ">
      
      <div className="absolute top-4 right-6">
        <button
          className="text-[16px] text-purple-950 font-semibold"
          onClick={() => setCurrentPage(Data.length - 1)}
        >
          Skip
        </button>
      </div>

      
      <div className="flex flex-col items-center gap-8 w-full max-w-md p-6 bg-white rounded-lg  -mt-56">
        
        <div className="text-center">
          <img
            src={Data[currentPage].image}
            alt={Data[currentPage].text}
            className="w-full max-w-xs h-60 object-cover rounded-lg shadow-lg"
          />
        </div>

        
        <div className="flex gap-2">
          {Data.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentPage === index ? "bg-purple-950" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        
        <div className="text-center">
          <h2 className="text-[20px] font-bold text-purple-950 mb-2">
            {Data[currentPage].text}
          </h2>
          <p className="text-[16px] text-gray-700 leading-6">
            {Data[currentPage].text2}
          </p>
        </div>

        
        <div className="flex justify-center gap-10 mt-4">
          {Data[currentPage].buttons.map((button, index) => (
            <button
              key={index}
              className="px-6 py-2 bg-purple-950 text-white text-sm font-semibold rounded-lg shadow hover:bg-purple-800 transition-all duration-200"
              onClick={button.action}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
