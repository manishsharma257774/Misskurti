// Import Swiper React components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function SwiperSlider() {
  return (
    <>
      {" "}
      <div className="flex items-center justify-center w-[100%] p-[30px] cursor-pointer">
        <Swiper
          spaceBetween={5}
          slidesPerView={
            window.screen.width > 768 ? 3 : window.screen.width > 640 ? 2 : 1
          }
          loop={true}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px] border-[1px] border-solid border-gray-200 hover:bg-[#c88843] duration-500 hover:text-white ">
              <span className="flex items-center justify-center text-[50px]">
                <i class="bi bi-quote"></i>
              </span>
              <h1 className="text-center">
                My new kurti arrived yesterday and it's look amazing. I am with
                your service and quality of the product. Would love to shop
                again in the future.
              </h1>
              <div className="flex items-center justify-center">
                <p className="h-[100px] w-[100px] rounded-[50px]">
                  <img
                    className="rounded-[50px]"
                    src="https://www.misskurti.com/images/bf6861a28546d12c84db8d93f2509e87.png"
                    alt=""
                  />
                </p>
              </div>
              <h2 className="text-center">Vaishnavi Soni</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px] border-[1px] border-solid border-gray-200 hover:bg-[#c88843] duration-500 hover:text-white ">
              <span className="flex items-center justify-center text-[50px]">
                <i class="bi bi-quote"></i>
              </span>
              <h1 className="text-center">
                Ordered for my mom as her birthday gift, she loved the pattern.
              </h1>
              <br />
              <div className="flex items-center justify-center">
                <p className="h-[100px] w-[100px] rounded-[50px]">
                  <img
                    className="rounded-[50px]"
                    src="https://www.misskurti.com/images/bf6861a28546d12c84db8d93f2509e87.png"
                    alt=""
                  />
                </p>
              </div>
              <h2 className="text-center">Diksha agarwal</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-auto w-[100%] p-[10px] border-[1px] border-solid border-gray-200 hover:bg-[#c88843] duration-500 hover:text-white 
            "
            >
              <span className="flex items-center justify-center text-[50px]">
                <i class="bi bi-quote"></i>
              </span>
              <h1 className="text-center">
                Love these Kurtis, All my friends asked from where have I bought
                it. Loved the quality and design.. Thank You Miss Kurti
              </h1>
              <div className="flex items-center justify-center">
                <p className="h-[100px] w-[100px] rounded-[50px]">
                  <img
                    className="rounded-[50px]"
                    src="https://www.misskurti.com/images/bf6861a28546d12c84db8d93f2509e87.png"
                    alt=""
                  />
                </p>
              </div>
              <h2 className="text-center">Snehlata Sharma</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px] border-[1px] border-solid border-gray-200 hover:bg-[#c88843] duration-500 hover:text-white ">
              <span className="flex items-center justify-center text-[50px]">
                <i class="bi bi-quote"></i>
              </span>
              <h1 className="text-center">The dsign was gud</h1>
              <br />
              <div className="flex items-center justify-center">
                <p className="h-[100px] w-[100px] rounded-[50px]">
                  <img
                    className="rounded-[50px]"
                    src="https://www.misskurti.com/images/bf6861a28546d12c84db8d93f2509e87.png"
                    alt=""
                  />
                </p>
              </div>
              <br />
              <h2 className="text-center">Kalpana jangid</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px] border-[1px] border-solid border-gray-200 hover:bg-[#c88843] duration-500 hover:text-white ">
              <span className="flex items-center justify-center text-[50px]">
                <i class="bi bi-quote"></i>
              </span>
              <h1 className="text-center">Nice fitting, fabric was soft</h1>
              <br />
              <div className="flex items-center justify-center">
                <p className="h-[100px] w-[100px] rounded-[50px]">
                  <img
                    className="rounded-[50px]"
                    src="https://www.misskurti.com/images/bf6861a28546d12c84db8d93f2509e87.png"
                    alt=""
                  />
                </p>
              </div>
              <br />
              <h2 className="text-center">Pampa Model</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-auto w-[100%] p-[10px] border-[1px] border-solid border-gray-200 hover:bg-[#c88843] duration-500 hover:text-white">
              <span className="flex items-center justify-center text-[50px]">
                <i class="bi bi-quote"></i>
              </span>
              <h1 className="text-center">
                i love the fabric and print.. must buy products
              </h1>
              <br />
              <div className="flex items-center justify-center">
                <p className="h-[100px] w-[100px] rounded-[50px]">
                  <img
                    className="rounded-[50px]"
                    src="https://www.misskurti.com/images/bf6861a28546d12c84db8d93f2509e87.png"
                    alt=""
                  />
                </p>
              </div>
              <br />
              <h2 className="text-center">Archana Sukadia</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
