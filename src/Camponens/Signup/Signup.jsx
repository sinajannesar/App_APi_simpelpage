import logo from "../../assets/Logosignup.png";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const navigate = useNavigate();
  const navi = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      // ارسال اطلاعات به API
      const response = await axios.post("https://example.com/api/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      if (response.data.success) {
        // هدایت به صفحه بعدی
        navigate("/VerifyEmail", { state: { email: formData.email } });
      } else {
        setError(response.data.message || "Something went wrong.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to sign up.");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-4">
        <img src={logo} className="w-28 h-24" />
        <p className="text-[18px] font-semibold text-purple-950">
          Create An Account
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 w-full max-w-sm mx-auto p-4">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-purple-950 mb-1 ">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Design Withdesigners"
              className="w-full border border-purple-950 border-1 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-purple-950"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-purple-950 mb-1">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="designwithdesigners@gmail.com"
                className="w-full border border-purple-950 border-1 rounded-md p-2 text-sm pl-10 focus:outline-none focus:ring-1 focus:ring-purple-950"
              />
              <svg
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-purple-400 w-10 mt-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <CgMail />
              </svg>
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-purple-950 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="DesignWITHdesigners12345"
                className="w-full border border-purple-950 border-1 rounded-md p-2 text-sm pr-10 focus:outline-none focus:ring-1 focus:ring-purple-950"
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

          <div className="space-y-1">
            <label className="block text-sm font-medium text-purple-950 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="DesignWITHdesigners12345"
                className="w-full border border-purple-950 rounded-md p-2 text-sm pr-10 focus:outline-none focus:ring-1 focus:ring-purple-950"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
        </div>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        <div className="flex justify-center items-center flex-col mt-6 gap-8">
          <button
            type="submit"
            className="h-12 w-[335px] whitespace-nowrap font-semibold text-white bg-purple-900 rounded-lg items-center hover:bg-purple-950"
          >
            SIGN UP
          </button>
          <p>
            Have an account already?
            <button
              onClick={() => navi("/Login")}
              className="text-purple-900 hover:font-bold font-semibold"
            >
              Log in
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
