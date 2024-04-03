import React from "react";
import Footer from "./Footer";

export default function () {
  return (
    <>
      <div className="p-[8px] w-[100%] bg-neutral-100">
        <h1>Home / Kurta Set</h1>
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
              src="https://www.misskurti.com/thumb/thumb400X700/c342c6855f32b06d0bd5c40fd6789be1.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              White Color Muslin Printed Kurta Dupatta Set..{" "}
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
              <span className=" text-white px-[4px]  font-normal bg-[#c88843] rounded-[3px]">
                76% of
              </span>
            </p>
          </div>
          <div className=" bg-white">
            <img
              className="w-[100%]"
              src="https://www.misskurti.com/thumb/thumb400X700/fa06e01ab6dc9394db56426225aa7f2a.jpg"
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
              src="https://www.misskurti.com/thumb/thumb400X700/254980c9dcf4a50d4ed6770949bade09.jpg"
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
              src="https://www.misskurti.com/thumb/thumb400X700/b927ee2f350e260e4dbf7323ea527cbe.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Yellow Color Muslin Printed Kurta Dupatta Set..{" "}
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
              src="https://www.misskurti.com/thumb/thumb400X700/281fc4ad1403e19f1ccc9aaae89a4e94.jpg"
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
              src="https://www.misskurti.com/thumb/thumb400X700/4cc29d527d24c770e4462bb3f64970f2.jpg"
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
              src="https://www.misskurti.com/thumb/thumb400X700/3a2f5f0f047e5a9897939b7206598b5b.jpg"
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
              src="https://www.misskurti.com/thumb/thumb400X700/705f19a6a7f7deb6bb8bc242f7a2453a.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Peach Muslin Embroidery Kurta Dupatta Set{" "}
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
              src="https://www.misskurti.com/thumb/thumb400X700/9ff89261561cd3dbc2dec816161f3963.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              White Cotton Kurta Dupatta Set{" "}
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
              src="https://www.misskurti.com/thumb/thumb400X700/e5d745437507c53ac630366b092ee3a9.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Blue Printed Cotton Kurta Dupatta Set{" "}
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
              src="https://www.misskurti.com/thumb/thumb400X700/7efb78706dad89d630f816125aa98c3a.jpg"
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
              src="https://www.misskurti.com/thumb/thumb400X700/a0ab7a6956eaf8bba303ea6d02a1b89f.jpg"
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
              src="https://www.misskurti.com/thumb/thumb400X700/b79b742f337cd93a417d1606d780a4ba.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Pink Cotton Printed Kurta Dupatta Set{" "}
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
              src="https://www.misskurti.com/thumb/thumb400X700/5ca2e27abb876ad409d8430740f86ae1.jpg"
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
              src="https://www.misskurti.com/thumb/thumb400X700/2bef81a2ecb648055035913f08d125b9.jpg"
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
              src="https://www.misskurti.com/thumb/thumb400X700/5f4c07818825b73b0078ebe097f2f666.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              White Cotton Embroider Kurta Dupatta Set{" "}
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
              src="https://www.misskurti.com/thumb/thumb400X700/1a25fff4dd7a8db77ee05d3e241e2a90.jpg"
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
              className="w-[100%] "
              src="https://www.misskurti.com/thumb/thumb400X700/ed2b22af79becdc51f1afd7b6ba748dc.jpg"
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
        </div>
      </div>
      <div className=" h-auto w-full flex p-[10px]">
        <div className=" h-auto w-[30%] hidden lg:block"></div>

        <div className=" h-auto w-[100%] sm:w-[100%] grid grid-cols-2 md:grid-cols-3 gap-[15px] p-[10px]">
          <div className=" bg-white">
            <img
              className="w-[100%]"
              src="https://www.misskurti.com/thumb/thumb400X700/2d45cb4cd100ac86f14f1f069c98983f.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Women Green Printed Cotton Set With Dupatta{" "}
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
              src="https://www.misskurti.com/thumb/thumb400X700/a4bd49555e1f8ea3161785432c92e33e.jpg"
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
              src="https://www.misskurti.com/thumb/thumb400X700/6c85d0c0a9ef3353943c96c1044e3de1.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              White Cotton Printed Kurta Dupatta Set{" "}
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
              src="https://www.misskurti.com/thumb/thumb400X700/b60bc7b5ee09f296a75907f84c3a63b6.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Women Light Green Silk Embroidered Kurta Set With Dupatta{" "}
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
              src="https://www.misskurti.com/thumb/thumb400X700/31ddc9317684a35af97e9e02b0ab411e.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Women Orange Silk Embroidered Kurta Set With Dupatta{" "}
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
              src="https://www.misskurti.com/thumb/thumb400X700/44cade728201a39a49e7d7ba050ce77a.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Women White Viscose Rayon Embroidered Kurta Set With Dupatta{" "}
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
              src="https://www.misskurti.com/thumb/thumb400X700/5efbb42bad1c3efbdc863f49bc934877.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Women Red Viscose Rayon Embroidered Kurta Set With Dupatta{" "}
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
              src="https://www.misskurti.com/thumb/thumb400X700/daa043d68655e22ee35a96a4ff4de620.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Women Black Viscose Rayon Embroidered Kurta Set With Dupatta{" "}
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
              src="https://www.misskurti.com/thumb/thumb400X700/c01ac363318215062dd52cc410faa0a4.JPG"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Women Black Rayon Kurta and Dupatta Set{" "}
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
              src="https://www.misskurti.com/thumb/thumb400X700/eca3a7743d289f99a3bda639bb32213a.JPG"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Women Yellow Rayon Kurta and Dupatta Set{" "}
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
              src="https://www.misskurti.com/thumb/thumb400X700/449189678ccad8d6278f79e7666037ab.JPG"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Women Pink Rayon Kurta and Dupatta Set{" "}
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
              src="https://www.misskurti.com/thumb/thumb400X700/28d8310f818af775d85dc1f163fdd7e2.JPG"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Women Black Rayon Kurta and Dupatta Set{" "}
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
              src="https://www.misskurti.com/thumb/thumb400X700/7f38a538a6cad24e7b6d21bb62494983.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Women Maroon Silk Blend Embroidered Kurta Set With Dupatta{" "}
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
              src="https://www.misskurti.com/thumb/thumb400X700/132fce8a7adfc08faa58d23e694c03c6.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Women Red Silk Blend Embroidered Kurta Set With Dupatta{" "}
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
              src="https://www.misskurti.com/thumb/thumb400X700/456b41cd1ffc5a3e049d46ca9ba64595.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Women Blue Silk Blend Embroidered Kurta Set With Dupatta{" "}
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
              src="https://www.misskurti.com/thumb/thumb400X700/7949ee5f4e82aa0a76de2e633a8aaeaf.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Women Navy Viscose Rayon Embroidered Kurta Set With Dupatta{" "}
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
              src="https://www.misskurti.com/thumb/thumb400X700/42c4cd8fd362984acb16b2adaab96dec.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Straight Blue Embroidered Kurta Set With Dupatta{" "}
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
              src="https://www.misskurti.com/thumb/thumb400X700/12a5c0846277f3c014f4e5879f658476.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Black Viscose Rayon Embroidered Kurta Set With Dupatta{" "}
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
              src="https://www.misskurti.com/thumb/thumb400X700/06f02697d63a09c2f0ad829b0961bb07.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Viscose Rayon Magenta Embroidered Kurta Set With Dupatta By
              Misskurti{" "}
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
              src="https://www.misskurti.com/thumb/thumb400X700/fdbea6ae242d7d6f12b994be3f584878.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Viscose Rayon Embroidered Women Kurta Set With Dupatta By
              Misskurti{" "}
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
              src="https://www.misskurti.com/thumb/thumb400X700/c8c646971ad445da65e0f71919083627.jpg"
              alt=""
            />
            <p className="p-[2px] font-normal text-[11px] sm:text-[15px] hover:underline cursor-pointer">
              Black Cotton Printed Kurta Set With Dupatta{" "}
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
    </>
  );
}
