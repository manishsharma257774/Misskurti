import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SwiperSlider() {
  return (
    <>
      <div className="cursor-e-resize">
        <Swiper
          spaceBetween={1}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          loop={true}
        >
          <SwiperSlide>
            <img
              src="https://www.misskurti.com/home_image/3e749874d5e60f42c126bc14176472b4.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.misskurti.com/home_image/2c75075a14ed2a507b8061ce2e188e46.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.misskurti.com/home_image/3c79f925db9e857ae00ddd22452781e3.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
