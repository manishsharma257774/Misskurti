import React from "react";

export default function Footer() {
  return (
    <>
      <div className="h-auto w-full p-[5px]">
        <h1 className="text-[30px]">Search Products</h1>
        <p className="">
          <input
            className="p-[2px] border-[1px] border-solid border-gray-300"
            type="search"
            placeholder="Search of Products"
            name=""
            id=""
          />
          <button className="bg-gray-600 p-[3px] px-[5px] text-white">
            Search
          </button>
        </p>
      </div>
      <br />
      <div className=" h-auto w-full bg-gray-950 text-white ">
        <ul className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-[17px]">
          <span className="flex items-center justify-center border-[1px] border-solid border-neutral-800">
            <li className="flex-col items-center justify-center m-[10px]">
              <p className=" text-[25px] text-center">
                <i class="bi bi-truck-front"></i>{" "}
              </p>
              <h1 className="text-[15px]">Ready To Ship</h1>
            </li>
          </span>
          <span className="flex items-center justify-center border-[1px] border-solid border-neutral-800">
            <li className="flex-col items-center justify-center m-[10px]">
              <p className="text-[25px] text-center">
                <i class="bi bi-geo-alt-fill"></i>{" "}
              </p>
              <h1 className="text-[15px]">COD Available</h1>
            </li>
          </span>
          <span className="flex items-center justify-center border-[1px] border-solid border-neutral-800">
            <li className=" flex-col items-center justify-center m-[10px]">
              <p className="text-[25px] text-center">
                <i class="bi bi-reply-all-fill"></i>{" "}
              </p>
              <h1 className="text-[15px]">Easy Return</h1>
            </li>
          </span>
          <span className="flex items-center justify-center border-[1px] border-solid border-neutral-800">
            <li className="flex-col items-center justify-center m-[10px]">
              <p className=" text-[25px] text-center">
                <i className="bi bi-truck"></i>
              </p>
              <h1 className="text-[15px]">Free Shipping</h1>
            </li>
          </span>
        </ul>
      </div>
      <footer className="bg-neutral-800">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 p-[20px]">
            <div className="">
              <h2 className="mb-3 text-[16px] font-semibold text-white uppercase dark:text-white">
                Quick Links{" "}
              </h2>
              <ul className="text-gray-300 font-normal">
                <li className="pt-[5px] cursor-pointer hover:text-orange-400 duration-500">
                  New Arrivals
                </li>
                <li className="pt-[5px] cursor-pointer hover:text-orange-400 duration-500">
                  Store Locator
                </li>
                <li className="pt-[5px] cursor-pointer hover:text-orange-400 duration-500">
                  Calebrity Closet
                </li>
                <li className="pt-[5px] cursor-pointer hover:text-orange-400 duration-500">
                  Wholesale
                </li>
                <li className="pt-[5px] cursor-pointer hover:text-orange-400 duration-500">
                  Online Stores
                </li>
                <li className="pt-[5px] cursor-pointer hover:text-orange-400 duration-500">
                  Career
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-[16px] font-semibold text-white uppercase dark:text-white">
                Kurtis{" "}
              </h2>
              <ul className="text-gray-300 font-normal">
                <li className="pt-[5px] cursor-pointer hover:text-orange-400 duration-500">
                  Office Wear Kurtis
                </li>
                <li className="pt-[5px] cursor-pointer hover:text-orange-400 duration-500">
                  Designer Kurtis
                </li>
                <li className="pt-[5px] cursor-pointer hover:text-orange-400 duration-500">
                  Jacket Style Kurtis
                </li>
                <li className="pt-[5px] cursor-pointer hover:text-orange-400 duration-500">
                  Modest Kurtis
                </li>
                <li className="pt-[5px] cursor-pointer hover:text-orange-400 duration-500">
                  Plus Size Kurtis
                </li>
                <li className="pt-[5px] cursor-pointer hover:text-orange-400 duration-500">
                  Denim Kurtis
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-[16px] font-semibold text-white uppercase dark:text-white">
                Our Company
              </h2>
              <ul className="text-gray-300 font-normal">
                <li className="pt-[5px] cursor-pointer hover:text-orange-400 duration-500">
                  About Us
                </li>
                <li className="pt-[5px] cursor-pointer hover:text-orange-400 duration-500">
                  Contact Us
                </li>
                <li className="pt-[5px] cursor-pointer hover:text-orange-400 duration-500">
                  Terms & Condition
                </li>
                <li className="pt-[5px] cursor-pointer hover:text-orange-400 duration-500">
                  Privacy Policy
                </li>
                <li className="pt-[5px] cursor-pointer hover:text-orange-400 duration-500">
                  Exchange Or Return
                </li>
                <li className="pt-[5px] cursor-pointer hover:text-orange-400 duration-500">
                  Shipping Policy
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-[16px] font-semibold text-white uppercase dark:text-white">
                Contact Us
              </h2>
              <ul className="text-gray-300 font-normal">
                <li className="pt-[5px]">MISSKURTI</li>
                <li className="pt-[7px]">
                  62,0-1,Hawa Sadak Rd, Hawa Sadak, Sharma Colony Bais Godam,
                  Jaipur, Rajasthan 302006
                </li>
                <li className="pt-[7px]">Phone : +91-9461306281</li>
                <li className="pt-[7px]">Email : info@misskurti.com</li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
        <h1 className="border-b-[1px] border-black border-opacity-100"></h1>
        <div className=" h-auto w-full bg-neutral-800 text-gray-300 font-semibold p-[20px] ">
          <ul className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-[17px]">
            <span className="flex items-center justify-center">
              <li className="flex-col items-center justify-center m-[10px]">
                <h1>WE ACCEPT</h1>
                <p className="pt-[10px]">
                  <img
                    src="https://www.misskurti.com/images/payment-logo.jpg"
                    alt=""
                  />
                </p>
              </li>
            </span>
            <span className="flex items-center justify-center">
              <li className="flex-col items-center justify-center m-[10px]">
                <p className="text-[15px] text-center ">
                  GET SPECIAL DISCOUNT IN YOUR INBOX
                </p>
                <p className="pt-[10px]">
                  <input
                    className="p-[2px] w-[70%] text-black"
                    type="search"
                    placeholder="Enter Your Email"
                    name=""
                    id=""
                  />
                  <button className="bg-[#c88843] p-[2px] text-white px-[5px]">
                    Subscribe
                  </button>
                </p>
              </li>
            </span>
            <span className="flex items-center justify-center">
              <li className=" flex-col items-center justify-center m-[10px]">
                <h1 className="text-[15px]">FOLLOW US</h1>
                <span className="pt-[10px]">
                  <ul className="flex gap-[15px]">
                    <li>
                      <i class="bi bi-facebook"></i>
                    </li>
                    <li>
                      <i class="bi bi-twitter"></i>
                    </li>
                    <li>
                      <i class="bi bi-instagram"></i>
                    </li>
                    <li>
                      <i class="bi bi-linkedin"></i>
                    </li>
                  </ul>
                </span>
              </li>
            </span>
            <span className=" items-center justify-center lg:block hidden">
              <li className="flex-col items-center justify-center m-[10px]">
                <img
                  src="https://www.misskurti.com/images/foot-logo.jpg"
                  alt=""
                />
              </li>
            </span>
          </ul>
        </div>
        <h1 className="border-b-[1px] border-black border-opacity-100"></h1>
        <div className="text-gray-300 p-[30px] text-[15px] font-normal">
          <h1 className="font-medium text-[17px]">
            Misskurti – Designer Ethnic Wear Online Shopping Website
          </h1>
          <br />
          <p>
            Women are blessed with a wide range of clothing as they have a lot
            of varieties to choose from. Generations have changed and so are the
            standard of living, clothing has turned into a next level may it be
            Western wear like jeans, tees and Gowns but Traditional dresses for
            girls and women are endless choice for every occasion. However,
            Designer Ethnic Wear hasn’t lost its charm infact from past few
            years its back in Trend.
          </p>
          <br />
          <p>
            Being Traditional is considered as the New Fashion in the recent
            times. In fact, this look is a significant need in the wedding
            ceremonies at any part of the world. Draping in complete Ethnic Wear
            right from Designer Stylish Kurtis to Indo Western Dress creates a
            perfect style statement.
          </p>
          <br />
          <p>
            Ethnic wear for women and girls has came up with some fresh trends
            you just can’t miss it. Modern women are choosing Ethnic and
            Indo-western clothes as much as the western once keeping in mind
            with the Indian culture and we must say they absolutely slay in it.
            Misskurti has made it more convenient to buy Latest Ethnic Wear
            products online including Cotton Kurtis Online, Straight Pants for
            Kurtis, Kaftan Tops, Plus Size Dresses for Women, Cotton Palazzo
            Pants, Latest Embroidery Designs Kurtis, Office Wear Kurti, Jacket
            Style Kurti, Long Jacket Dress, Latest Ladies Suit and many more
            Latest Traditional Dresses. We do all types of Handwork, Manual
            Embroidery work, Computer Embroidery work, Kantha - Tagai Work and
            Adda Work in our Dresses.
          </p>
          <br />
          <p>
            Misskurti made it mission to offer his clients Supreme quality
            Dresses at Direct Factory Price. It is well known name in the field
            of Manufacturer and Supplier of Designer Ethnic Dresses, offering
            the manufacturing service to India's Top Most Retails Brand from
            last 7 Years. Now, we are going to Step in Retail Market and moving
            a step forward in our commitment to cater Excellent Customer Service
            and a huge variety of Indian Ethnic Wear Products at Best Prices. We
            are really excited to offer shipping all around the world with an
            Easy Payment Checkout – Paypal for International and PayTM (Credit
            Card, Debit Card, PayTM Wallet) for Domestic Buyers.
          </p>
          <br />
          <p>
            Latest Kurti Design | Ladies Kurti | Kurtis for Girls | Kaftan Top |
            Kurta Palazzo Set | Denim Kurti Designs | Indo Western Dress |
            Tunics Tops for Women | Tunic for Girls | Kurta Set for Women |
            Ethnic Bottom Wear | Embroidery Kurti | Cotton Kurti Online | Plus
            Size Kurtis | Latest Kaftan Designs | Jacket Style Kurti | Wholesale
            Kurtis | Western Bottom Wear | Ethnic Bottom Wear Palazzo | Office
            Wear Kurti | Designer Denim Kurtis
          </p>
        </div>
      </footer>
    </>
  );
}
