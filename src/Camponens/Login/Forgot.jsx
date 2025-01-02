import { ImCross } from "react-icons/im";
import { IoSend } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Forgot() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className="w-8 h-8 bg-slate-200 text-slate-600 hover:text-slate-200 hover:bg-slate-600 rounded-full flex justify-center items-center ml-80"
        onClick={() => navigate(-1)} 
      >
        <ImCross />
      </button>
      <div className="items-center flex justify-center flex-col mt-10 gap-3">
        <p className="text-2xl font-semibold">Forgot your Password?</p>
        <p className="text-slate-600 font-semibold text-center">
          Enter your email address and we will
          <br /> share a link to create a new password.
        </p>
      </div>
      <div className="flex items-center justify-center mt-10">
        <input
          type="email"
          placeholder="Enter Email Address"
          className=" w-[343px] h-11 border border-purple-950 border-1 rounded-md p-2 text-sm pr-10 focus:outline-none focus:ring-1 focus:ring-purple-950"
        />
      </div>
      <div className="flex justify-center mt-12">
        <button
          onClick={() => navigate("/ResetPassword")} 
          className="w-[343px] h-11 flex justify-center items-center gap-2 font-semibold rounded-lg text-white bg-purple-900"
        >
          <IoSend />
          Send
        </button>
      </div>
    </div>
  );
}
