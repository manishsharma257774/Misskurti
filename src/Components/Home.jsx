import React from "react";
import FirstSlider from "./OnSlider/FirstSlider";
import SecondSlider from "./OnSlider/SecondSlider";
import ThirdSlider from "./OnSlider/ThirdSlider";
import Footer from "./Footer";
export default function Home() {
  return (
    <>
      <div className="h-auto w-[100%]">
        <FirstSlider />
      </div>
      <div className=" p-[20px] w-[100%] flex items-center justify-center">
        <h1 className="text-[20px] sm:text-[22px] md:text-[30px] font-normal text-gray-700 border-b-4 border-black border-opacity-100 cursor-pointer">
          TRENDING PRODUCTS
        </h1>
      </div>
      <div className=" w-full h-auto p-[10px]">
        <ul className="flex items-center justify-center gap-[20px] font-medium text-[11px] text-neutral-600 sm:text-[15px]">
          <li class="p-4 border-b-2 border-[#c88843]  border-opacity-0 hover:border-opacity-100 hover:text-[#c88843]  duration-200 cursor-pointer active">
            <a href="">NEW ARRIVALS</a>
          </li>
          <li class="p-4 border-b-2 border-[#c88843]  border-opacity-0 hover:border-opacity-100 hover:text-[#c88843] duration-200 cursor-pointer">
            <a href="">KURTASET</a>
          </li>
          <li class="p-4 border-b-2 border-[#c88843]  border-opacity-0 hover:border-opacity-100 hover:text-[#c88843]  duration-200 cursor-pointer">
            <a href="">TOPS & TUNICS</a>
          </li>
        </ul>
      </div>
      <div className=" h-auto w-[100%]">
        <div className=" h-auto w-[100%]">
          <SecondSlider />
        </div>
      </div>
      <br />
      <br />
      <div className=" p-[10px] w-[100%] flex items-center justify-center">
        <h1 className="text-[20px] sm:text-[22px] md:text-[33px] font-normal text-gray-700 border-b-4 border-black border-opacity-100 cursor-pointer">
          COLLECTION{" "}
        </h1>
      </div>
      <div className=" h-auto w-full grid grid-cols-1 p-[40px] sm:grid-cols-2 md:grid-cols-3 gap-[25px]">
        <div className="w-[100%] cursor-pointer">
          <img
            src="https://www.misskurti.com/home_image/077bac73622a2de780225261b21736ce.png"
            alt=""
          />
        </div>
        <div className="w-[100%] cursor-pointer">
          <img
            src="https://www.misskurti.com/home_image/259f22268745097d7ff04bcbdd448dda.png"
            alt=""
          />
        </div>
        <div className=" w-[100%] block sm:hidden md:block cursor-pointer">
          <img
            src="https://www.misskurti.com/home_image/c6824b141739dcb14676448bcea61728.png"
            alt=""
          />
        </div>
      </div>
      <br />
      <div className=" p-[10px] w-[100%] flex items-center justify-center">
        <h1 className="text-[20px] sm:text-[22px] md:text-[33px] font-normal text-gray-700 border-b-4 border-black border-opacity-100 cursor-pointer">
          CATEGORIES{" "}
        </h1>
      </div>
      {/* <div className=" h-auto w-full grid grid-cols-1 p-[40px] sm:grid-cols-2  border-2 border-solid border-red-500">
        <div className="w-[40%] border-2 border-solid border-red-500 h-[600px]"></div>
        <div className="w-[100%] border-2 border-solid border-red-200 h-[600px]"></div>
      </div> */}
      <div className=" h-auto w-full grid grid-cols-1 sm:grid-cols-2 gap-[20px] p-[20px]">
        <div>
          <img
            src="https://www.misskurti.com/images/free-shipping-ban.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.misskurti.com/images/secure-payment-ban.jpg"
            alt=""
          />
        </div>
      </div>
      <br />
      <div className=" w-[100%] flex items-center justify-center">
        <h1 className="text-[20px] sm:text-[22px] md:text-[33px] font-normal text-gray-800 cursor-pointer">
          <i class="bi bi-instagram text-fuchsia-400"></i> @misskurti{" "}
        </h1>
      </div>
      <div className=" h-auto w-[100%]  flex items-center justify-center p-[40px]">
        <div className=" h-auto w-[100%]  grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-3">
          <div className="h-auto w-[100%] overflow-hidden ">
            <img
              className="hover:scale-105 duration-300 cursor-pointer"
              src="https://www.misskurti.com/images/instaimages/9eb1a996728b272caee3c7dc4d093cbc.JPG"
              alt=""
            />
          </div>
          <div className="h-auto w-[100%] overflow-hidden">
            <img
              className="hover:scale-105 duration-300 cursor-pointer"
              src="https://www.misskurti.com/images/instaimages/4fd471d14da5e6c751100f60f2aa9765.JPG"
              alt=""
            />
          </div>
          <div className="h-auto w-[100%] overflow-hidden">
            <img
              className="hover:scale-105 duration-300 cursor-pointer"
              src="https://www.misskurti.com/images/instaimages/4a4f9905d276f48ffff2cb9b52a238a0.JPG"
              alt=""
            />
          </div>
          <div className="h-auto w-[100%] overflow-hidden">
            <img
              className="hover:scale-105 duration-300 cursor-pointer"
              src="https://www.misskurti.com/images/instaimages/cfd400993474fafb99882e614bd82046.JPG"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" w-[100%] flex items-center justify-center">
        <h1 className="text-[20px] sm:text-[22px] md:text-[33px] font-normal text-gray-800 border-b-4 border-black border-opacity-100 cursor-pointer">
          Reviews{" "}
        </h1>
      </div>
      <br />
      <div className=" h-auto w-[100%]">
        <div className=" h-auto w-[100%]">
          <ThirdSlider />
        </div>
      </div>
      <br />
      
    </>
  );
}
