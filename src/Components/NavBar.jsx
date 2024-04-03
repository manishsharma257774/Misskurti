import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function NavBar() {
  // const [open, setOpen] = useState(false);
  // const [icon, setIcon] = useState(false);

  // const location = useLocation().pathname;
  // const navigate = useNavigate();
  return (
    <>
      <div className="bg-teal-700 h-[37px] w-[100%] text-[15px] flex items-center sm:justify-between justify-center px-[20px]  text-white">
        <div class="font-medium">
          <ul className="flex items-center justify-center gap-[20px] rexr">
            <li>
              <i className="bi bi-telephone-fill p-[5px]"></i> +91-94613 06281{" "}
            </li>
            <li>
              <i className="bi bi-envelope p-[5px]"></i> info@misskurti.com
            </li>
          </ul>
        </div>
        <div className="hidden sm:block font-medium">
          <ul className="flex items-center justify-center gap-[20px]">
            {" "}
            <li>
              <select name="id" id="cars" className="bg-teal-700">
                <option value="volvo">INR</option>
                <option value="saab">USD</option>
              </select>
            </li>
            <li>Login / Signup</li>
          </ul>
        </div>
      </div>
      <div className="block sm:hidden text-white bg-teal-700 font-medium">
        <ul className="flex items-center justify-center gap-[20px]">
          {" "}
          <li>
            <select name="id" id="cars" className="bg-teal-700">
              <option value="volvo">INR</option>
              <option value="saab">USD</option>
            </select>
          </li>
          <li>Login / Signup</li>
        </ul>
      </div>
      <nav className="bg-[#f9f2ea] shadow-2xl">
        <ul className="flex items-center justify-between p-[5px] px-[20px]">
          <li className="border-[1px] border-solid border-gray-400 bg-[#c88843] hidden md:block rounded-[3px]">
            <input
              className="p-[5px] "
              placeholder="Search Products key"
              type="search"
              name=""
              id=""
            />
            <span className="px-[10px] text-[17px] text-white">Search</span>
          </li>
          <li>
            <img src="https://www.misskurti.com/images/logo.jpg" alt="" />
          </li>
          <li className="p-[20px]">
            <ul className="flex items-center justify-center gap-[20px] text-[18px]">
              <li className=" h-[30px] w-[30px] flex items-center justify-center text-center rounded-[50px] border-2 border-solid border-[#c88843] bg-[#c88843] text-white">
                <i class="bi bi-suit-heart-fill"></i>
              </li>
              <li className=" h-[30px] w-[30px] text-center flex items-center justify-center rounded-[50px] border-2 border-solid border-[#c88843] bg-[#c88843] text-white">
                {" "}
                <i class="bi bi-cart-check-fill"></i>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="bg-white border-solid border-[1px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border-gray-200 w-full p-[5px] sticky top-[0px] z-[5]">
        <ul className="flex items-center justify-center gap-[20px] font-medium text-[13px] text-neutral-600 sm:text-[15px]">
          <li class="p-2 border-b-2 border-[#c88843] border-opacity-0 hover:border-opacity-100 hover:text-[#c88843]  duration-200 cursor-pointer active">
            <Link to={"/"}>NEW ARRIVALS</Link>
          </li>
          <li class="p-2 border-b-2 border-[#c88843] border-opacity-0 hover:border-opacity-100 hover:text-[#c88843]  duration-200 cursor-pointer">
            <Link to={"/Kurtaset"}>KURTASET</Link>
          </li>
          <li class="p-2 border-b-2 border-[#c88843] border-opacity-0 hover:border-opacity-100 hover:text-[#c88843]  duration-200 cursor-pointer">
            <Link to={"/TopsTunics"}>TOPS & TUNICS</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
