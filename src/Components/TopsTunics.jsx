import React from "react";
import Footer from "./Footer";

export default function () {
  return (
    <>
      <div className="p-[8px] w-[100%] bg-neutral-100">
        <h1>Home / Tops & Tunics</h1>
      </div>
      <div className=" h-auto w-[100%] grid p-[30px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
        <div className=" h-auto w-[100%] flex items-center justify-center p-[10px]">
          <div className=" border-[1px] border-solid border-neutral-300 bg-[#f9f2ea] w-[100%] p-[3px]">
            <ul className="flex items-center justify-between">
              <li>Size</li>
              <li className="text-[20px]">
                <i class="bi bi-dash"></i>
              </li>
            </ul>
          </div>
        </div>

        <div className=" h-auto w-[100%] flex items-center justify-between ">
          <h1 className="text-[23px]">Tops & Tunics</h1>
          <select
            name="id"
            id="cars"
            className="p-[5px] border-[1px] border-solid border-neutral-300"
          >
            <option value="volvo">Sort By</option>
            <option value="saab">Price (Low to High)</option>
            <option value="saab">Price (High to Low)</option>
            <option value="saab">New Arrival</option>
          </select>
        </div>
      </div>
      <div className=" h-auto w-full flex p-[10px]">
        <div className=" h-auto w-[30%] hidden lg:block">
          <div className="flex items-center justify-center pt-[10px]">
            <ul className="flex gap-[15px]">
              <li className="h-[40px] w-[40px] border-[1px] flex items-center justify-center border-solid border-neutral-400">
                XS
              </li>
              <li className="h-[40px] w-[40px] border-[1px] flex items-center justify-center border-solid border-neutral-400">
                {" "}
                S
              </li>
              <li className="h-[40px] w-[40px] border-[1px] flex items-center justify-center border-solid border-neutral-400">
                {" "}
                M
              </li>
              <li className="h-[40px] w-[40px] border-[1px] flex items-center justify-center border-solid border-neutral-400">
                {" "}
                L
              </li>
              <li className="h-[40px] w-[40px] border-[1px] flex items-center justify-center border-solid border-neutral-400">
                {" "}
                XL
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center pt-[10px]">
            <ul className="flex gap-[15px]">
              <li className="h-[40px] w-[40px] border-[1px] flex items-center justify-center border-solid border-neutral-400">
                2XL
              </li>
              <li className="h-[40px] w-[40px] border-[1px] flex items-center justify-center border-solid border-neutral-400">
                {" "}
                3XL
              </li>
              <li className="h-[40px] w-[40px] border-[1px] flex items-center justify-center border-solid border-neutral-400">
                {" "}
                4XL
              </li>
              <li className="h-[40px] w-[40px] border-[1px] flex items-center justify-center border-solid border-neutral-400">
                {" "}
                5XL
              </li>
            </ul>
          </div>
          <br />
          <h1 className="h-auto w-full border-[1px] border-solid border-neutral-300 bg-[#f9f2ea]">
            <ul className="flex items-center justify-between text-[20px] px-[10px]">
              <li>Color</li>
              <li>
                {" "}
                <i class="bi bi-dash"></i>
              </li>
            </ul>
          </h1>
          <div className="h-auto w-full">
            <ul className="p-[20px]">
              <li className="">
                <input
                  className="h-[20px] pt-[5px] w-[20px] bg-black border-[1px] border-solid border-neutral-400"
                  type="text"
                />
                <span className="pl-[8px]">Black</span>
              </li>
              <li className="">
                <input
                  className="h-[20px] w-[20px] pt-[10px] bg-white border-[1px] border-solid border-neutral-400"
                  type="text"
                />
                <span className="pl-[8px]">White</span>
              </li>

              <li className="">
                <input
                  className="h-[20px] w-[20px] pt-[10px] bg-blue-600 border-[1px] border-solid border-neutral-400"
                  type="text"
                />
                <span className="pl-[8px]">Blue</span>
              </li>
              <li className="">
                <input
                  className="h-[20px] w-[20px] pt-[10px] bg-green-600 border-[1px] border-solid border-neutral-400"
                  type="text"
                />
                <span className="pl-[8px]">Green</span>
              </li>

              <li className="">
                <input
                  className="h-[20px] w-[20px] pt-[10px] bg-orange-600 border-[1px] border-solid border-neutral-400"
                  type="text"
                />
                <span className="pl-[8px]">Orange</span>
              </li>
              <li className="">
                <input
                  className="h-[20px] w-[20px] pt-[10px] bg-[#FFE5B4] border-[1px] border-solid border-neutral-400"
                  type="text"
                />
                <span className="pl-[8px]">Peach</span>
              </li>

              <li className="">
                <input
                  className="h-[20px] w-[20px] pt-[10px] bg-purple-600 border-[1px] border-solid border-neutral-400"
                  type="text"
                />
                <span className="pl-[8px]">Purple</span>
              </li>
              <li className="">
                <input
                  className="h-[20px] w-[20px] pt-[10px] bg-red-600 border-[1px] border-solid border-neutral-400 "
                  type="text"
                />
                <span className="pl-[8px]">Red</span>
              </li>
              <li className="">
                <input
                  className="h-[20px] w-[20px] pt-[10px] bg-yellow-400 border-[1px] border-solid border-neutral-400"
                  type="text"
                />
                <span className="pl-[8px]">Yellow</span>
              </li>
              <li className="">
                <input
                  className="h-[20px] w-[20px] pt-[10px] bg-[#40E0D0] border-[1px] border-solid border-neutral-400"
                  type="text"
                />
                <span className="pl-[8px]">Turquoise</span>
              </li>
            </ul>
          </div>
        </div>
        <div className=" h-auto w-[100%] sm:w-[100%] grid grid-cols-2 md:grid-cols-3 gap-[15px] p-[10px]">
          <div className=" bg-white">
            <img
              className="w-[100%]"
              src="https://www.misskurti.com/thumb/thumb400X700/26b385ef4d139e9c562b836e03ca5d3c.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Women's Straight Black Embroidered Kurti{" "}
            </p>
            <span>
              <ul className="flex gap-[15px] text-gray-500 text-[10px] sm:text-[15px]">
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
              </ul>
            </span>
            <p className="p-[2px] font-medium text-[12px] sm:text-[15px] text-gray-800">
              <del>
                <span className=" font-normal pr-2">Rs.2199</span>
              </del>{" "}
              Rs.599{" "}
              <span className=" text-white px-[4px]  font-normal bg-[#c88843] rounded-[3px]">
                73% of
              </span>
            </p>
          </div>
          <div className=" bg-white">
            <img
              className="w-[100%]"
              src="https://www.misskurti.com/thumb/thumb400X700/a04ce4ebe5d0839a40c782ac21581b9f.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Blue Color Muslin Printed Kurta Dupatta Set..{" "}
            </p>
            <span>
              <ul className="flex gap-[15px] text-gray-500 text-[10px] sm:text-[15px]">
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
              </ul>
            </span>
            <p className="p-[2px] font-medium text-[12px] sm:text-[15px] text-gray-800">
              <del>
                <span className=" font-normal pr-2">Rs.2199</span>
              </del>{" "}
              Rs.599{" "}
              <span className=" text-white px-[4px]  font-normal bg-[#c88843] rounded-[3px]">
                73% of
              </span>
            </p>
          </div>
          <div className=" bg-white hidden md:block">
            <img
              className="w-[100%]"
              src="https://www.misskurti.com/thumb/thumb400X700/7b5cda01e08893512b402eee568d4d0a.jpg"
              alt=""
            />{" "}
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Blue Color Muslin Printed Kurta Dupatta Set..{" "}
            </p>
            <span>
              <ul className="flex gap-[15px] text-gray-500 text-[10px] sm:text-[15px]">
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
              </ul>
            </span>
            <p className="p-[2px] font-medium text-[12px] sm:text-[15px] text-gray-800">
              <del>
                <span className=" font-normal pr-2">Rs.2199</span>
              </del>{" "}
              Rs.599{" "}
              <span className=" text-white px-[4px]  font-normal bg-[#c88843] rounded-[3px]">
                73% of
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className=" h-auto w-full flex p-[10px]">
        <div className=" h-auto w-[30%] hidden lg:block">
          <br />
          <h1 className="h-auto w-full border-[1px] border-solid border-neutral-300 bg-[#f9f2ea]">
            <ul className="flex items-center justify-between text-[20px] px-[10px]">
              <li>Color</li>
              <li>
                {" "}
                <i class="bi bi-dash"></i>
              </li>
            </ul>
          </h1>
          <div className="flex items-center pl-[20px] pt-[5px]">
            <ul>
              <li className="">
                <input type="checkbox" />
                <span className="pl-[7px]">Below Rs. 1000</span>
              </li>
              <li>
                <input type="checkbox" />
                <span className="pl-[7px]">Rs. 1000 - Rs. 2000</span>
              </li>
              <li>
                <input type="checkbox" />
                <span className="pl-[7px]">Rs. 2001 - Rs. 3000</span>
              </li>
              <li>
                <input type="checkbox" />
                <span className="pl-[7px]">Rs. 3001 - Rs. 4000</span>
              </li>
              <li>
                <input type="checkbox" />
                <span className="pl-[7px]">Rs. 4001 - Rs. 5000</span>
              </li>
              <li>
                <input type="checkbox" />
                <span className="pl-[7px]">Above Rs. 5000</span>
              </li>
            </ul>
          </div>
          <h1 className="h-auto w-full mt-[5px] border-[1px] border-solid border-neutral-300 bg-[#f9f2ea]">
            <ul className="flex items-center justify-between text-[20px] px-[10px]">
              <li>Length</li>
              <li>
                {" "}
                <i class="bi bi-dash"></i>
              </li>
            </ul>
          </h1>
          <div className="flex items-center pl-[20px] pt-[5px]">
            <ul>
              <li>
                <input type="checkbox" />
                <span className="pl-[7px]">Long</span>
              </li>
              <li>
                <input type="checkbox" />
                <span className="pl-[7px]">Regular</span>
              </li>
              <li>
                <input type="checkbox" />
                <span className="pl-[7px]">Short</span>
              </li>
            </ul>
          </div>
          <h1 className="h-auto w-full border-[1px] border-solid border-neutral-300 bg-[#f9f2ea]">
            <ul className="flex items-center justify-between text-[20px] px-[10px]">
              <li>Length</li>
              <li>
                {" "}
                <i class="bi bi-dash"></i>
              </li>
            </ul>
          </h1>
          <div className="flex items-center p-[20px] pt-[10px]">
            <ul>
              <li>
                <input type="checkbox" />
                <span className="pl-[7px]">Plain</span>
              </li>
              <li>
                <input type="checkbox" />
                <span className="pl-[7px]">Embroidery</span>
              </li>
              <li>
                <input type="checkbox" />
                <span className="pl-[7px]">Printed</span>
              </li>
              <li>
                <input type="checkbox" />
                <span className="pl-[7px]">Hand-Work</span>
              </li>
            </ul>
          </div>
        </div>

        <div className=" h-auto w-[100%] sm:w-[100%] grid grid-cols-2 md:grid-cols-3 gap-[15px] p-[10px]">
          <div className=" bg-white">
            <img
              className="w-[100%]"
              src="https://www.misskurti.com/thumb/thumb400X700/d5b4a588d3e47497d3e03cd8eb6ececd.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Women's Navy Shirt Style Top{" "}
            </p>
            <span>
              <ul className="flex gap-[15px] text-gray-500 text-[10px] sm:text-[15px]">
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
              </ul>
            </span>
            <p className="p-[2px] font-medium text-[12px] sm:text-[15px] text-gray-800">
              <del>
                <span className=" font-normal pr-2">Rs.2199</span>
              </del>{" "}
              Rs.599{" "}
              <span className=" text-white px-[4px]  font-normal bg-[#c88843] rounded-[3px]">
                73% of
              </span>
            </p>
          </div>
          <div className=" bg-white">
            <img
              className="w-[100%]"
              src="https://www.misskurti.com/thumb/thumb400X700/f59a12675a5b7a097f5354c89887ba30.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Beige Color Cotton Linen Printed Kurta Dupatta Set{" "}
            </p>
            <span>
              <ul className="flex gap-[15px] text-gray-500 text-[10px] sm:text-[15px]">
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
              </ul>
            </span>
            <p className="p-[2px] font-medium text-[12px] sm:text-[15px] text-gray-800">
              <del>
                <span className=" font-normal pr-2">Rs.2199</span>
              </del>{" "}
              Rs.599{" "}
              <span className=" text-white px-[4px]  font-normal bg-[#c88843] rounded-[3px]">
                73% of
              </span>
            </p>
          </div>
          <div className=" bg-white hidden md:block">
            <img
              className="w-[100%]"
              src="https://www.misskurti.com/thumb/thumb400X700/b1833a16b6b3402c6ccc715bd9aa083a.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Multi Color Muslin Printed Kurta Dupatta Set{" "}
            </p>
            <span>
              <ul className="flex gap-[15px] text-gray-500 text-[10px] sm:text-[15px]">
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
              </ul>
            </span>
            <p className="p-[2px] font-medium text-[12px] sm:text-[15px] text-gray-800">
              <del>
                <span className=" font-normal pr-2">Rs.2199</span>
              </del>{" "}
              Rs.599{" "}
              <span className=" text-white px-[4px]  font-normal bg-[#c88843] rounded-[3px]">
                73% of
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className=" h-auto w-full flex p-[10px]">
        <div className=" h-auto w-[30%] hidden lg:block">
          <br />
          <h1 className="h-auto w-full border-[1px] border-solid border-neutral-300 bg-[#f9f2ea]">
            <ul className="flex items-center justify-between text-[20px] px-[10px]">
              <li>Sleeve</li>
              <li>
                {" "}
                <i class="bi bi-dash"></i>
              </li>
            </ul>
          </h1>
          <div className="flex items-center pl-[20px] pt-[5px]">
            <ul>
              <li className="">
                <input type="checkbox" />
                <span className="pl-[7px]">Full Sleeve</span>
              </li>
              <li>
                <input type="checkbox" />
                <span className="pl-[7px]">3-4th Sleeves</span>
              </li>
              <li>
                <input type="checkbox" />
                <span className="pl-[7px]">Half Sleeve</span>
              </li>
              <li>
                <input type="checkbox" />
                <span className="pl-[7px]">Sleeveless</span>
              </li>
            </ul>
          </div>
          <h1 className="h-auto w-full mt-[5px] border-[1px] border-solid border-neutral-300 bg-[#f9f2ea]">
            <ul className="flex items-center justify-between text-[20px] px-[10px]">
              <li>Neck</li>
              <li>
                {" "}
                <i class="bi bi-dash"></i>
              </li>
            </ul>
          </h1>
          <div className="flex items-center pl-[20px] pt-[5px]">
            <ul>
              <li>
                <input type="checkbox" />
                <span className="pl-[7px]">Mandarin</span>
              </li>
              <li>
                <input type="checkbox" />
                <span className="pl-[7px]">Keyhole</span>
              </li>
              <li>
                <input type="checkbox" />
                <span className="pl-[7px]">Regular Collar</span>
              </li>
              <li>
                <input type="checkbox" />
                <span className="pl-[7px]">Round Neck</span>
              </li>
              <li>
                <input type="checkbox" />
                <span className="pl-[7px]">V Neck</span>
              </li>
            </ul>
          </div>
          <h1 className="h-auto w-full border-[1px] border-solid border-neutral-300 bg-[#f9f2ea]">
            <ul className="flex items-center justify-between text-[20px] px-[10px]">
              <li>Fit</li>
              <li>
                {" "}
                <i class="bi bi-dash"></i>
              </li>
            </ul>
          </h1>
          <div className="flex items-center p-[20px] pt-[10px]">
            <ul>
              <li>
                <input type="checkbox" />
                <span className="pl-[7px]">Flared</span>
              </li>
              <li>
                <input type="checkbox" />
                <span className="pl-[7px]">Straight</span>
              </li>
              <li>
                <input type="checkbox" />
                <span className="pl-[7px]">A-Line</span>
              </li>
              <li>
                <input type="checkbox" />
                <span className="pl-[7px]">Anarkali</span>
              </li>
            </ul>
          </div>
        </div>
        <div className=" h-auto w-[100%] sm:w-[100%] grid grid-cols-2 md:grid-cols-3 gap-[15px] p-[10px]">
          <div className=" bg-white">
            <img
              className="w-[100%]"
              src="https://www.misskurti.com/thumb/thumb400X700/dee102af184b000837fcc25a939f5e10.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Women's Straight Black Embroidered Kurti{" "}
            </p>
            <span>
              <ul className="flex gap-[15px] text-gray-500 text-[10px] sm:text-[15px]">
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
              </ul>
            </span>
            <p className="p-[2px] font-medium text-[12px] sm:text-[15px] text-gray-800">
              <del>
                <span className=" font-normal pr-2">Rs.2199</span>
              </del>{" "}
              Rs.599{" "}
              <span className=" text-white px-[4px]  font-normal bg-[#c88843] rounded-[3px]">
                73% of
              </span>
            </p>
          </div>
          <div className=" bg-white">
            <img
              className="w-[100%]"
              src="https://www.misskurti.com/thumb/thumb400X700/4a498e5bd01b31463072a7e21c328601.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Women's Black Embroidered Top{" "}
            </p>
            <span>
              <ul className="flex gap-[15px] text-gray-500 text-[10px] sm:text-[15px]">
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
              </ul>
            </span>
            <p className="p-[2px] font-medium text-[12px] sm:text-[15px] text-gray-800">
              <del>
                <span className=" font-normal pr-2">Rs.2199</span>
              </del>{" "}
              Rs.599{" "}
              <span className=" text-white px-[4px]  font-normal bg-[#c88843] rounded-[3px]">
                73% of
              </span>
            </p>
          </div>
          <div className=" bg-white hidden md:block">
            <img
              className="w-[100%]"
              src="https://www.misskurti.com/thumb/thumb400X700/8a7d8f399086540611019a6d770f6157.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Women's Wine Color Embroidered Top{" "}
            </p>
            <span>
              <ul className="flex gap-[15px] text-gray-500 text-[10px] sm:text-[15px]">
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
              </ul>
            </span>
            <p className="p-[2px] font-medium text-[12px] sm:text-[15px] text-gray-800">
              <del>
                <span className=" font-normal pr-2">Rs.2199</span>
              </del>{" "}
              Rs.599{" "}
              <span className=" text-white px-[4px]  font-normal bg-[#c88843] rounded-[3px]">
                73% of
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className=" h-auto w-full flex p-[10px]">
        <div className=" h-auto w-[30%] hidden lg:block"></div>

        <div className=" h-auto w-[100%] sm:w-[100%] grid grid-cols-2 md:grid-cols-3 gap-[15px] p-[10px]">
          <div className=" bg-white">
            <img
              className="w-[100%]"
              src="https://www.misskurti.com/thumb/thumb400X700/7c6f2183f1836b87d32215a0b6774f3e.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Women's Pink Embroidered Top{" "}
            </p>
            <span>
              <ul className="flex gap-[15px] text-gray-500 text-[10px] sm:text-[15px]">
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
              </ul>
            </span>
            <p className="p-[2px] font-medium text-[12px] sm:text-[15px] text-gray-800">
              <del>
                <span className=" font-normal pr-2">Rs.4999</span>
              </del>{" "}
              Rs.1199{" "}
              <span className=" text-white px-[4px] font-normal bg-[#c88843] rounded-[3px]">
                76% of
              </span>
            </p>
          </div>
          <div className=" bg-white">
            <img
              className="w-[100%]"
              src="https://www.misskurti.com/thumb/thumb400X700/b2eba9f0a84c65973ce20fe058025afc.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              White Printed Cotton Kurta Dupatta Set{" "}
            </p>
            <span>
              <ul className="flex gap-[15px] text-gray-500 text-[10px] sm:text-[15px]">
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
              </ul>
            </span>
            <p className="p-[2px] font-medium text-[12px] sm:text-[15px] text-gray-800">
              <del>
                <span className=" font-normal pr-2">Rs.4999</span>
              </del>{" "}
              Rs.1199{" "}
              <span className=" text-white px-[4px] font-normal bg-[#c88843] rounded-[3px]">
                76% of
              </span>
            </p>
          </div>
          <div className=" bg-white hidden md:block">
            <img
              className="w-[100%]"
              src="https://www.misskurti.com/thumb/thumb400X700/553abcb063c45c84c40b731e6af463fc.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              White Printed Cotton Kurta Dupatta Set{" "}
            </p>
            <span>
              <ul className="flex gap-[15px] text-gray-500 text-[10px] sm:text-[15px]">
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
              </ul>
            </span>
            <p className="p-[2px] font-medium text-[12px] sm:text-[15px] text-gray-800">
              <del>
                <span className=" font-normal pr-2">Rs.4999</span>
              </del>{" "}
              Rs.1199{" "}
              <span className=" text-white px-[4px] font-normal bg-[#c88843] rounded-[3px]">
                76% of
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className=" h-auto w-full flex p-[10px]">
        <div className=" h-auto w-[30%] hidden lg:block"></div>

        <div className=" h-auto w-[100%] sm:w-[100%] grid grid-cols-2 md:grid-cols-3 gap-[15px] p-[10px]">
          <div className=" bg-white">
            <img
              className="w-[100%]"
              src="https://www.misskurti.com/thumb/thumb400X700/cf863e1f352ceccac7a2fd6bbeb3ac5c.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Printed Mustard Cotton Kaftan Top{" "}
            </p>
            <span>
              <ul className="flex gap-[15px] text-gray-500 text-[10px] sm:text-[15px]">
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
              </ul>
            </span>
            <p className="p-[2px] font-medium text-[12px] sm:text-[15px] text-gray-800">
              <del>
                <span className=" font-normal pr-2">Rs.4999</span>
              </del>{" "}
              Rs.1199{" "}
              <span className=" text-white px-[4px] font-normal bg-[#c88843] rounded-[3px]">
                76% of
              </span>
            </p>
          </div>
          <div className=" bg-white">
            <img
              className="w-[100%]"
              src="https://www.misskurti.com/thumb/thumb400X700/20d85ffdd5fc64ffcfe5930d5d0e3b9d.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Blue Cotton Printed Kurta Dupatta Set{" "}
            </p>
            <span>
              <ul className="flex gap-[15px] text-gray-500 text-[10px] sm:text-[15px]">
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
              </ul>
            </span>
            <p className="p-[2px] font-medium text-[12px] sm:text-[15px] text-gray-800">
              <del>
                <span className=" font-normal pr-2">Rs.4999</span>
              </del>{" "}
              Rs.1199{" "}
              <span className=" text-white px-[4px] font-normal bg-[#c88843] rounded-[3px]">
                76% of
              </span>
            </p>
          </div>
          <div className=" bg-white hidden md:block">
            <img
              className="w-[100%]"
              src="https://www.misskurti.com/thumb/thumb400X700/44cb46880b949d441fe6ad16b19ba3a9.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Green Cotton Printed Kurta Dupatta Set{" "}
            </p>
            <span>
              <ul className="flex gap-[15px] text-gray-500 text-[10px] sm:text-[15px]">
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
              </ul>
            </span>
            <p className="p-[2px] font-medium text-[12px] sm:text-[15px] text-gray-800">
              <del>
                <span className=" font-normal pr-2">Rs.4999</span>
              </del>{" "}
              Rs.1199{" "}
              <span className=" text-white px-[4px] font-normal bg-[#c88843] rounded-[3px]">
                76% of
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className=" h-auto w-full flex p-[10px]">
        <div className=" h-auto w-[30%] hidden lg:block"></div>

        <div className=" h-auto w-[100%] sm:w-[100%] grid grid-cols-2 md:grid-cols-3 gap-[15px] p-[10px]">
          <div className=" bg-white">
            <img
              className="w-[100%]"
              src="https://www.misskurti.com/thumb/thumb400X700/ef7a2294f299d470d27741447014db4e.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Red & White Strip Printed Cotton Kaftan Top{" "}
            </p>
            <span>
              <ul className="flex gap-[15px] text-gray-500 text-[10px] sm:text-[15px]">
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
              </ul>
            </span>
            <p className="p-[2px] font-medium text-[12px] sm:text-[15px] text-gray-800">
              <del>
                <span className=" font-normal pr-2">Rs.2199</span>
              </del>{" "}
              Rs.549{" "}
              <span className=" text-white px-[4px] font-normal bg-[#c88843] rounded-[3px]">
                75% of
              </span>
            </p>
          </div>
          <div className=" bg-white">
            <img
              className="w-[100%]"
              src="https://www.misskurti.com/thumb/thumb400X700/5b9444310d466c2bffbb27fedc2c1f0f.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Blue Cotton Printed Kurta Dupatta Set{" "}
            </p>
            <span>
              <ul className="flex gap-[15px] text-gray-500 text-[10px] sm:text-[15px]">
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
              </ul>
            </span>
            <p className="p-[2px] font-medium text-[12px] sm:text-[15px] text-gray-800">
              <del>
                <span className=" font-normal pr-2">Rs.2199</span>
              </del>{" "}
              Rs.549{" "}
              <span className=" text-white px-[4px] font-normal bg-[#c88843] rounded-[3px]">
                75% of
              </span>
            </p>
          </div>
          <div className=" bg-white hidden md:block">
            <img
              className="w-[100%] "
              src="https://www.misskurti.com/thumb/thumb400X700/600741a4f200337b6748abb0d09ba699.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Blue Cotton Printed Kurta Dupatta Set{" "}
            </p>
            <span>
              <ul className="flex gap-[15px] text-gray-500 text-[10px] sm:text-[15px]">
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
              </ul>
            </span>
            <p className="p-[2px] font-medium text-[12px] sm:text-[15px] text-gray-800">
              <del>
                <span className=" font-normal pr-2">Rs.2199</span>
              </del>{" "}
              Rs.549{" "}
              <span className=" text-white px-[4px] font-normal bg-[#c88843] rounded-[3px]">
                75% of
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className=" h-auto w-full flex p-[10px]">
        <div className=" h-auto w-[30%] hidden lg:block"></div>

        <div className=" h-auto w-[100%] sm:w-[100%] grid grid-cols-2 md:grid-cols-3 gap-[15px] p-[10px]">
          <div className=" bg-white">
            <img
              className="w-[100%]"
              src="https://www.misskurti.com/thumb/thumb400X700/80a6a68ff7590a4d7d03149c1d935be9.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Lemon Green Printed Cotton Kaftan Top{" "}
            </p>
            <span>
              <ul className="flex gap-[15px] text-gray-500 text-[10px] sm:text-[15px]">
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
              </ul>
            </span>
            <p className="p-[2px] font-medium text-[12px] sm:text-[15px] text-gray-800">
              <del>
                <span className=" font-normal pr-2">Rs.2199</span>
              </del>{" "}
              Rs.549{" "}
              <span className=" text-white px-[4px] font-normal bg-[#c88843] rounded-[3px]">
                75% of
              </span>
            </p>
          </div>
          <div className=" bg-white">
            <img
              className="w-[100%]"
              src="https://www.misskurti.com/thumb/thumb400X700/72bb4ef307c89031fa519441c10c6980.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Yellow Printed Cotton Kaftan Top{" "}
            </p>
            <span>
              <ul className="flex gap-[15px] text-gray-500 text-[10px] sm:text-[15px]">
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
              </ul>
            </span>
            <p className="p-[2px] font-medium text-[12px] sm:text-[15px] text-gray-800">
              <del>
                <span className=" font-normal pr-2">Rs.2199</span>
              </del>{" "}
              Rs.549{" "}
              <span className=" text-white px-[4px] font-normal bg-[#c88843] rounded-[3px]">
                75% of
              </span>
            </p>
          </div>
          <div className=" bg-white hidden md:block">
            <img
              className="w-[100%]"
              src="https://www.misskurti.com/thumb/thumb400X700/e204d1247d08f6626ef9ed50bf9cd6f5.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Blue Printed Kaftan For Women{" "}
            </p>
            <span>
              <ul className="flex gap-[15px] text-gray-500 text-[10px] sm:text-[15px]">
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
              </ul>
            </span>
            <p className="p-[2px] font-medium text-[12px] sm:text-[15px] text-gray-800">
              <del>
                <span className=" font-normal pr-2">Rs.2199</span>
              </del>{" "}
              Rs.549{" "}
              <span className=" text-white px-[4px] font-normal bg-[#c88843] rounded-[3px]">
                75% of
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className=" h-auto w-full flex p-[10px]">
        <div className=" h-auto w-[30%] hidden lg:block"></div>

        <div className=" h-auto w-[100%] sm:w-[100%] grid grid-cols-2 md:grid-cols-3 gap-[15px] p-[10px]">
          <div className=" bg-white">
            <img
              className="w-[100%]"
              src="https://www.misskurti.com/thumb/thumb400X700/d19436fb4c923b5dd03a670e68b4e2d0.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Red Printed Kaftan For Women{" "}
            </p>
            <span>
              <ul className="flex gap-[15px] text-gray-500 text-[10px] sm:text-[15px]">
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
              </ul>
            </span>
            <p className="p-[2px] font-medium text-[12px] sm:text-[15px] text-gray-800">
              <del>
                <span className=" font-normal pr-2">Rs.2280</span>
              </del>{" "}
              Rs.669{" "}
              <span className=" text-white px-[4px] font-normal bg-[#c88843] rounded-[3px]">
                71% of
              </span>
            </p>
          </div>
          <div className=" bg-white">
            <img
              className="w-[100%]"
              src="https://www.misskurti.com/thumb/thumb400X700/d19436fb4c923b5dd03a670e68b4e2d0.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Light Blue Denim Blend High Low Tunic{" "}
            </p>
            <span>
              <ul className="flex gap-[15px] text-gray-500 text-[10px] sm:text-[15px]">
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
              </ul>
            </span>
            <p className="p-[2px] font-medium text-[12px] sm:text-[15px] text-gray-800">
              <del>
              <span className=" font-normal pr-2">Rs.2280</span>
              </del>{" "}
              Rs.669{" "}
              <span className=" text-white px-[4px] font-normal bg-[#c88843] rounded-[3px]">
                71% of
              </span>
            </p>
          </div>
          <div className=" bg-white hidden md:block">
            <img
              className="w-[100%]"
              src="https://www.misskurti.com/thumb/thumb400X700/c60e644ff209f02e5d518eb2af34e2a7.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Blue Denim Blend Asymmetrical Neck Tunic Top{" "}
            </p>
            <span>
              <ul className="flex gap-[15px] text-gray-500 text-[10px] sm:text-[15px]">
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>2XL</li>
              </ul>
            </span>
            <p className="p-[2px] font-medium text-[12px] sm:text-[15px] text-gray-800">
              <del>
              <span className=" font-normal pr-2">Rs.2280</span>
              </del>{" "}
              Rs.669{" "}
              <span className=" text-white px-[4px] font-normal bg-[#c88843] rounded-[3px]">
                71% of
              </span>
            </p>
          </div>
        </div>
      </div>

    </>
  );
}
