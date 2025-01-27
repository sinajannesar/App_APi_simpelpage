import { FaSearch } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { IoPersonCircle } from "react-icons/io5";
import { MdOutlineHome, MdOutlineLibraryBooks } from "react-icons/md";
import face from "../../assets/face.png";
import bg from "../../assets/bgnew.png";
import { FiPlayCircle } from "react-icons/fi";
import camera from "../../assets/camera.png";
import se from "../../assets/3d.png";
import { FaClock } from "react-icons/fa6";

export default function Homepage() {
  return (
    <div>
      <div className=" min-h-screen p-4">
        <div className="flex justify-between items-center mb-4">
          <a href="#">
            <BsGridFill className="text-purple-900 text-2xl -mt-3" />
          </a>

          <img src={face} alt="" />
        </div>
        <div className="text-xl font-bold -mt-4">Hello, Habibah</div>
        <p className="text-gray-500 text-sm">What do you want to learn?</p>
        <div className="relative mt-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-purple-900 rounded-full p-3 pl-10 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
          <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div className=" rounded-lg p-4 mt-1 flex items-center text-white">
          <img src={bg} alt="" />
          <div className=" absolute">
            <button className="mt-16 bg-[#C983DE] w-18 h-7 ml-2 text-whait text-sm font-semibold py-1 px-3 rounded">
              View now
            </button>
          </div>
        </div>

        <div className="">
          <h3 className="font-bold text-lg">Course</h3>
          <div className="flex space-x-4 mt-1  text-purple-700 font-semibold text-sm">
            <button className=" w-7 h-6 text-purple-700  hover:border hover:rounded-2xl  hover:bg-purple-950 hover:text-white hover:font-normal border-purple-900">
              All
            </button>
            <button className=" w-20 h-6 hover:border hover:rounded-2xl  hover:bg-purple-950 hover:text-white hover:font-normal ">
              Design
            </button>
            <button className=" w-[115px] h-6 hover:border hover:rounded-2xl  hover:bg-purple-950 hover:text-white hover:font-normal ">
              Programming
            </button>
            <button className="hover:border hover:rounded-2xl w-14 h-6 hover:bg-purple-950 hover:text-white hover:font-normal">
              UI/UX
            </button>
          </div>
        </div>

        <div className="mt-3 space-y-2">
          <button className="bg-white rounded-lg shadow p-4 w-[343px] flex items-center">
            <div className="bg-purple-100 p-1  rounded">
              <img src={camera} className="text-purple-500 w-12" />
            </div>
            <div className="ml-4 ">
              <h4 className="font-bold">Photoshop Course</h4>
              <p className="text-gray-500 text-sm -ml-2 flex gap-2">
                ⭐ 4.5 <FaClock className="mt-1" />
                5h 15m
              </p>
            </div>
          </button>
          <button className="bg-white rounded-lg shadow p-3 w-[343px] flex items-center">
            <div className="bg-purple-100 p-3 rounded">
              <img src={se} className="text-purple-500 text-2xl w-8" />
            </div>
            <div className="ml-4 ">
              <h4 className="font-bold -ml-7">3D Design</h4>
              <div className="flex ">
                <p className="text-gray-500 text-sm flex gap-1">
                  ⭐ 4.6 <FaClock className="mt-1 " />
                  10h 30m
                </p>
              </div>
            </div>
          </button>
        </div>

        <div className="  bg-white mt-2 flex justify-around py-2 gap-9">
          <button className="flex flex-col items-center text-gray-500 hover:text-purple-900 ">
            <MdOutlineHome className="text-2xl" />
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center text-gray-500 hover:text-purple-900">
            <FiPlayCircle className="text-2xl" />
            <span className="text-xs">My Courses</span>
          </button>
          <button className="flex flex-col items-center text-gray-500 hover:text-purple-900">
            <MdOutlineLibraryBooks className="text-2xl" />
            <span className="text-xs">Blogs</span>
          </button>
          <button className="flex flex-col items-center text-gray-500 hover:text-purple-900">
            <IoPersonCircle className="text-2xl" />
            <span className="text-xs">My Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
