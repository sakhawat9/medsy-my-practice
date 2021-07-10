import { Drawer } from "@material-ui/core";
import React, { useState } from "react";
import LeftDrawer from "../Drawer/LeftDrawer";
import RightDrawer from "../RightDrawer/RightDrawer";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  return (
      <>
        <Drawer anchor="left" open={menuOpen} onClose={() => setMenuOpen(false)}>
            <LeftDrawer />
        </Drawer>
        <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
            <RightDrawer />
        </Drawer>
        {/* <div onClick={() => setMenuOpen(true)}><FontAwesomeIcon icon={faCoffee} /></div> */}
        <div className="fixed z-20 flex items-center w-full text-gray-700 bg-white shadow-mobile body-font h-90px lg:shadow-header pr-20px md:pr-30px lg:pr-40px">
          <button
            aria-label="Menu"
            className="flex flex-col items-center justify-center flex-shrink-0 h-full outline-none menuBtn w-50px focus:outline-none lg:w-90"
          >
            <span onClick={() => setMenuOpen(true)} className="menuIcon">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </span>
          </button>
          <a className="hidden mx-auto lg:mr-10 lg:flex" href="#">
            <span className="sr-only">Medsy</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="110px"
              height="31"
              viewBox="0 0 144.392 31"
            >
              <defs>
                <linearGradient
                  id="medsy-header-logo"
                  x2="1"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stopColor="#4664ff"></stop>
                  <stop offset="1" stopColor="#ff466c"></stop>
                </linearGradient>
              </defs>
              <g data-name="Group 5718" transform="translate(-577.32 -688.465)">
                <path
                  data-name="Union 1"
                  d="M-4006.355,2357.2h5.849c.28,2.394,2.773,3.96,5.988,3.96,3.234,0,5.445-1.547,5.445-3.678,0-1.887-1.385-2.934-4.883-3.719l-3.777-.823c-5.344-1.143-7.978-3.856-7.978-8.1,0-5.344,4.621-8.881,11.093-8.881,6.749,0,10.991,3.474,11.09,8.721h-5.688c-.2-2.451-2.348-3.939-5.385-3.939-2.992,0-5,1.426-5,3.577,0,1.788,1.408,2.793,4.744,3.556l3.516.742c5.805,1.246,8.339,3.739,8.339,8.159,0,5.626-4.562,9.183-11.755,9.183C-4001.731,2365.965-4006.172,2362.65-4006.355,2357.2Zm50.094,5.265a3.209,3.209,0,0,1,3.237-3.234,3.221,3.221,0,0,1,3.236,3.234,3.234,3.234,0,0,1-3.236,3.236A3.221,3.221,0,0,1-3956.261,2362.467Zm-15.59,3v-10.831l-10.089-18.163h6.61l6.49,12.377h.142l6.511-12.377h6.511l-10.109,18.163v10.831Zm-62.21,0v-28.994h11.07c8.7,0,13.824,5.181,13.824,14.385s-5.123,14.609-13.824,14.609Zm6.066-5.023h4.281c5.426,0,8.36-3.3,8.36-9.565,0-6.067-3.013-9.4-8.36-9.4H-4028Zm-29.659,5.023v-28.994h19.209v5h-13.139v6.992h12.4v4.662h-12.4v7.314h13.139v5.023Zm-10.226,0v-19.571h-.161l-7.878,19.289h-3.815l-7.878-19.289h-.161v19.571h-5.406v-28.994h7.034l8.24,20.555h.158l8.24-20.555h7.034v28.994Z"
                  transform="translate(4671 -1647)"
                  stroke="rgba(0,0,0,0)"
                  strokeWidth="1"
                  fill="url(#medsy-header-logo)"
                ></path>
              </g>
            </svg>
          </a>
          <div className="w-full ml-10px mr-20px lg:mr-10 lg:ml-auto lg:flex lg:justify-center">
            <form
              role="search"
              className="relative flex justify-center w-full overflow-hidden rounded items- center lg:max-w-screen-md undefined"
              action=""
            >
              <span className="absolute top-0 left-0 flex items-center justify-center h-full w-50px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  height="14px"
                  viewBox="0 0 14 14"
                >
                  <path
                    d="M14.771,12.752,11.32,9.286a5.519,5.519,0,0,0,1.374-3.634A5.763,5.763,0,0,0,6.839,0,5.763,5.763,0,0,0,.984,5.652,5.763,5.763,0,0,0,6.839,11.3a5.936,5.936,0,0,0,3.354-1.023l3.477,3.492a.783.783,0,0,0,1.08.02A.72.72,0,0,0,14.771,12.752ZM6.839,1.475a4.259,4.259,0,0,1,4.327,4.178A4.259,4.259,0,0,1,6.839,9.83,4.259,4.259,0,0,1,2.511,5.652,4.259,4.259,0,0,1,6.839,1.475Z"
                    transform="translate(-0.984)"
                    fill="#999999"
                  ></path>
                </svg>
              </span>
              <label htmlFor="search-normal" className="sr-only">
                search-normal
              </label>
              <input
                style={{ backgroundColor: "#F3F4F6" }}
                type="search"
                placeholder="Search your medicine here"
                className="w-full h-12 px-4 pl-12 text-gray-900 placeholder-gray-500 transition duration-200 border-2 border-transparent rounded outline-none bg-gray-f7 hover:border-gray-400 focus:border-black focus:placeholder-gray-900"
                id="search-normal"
              ></input>
            </form>
          </div>
          <div className="items-center flex-shrink-0 hidden mr-10 text-gray-900 lg:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.182"
              height="20.851"
              viewBox="0 0 20.182 20.851"
            >
              <g
                data-name="contact icon"
                transform="translate(-305.636 -1009.888)"
              >
                <g
                  data-name="Group 5517"
                  transform="translate(306.036 1013.959)"
                >
                  <path
                    data-name="Path 17350"
                    d="M318.825,1107.377a12.789,12.789,0,0,1-12.789-12.789,3.584,3.584,0,0,1,5.564-3,.359.359,0,0,1,.156.243l.748,4.718a.359.359,0,0,1-.074.28,3.592,3.592,0,0,1-1.142.943,8.206,8.206,0,0,0,4.352,4.353,3.592,3.592,0,0,1,.942-1.142.36.36,0,0,1,.28-.074l4.718.748a.359.359,0,0,1,.243.156,3.547,3.547,0,0,1,.592,1.973A3.6,3.6,0,0,1,318.825,1107.377Zm-9.2-15.661a2.876,2.876,0,0,0-2.873,2.873,12.084,12.084,0,0,0,12.071,12.071,2.867,2.867,0,0,0,2.482-4.318l-4.395-.7a2.856,2.856,0,0,0-.755,1.073.359.359,0,0,1-.459.2,8.914,8.914,0,0,1-5.206-5.206.359.359,0,0,1,.2-.459,2.855,2.855,0,0,0,1.073-.755l-.7-4.395a2.826,2.826,0,0,0-1.445-.391Z"
                    transform="translate(-306.036 -1090.997)"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0.8"
                  ></path>
                </g>
                <g
                  data-name="Group 5521"
                  transform="translate(315.367 1010.339)"
                >
                  <g data-name="Group 5518" transform="translate(0.107 6.633)">
                    <path
                      data-name="Path 17351"
                      d="M519.471,1161.367l-.693-.19a1.858,1.858,0,0,0-2.285-2.284l-.19-.693a2.576,2.576,0,0,1,3.168,3.166Z"
                      transform="translate(-516.303 -1158.109)"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="0.8"
                    ></path>
                  </g>
                  <g data-name="Group 5519" transform="translate(0 3.245)">
                    <path
                      data-name="Path 17352"
                      d="M520.487,1089.388l-.693-.19a4.621,4.621,0,0,0-5.683-5.678l-.19-.693a5.339,5.339,0,0,1,6.566,6.561Z"
                      transform="translate(-513.921 -1082.637)"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="0.8"
                    ></path>
                  </g>
                  <g data-name="Group 5520" transform="translate(0.398 0)">
                    <path
                      data-name="Path 17353"
                      d="M532.121,1019.936l-.693-.19a6.872,6.872,0,0,0-8.451-8.444l-.19-.693a7.59,7.59,0,0,1,9.334,9.327Z"
                      transform="translate(-522.787 -1010.339)"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="0.8"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <span className="ml-3 text-base font-semibold text-14px">
              +1 855-766-5885
            </span>
          </div>
          <button onClick={() => setCartOpen(true)}
            className="relative flex items-center justify-center flex-shrink-0 h-auto focus:outline-none"
            aria-label="cart-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 18 18"
            >
              <path
                d="M4.7,3.8H17.3a.9.9,0,0,1,.9.9V17.3a.9.9,0,0,1-.9.9H4.7a.9.9,0,0,1-.9-.9V4.7A.9.9,0,0,1,4.7,3.8ZM2,4.7A2.7,2.7,0,0,1,4.7,2H17.3A2.7,2.7,0,0,1,20,4.7V17.3A2.7,2.7,0,0,1,17.3,20H4.7A2.7,2.7,0,0,1,2,17.3ZM11,11C8.515,11,6.5,8.582,6.5,5.6H8.3c0,2.309,1.5,3.6,2.7,3.6s2.7-1.291,2.7-3.6h1.8C15.5,8.582,13.485,11,11,11Z"
                transform="translate(-2 -2)"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
            <span
              className="absolute flex items-center justify-center text-white bg-gray-900 w-18px h-18px"
              style={{
                fontSize: "10px",
                top: "-10px",
                right: "-10px ",
                borderRadius: "50%",
              }}
            >
              0
            </span>
          </button>
        </div>
      </>
  );
};

export default Header;
