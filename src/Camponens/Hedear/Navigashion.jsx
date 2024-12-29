import { BiSolidBattery } from "react-icons/bi";
import { MdWifi } from "react-icons/md";
import { TbAntennaBars5 } from "react-icons/tb";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [utcTime, setUtcTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setUtcTime(new Date());
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  const formatTime = (date) => {
    return date.toISOString().substr(11, 5); 
  };

  return (
    <div className="flex justify-between items-center w-full h-[40px] px-4 ">
      
      <p className="font-bold text-[14px]">{formatTime(utcTime)}</p>

      
      <div className="flex gap-2 text-[16px]">
        <TbAntennaBars5 />
        <MdWifi />
        <BiSolidBattery />
      </div>
    </div>
  );
}
