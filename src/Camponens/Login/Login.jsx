import logo from "../../assets/Logosignup.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(""); 

  const handleLogin = async () => {
    setError(""); 

    
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        
        navigate("/Homepage");
      } else {
        
        setError(data.message || "Invalid email or password.");
      }
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center text-purple-950 gap-2">
        <img src={logo} className="w-30 h-28" />
        <p className="text-[18px] font-bold">Welcome Back</p>
        <p className="text-[16px] font-semibold">Login to continue</p>
      </div>
      <div className="flex flex-col items-center gap-6 mt-12">
        <div className="space-y-3">
          <label className="block text-base font-medium text-purple-950 mb-1">
            Email Address
          </label>
          <input
            type="text"
            placeholder="Design Withdesigners"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[343px] h-11 border border-purple-950 border-1 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-purple-950"
          />
        </div>

        <div className="space-y-3">
          <label className="block text-base font-medium text-purple-950 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              placeholder="123456"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[343px] h-11 border border-purple-950 border-1 rounded-md p-2 text-sm pr-10 focus:outline-none focus:ring-1 focus:ring-purple-950"
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5"
              onClick={() => setShow((prev) => !prev)}
            >
              {show ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        <div className="-mt-4">
          <button
            onClick={() => navigate("/Forgot")}
            className="text-sm text-purple-950 font-semibold ml-52 hover:font-bold"
          >
            Forgot password?
          </button>
        </div>
      </div>
      <div className="items-center flex justify-center mt-10">
        <button
          onClick={handleLogin}
          className="w-[343px] h-11 bg-purple-950 rounded-lg text-white font-semibold hover:bg-purple-900"
        >
          LOG IN
        </button>
      </div>

      
      {error && (
        <p className="mt-4 text-center text-red-500 font-medium">{error}</p>
      )}

      <div className="mt-8">
        <p className="flex items-center justify-center text-sm font-semibold">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/Signup")}
            className="text-purple-950 hover:font-bold hover:text-purple-700"
          >
            Sign up now
          </button>
        </p>
      </div>
    </div>
  );
}
