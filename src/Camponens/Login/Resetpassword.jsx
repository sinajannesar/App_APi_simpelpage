import {  useNavigate } from "react-router-dom";
import Back from "../../assets/Back.png";
export default function Resetpassword() {
    const navigate = useNavigate()
  return (
    <div>
      <div className="text-[18px] font-bold flex justify-center gap-20">
        <button rel="stylesheet"
        onClick={() => navigate(-1)}>
          <img src={Back} className="  mt-4" />
        </button>
        <p className="mt-3 mr-12">Reset password</p>
      </div>
      <div className="space-y-12 flex flex-col justify-center items-center mt-10">
        <div className="space-y-4">
          <label className="block text-base font-medium text-purple-950 mb-1 ">
             New Password
          </label>
          <input
            type="text"
            placeholder="************"
            className="w-[336px] h-11 border border-purple-900 border-1 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-purple-950"
          />
        </div>

        <div className="space-y-4 ">
          <label className="block text-base font-medium text-purple-950 mb-1 ">
            Confirm New Password
          </label>
          <input
            type="text"
            placeholder="************"
            className="w-[336px] h-11 border border-purple-900 border-1 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-purple-950"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-28">
        <button 
        onClick={() => navigate("/Login")}
        className="font-semibold text-white w-[336px] h-11 bg-purple-900 hover:bg-purple-950 transition-all rounded-xl">Submit </button>
      </div>
    </div>
  );
}
