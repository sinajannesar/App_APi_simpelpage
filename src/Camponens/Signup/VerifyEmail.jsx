import { useState, useRef, useEffect } from "react";
import Back from "../../assets/BACK.png";
import { useNavigate } from "react-router-dom";

export default function VerifyEmail() {
  const [otp, setOtp] = useState(Array(4).fill(""));
  const [timeLeft, setTimeLeft] = useState(0); // مقدار اولیه تایمر 0 است
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const handleInputChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const resendCode = () => {
    setOtp(Array(4).fill(""));
    setTimeLeft(60); // شروع مجدد تایمر
    alert("Code resent!");
  };

  return (
    <div className="p-">
      <div className="text-[18px] font-bold flex justify-center gap-14">
        <a rel="stylesheet" href="">
          <img src={Back} className="ml-6 mt-4" />
        </a>
        <p className="mt-3 mr-12">Verify your email address</p>
      </div>

      <div>
        <p className="text-center font-semibold mt-14">
          We sent you a 4 digit code to verify
          <br /> your email address (desx@gmail.com).
          <br /> Enter in the field below.
        </p>
      </div>

      {/* ورودی‌های OTP */}
      <div className="flex flex-col items-center mt-8 space-y-4">
        <div className="flex space-x-2">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={value}
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleInputChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 border border-gray-300 rounded text-center text-lg focus:ring focus:ring-purple-500"
            />
          ))}
        </div>

        {/* متن ثابت */}
        <p className="text-[14px] font-semibold">
          Didn’t get the code?{" "}
          <button
            onClick={resendCode}
            className={`font-bold underline ${
              timeLeft > 0 ? "cursor-not-allowed text-gray-400" : ""
            }`}
            disabled={timeLeft > 0}
          >
            Resend
          </button>
        </p>

        {/* تایمر */}
        {timeLeft > 0 && (
          <p className="text-sm text-gray-600 mt-2">
            Expires in{" "}
            <span className="text-purple-600 font-bold">
              0:{timeLeft.toString().padStart(2, "0")}
            </span>
          </p>
        )}
      </div>

      <div className="flex justify-center items-center">
        <button
          onClick={() => navigate("/Login")}
          className="w-[343px] h-12 text-[18px] font-semibold bg-purple-950 text-white rounded-xl mt-48"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
