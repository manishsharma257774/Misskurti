// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function SwiperSlider() {
  return (
    <>
      {" "}
      <div className="flex items-center justify-center w-[100%]">
        <Swiper
          spaceBetween={5}
          slidesPerView={
            window.screen.width > 768 ? 4 : window.screen.width > 640 ? 3 : 2
          }
          loop={true}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px] hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <img
                className="w-[100%] cursor-pointer"
                src="https://www.misskurti.com/thumb/thumb400X700/6c85d0c0a9ef3353943c96c1044e3de1.jpg"
                alt=""
              />
              <p className="p-[2px]  text-[12px] sm:text-[17px] font-normal hover:underline cursor-pointer">
                White Cotton Printed Kurta Dupatta Set...
              </p>
              <span>
                <ul className="flex gap-[15px] text-gray-500 text-[12px] sm:text-[15px]">
                  <li>M</li>
                  <li>L</li>
                  <li>XL</li>
                  <li>2XL</li>
                </ul>
              </span>
              <p className="p-[2px] font-medium text-[13px] sm:text-[17px] text-gray-800">
                <del>
                  <span className="text-[15px] font-normal pr-2">Rs.4250</span>
                </del>{" "}
                Rs.1175{" "}
                <span className=" text-white px-[4px] font-normal bg-[#c88843] rounded-[3px]">
                  72% of
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px] hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <img
                className="w-[100%] cursor-pointer"
                src="https://www.misskurti.com/thumb/thumb400X700/e5d745437507c53ac630366b092ee3a9.jpg"
                alt=""
              />
              <p className="p-[2px] font-normal text-[12px] sm:text-[17px] hover:underline cursor-pointer">
                White Cotton Kurta Dupatta Set...
              </p>
              <span>
                <ul className="flex gap-[15px] text-gray-500 text-[12px] sm:text-[15px]">
                  <li>M</li>
                  <li>L</li>
                  <li>XL</li>
                  <li>2XL</li>
                </ul>
              </span>
              <p className="p-[2px] font-medium text-[13px] sm:text-[17px] text-gray-800">
                <del>
                  <span className="text-[15px] font-normal pr-2">Rs.4250</span>
                </del>{" "}
                Rs.1175{" "}
                <span className=" text-white px-[4px] font-normal bg-[#c88843] rounded-[3px]">
                  72% of
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px] hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <img
                className="w-[100%] cursor-pointer"
                src="https://www.misskurti.com/thumb/thumb400X700/5f4c07818825b73b0078ebe097f2f666.jpg"
                alt=""
              />
              <p className="p-[2px] font-normal text-[12px] sm:text-[17px] hover:underline cursor-pointer">
                White Cotton Embroider Kurta Dupatta Set...
              </p>
              <span>
                <ul className="flex gap-[15px] text-gray-500 text-[12px] sm:text-[15px]">
                  <li>M</li>
                  <li>L</li>
                  <li>XL</li>
                  <li>2XL</li>
                </ul>
              </span>
              <p className="p-[2px] font-medium text-[13px] sm:text-[17px] text-gray-800">
                <del>
                  <span className="text-[15px] font-normal pr-2">Rs.4250</span>
                </del>{" "}
                Rs.1175{" "}
                <span className=" text-white px-[4px] font-normal bg-[#c88843] rounded-[3px]">
                  72% of
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px] hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <img
                className="cursor-pointer"
                src="https://www.misskurti.com/thumb/thumb400X700/5ca2e27abb876ad409d8430740f86ae1.jpg"
                alt=""
              />
              <p className="p-[2px] font-normal text-[12px] sm:text-[17px] hover:underline cursor-pointer">
                Blue Cotton Printed Kurta Dupatta Set...
              </p>
              <span>
                <ul className="flex gap-[15px] text-gray-500 text-[12px] sm:text-[15px]">
                  <li>M</li>
                  <li>L</li>
                  <li>XL</li>
                  <li>2XL</li>
                </ul>
              </span>
              <p className="p-[2px] font-medium text-[13px] sm:text-[17px] text-gray-800">
                <del>
                  <span className="text-[15px] font-normal pr-2">Rs.4250</span>
                </del>{" "}
                Rs.1175{" "}
                <span className=" text-white px-[4px] font-normal bg-[#c88843] rounded-[3px]">
                  72% of
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px] hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <img
                className="cursor-pointer"
                src="https://www.misskurti.com/thumb/thumb400X700/727cdaead0a8c472cdf012d5c1e7c86c.jpg"
                alt=""
              />
              <p className="p-[2px] font-normal text-[12px] sm:text-[17px] hover:underline cursor-pointer">
                Green Cotton Printed Kurta Dupatta Set...
              </p>
              <span>
                <ul className="flex gap-[15px] text-gray-500 text-[12px] sm:text-[15px]">
                  <li>M</li>
                  <li>L</li>
                  <li>XL</li>
                  <li>2XL</li>
                </ul>
              </span>
              <p className="p-[2px] font-medium text-[13px] sm:text-[17px] text-gray-800">
                <del>
                  <span className="text-[15px] font-normal pr-2">Rs.4250</span>
                </del>{" "}
                Rs.1175{" "}
                <span className=" text-white px-[4px] font-normal bg-[#c88843] rounded-[3px]">
                  72% of
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px] hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <img
                className="cursor-pointer"
                src="https://www.misskurti.com/thumb/thumb400X700/e680df0ade2ca7be9580e8c5e1ed2496.jpg"
                alt=""
              />
              <p className="p-[2px] font-normal text-[10px] sm:text-[17px] hover:underline cursor-pointer">
                Blue Cotton Printed Kurta Dupatta Set...
              </p>
              <span>
                <ul className="flex gap-[15px] text-gray-500 text-[12px] sm:text-[15px]">
                  <li>M</li>
                  <li>L</li>
                  <li>XL</li>
                  <li>2XL</li>
                </ul>
              </span>
              <p className="p-[2px] font-medium text-[13px] sm:text-[17px] text-gray-800">
                <del>
                  <span className="text-[15px] font-normal pr-2">Rs.4250</span>
                </del>{" "}
                Rs.1175{" "}
                <span className=" text-white px-[4px] font-normal bg-[#c88843] rounded-[3px]">
                  72% of
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px] hover:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <img
                className="cursor-pointer"
                src="https://www.misskurti.com/thumb/thumb400X700/2bef81a2ecb648055035913f08d125b9.jpg"
                alt=""
              />
              <p className="p-[2px] font-normal text-[10px] sm:text-[17px] hover:underline cursor-pointer">
                Blue Cotton Printed Kurta Dupatta Set...
              </p>
              <span>
                <ul className="flex gap-[15px] text-gray-500 text-[12px] sm:text-[15px]">
                  <li>M</li>
                  <li>L</li>
                  <li>XL</li>
                  <li>2XL</li>
                </ul>
              </span>
              <p className="p-[2px] font-medium text-[13px] sm:text-[17px] text-gray-800">
                <del>
                  <span className="text-[15px] font-normal pr-2">Rs.4250</span>
                </del>{" "}
                Rs.1175{" "}
                <span className=" text-white px-[4px] font-normal bg-[#c88843] rounded-[3px]">
                  72% of
                </span>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
