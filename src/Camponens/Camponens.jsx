import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigashion from "./Hedear/Navigashion";
import Onbording1 from "../Camponens/Onbording/Onbording1";
import Signup from "./Signup/Signup";
import VerifyEmail from "./Signup/VerifyEmail";
import Login from "./Login/Login";
import Forgot from "./Login/Forgot";
import Resetpassword from "./Login/Resetpassword";
import Homepage from "./Homepage/Homepage";

function LayoutWrapper() {

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className=" w-[375px] h-[667px] bg-white shadow-lg rounded-lg overflow-hidden">
        <Navigashion />
        <Routes>
          <Route path="/" element={<Onbording1 />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/VerifyEmail" element={<VerifyEmail />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/Resetpassword" element={<Resetpassword />} />
          <Route path="/Homepage" element={<Homepage />} />
        </Routes>
      </div>
    </div>
  );
}

export default function Camponens() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}
