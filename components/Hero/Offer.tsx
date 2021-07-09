import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};
const images = [
  "https://medsy-minimal.vercel.app/_next/static/images/slider_02-ec4d88540f8ac1092c901d127cad4685.jpg",
  "https://medsy-minimal.vercel.app/_next/static/images/slider_01-3da834d5d412926c3043e66301462579.jpg"
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ deviceType }) => {
  return (
    <Carousel
      ssr
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
        infinite={true}
        // showDots={true}
        customRightArrow={<button aria-label="prev-button" className="absolute left-0 flex items-center justify-center text-gray-900 transition bg-white rounded-full w-30px h-30px shadow-float duration-250 hover:bg-gray-900 hover:text-white focus:outline-none ml-10px md:ml-35px "><svg xmlns="http://www.w3.org/2000/svg" width="8.5px" height="12px" viewBox="0 0 8.4 14"><path id="chevron-left" d="M16.157,6.329l-1.4-1.4-7,7,7,7,1.4-1.4-5.6-5.6Z" transform="translate(-7.757 -4.93)" fill="currentColor"></path></svg></button>}
        customLeftArrow={<button aria-label="next-button" className="absolute right-0 flex items-center justify-center text-gray-900 transition bg-white rounded-full w-30px h-30px shadow-float duration-250 hover:bg-gray-900 hover:text-white focus:outline-none mr-10px md:mr-35px"><svg xmlns="http://www.w3.org/2000/svg" width="8.5px" height="12px" viewBox="0 0 8.4 14"><path d="M7.757,6.329l1.4-1.4,7,7-7,7-1.4-1.4,5.6-5.6Z" transform="translate(-7.757 -4.929)" fill="currentColor"></path></svg></button>}
        
    >
      {images.slice(0, 5).map((image, index) => {
        return (
          <>
            <div className="flex items-center w-full bg-cover px-40px md:px-60px lg:px-100px h-480px lg:h-400px xl:h-480px 2xxl:h-650px hero-carousel-item-base" style={{backgroundImage: `url(${image})`, backgroundColor: "rgb(245, 250, 251)"}}>
            <div className="flex flex-col items-center w-full text-center lg:w-6/12 lg:text-left lg:items-start">
                <h3 className="mb-4 font-normal text-gray-900 capitalize text-30px">
                    <span className="font-bold">Medsy</span> 
                    provides you
                    <span className="block font-bold">Safe Delivery.</span>
                    
                </h3>
                <p className="text-gray-500 mb-40px">Get medicines at your home within 30 minutes</p>
                <button className="flex items-center justify-center flex-shrink-0 w-auto font-normal text-white uppercase transition ease-in-out bg-gray-900 rounded outline-none duration-250 focus:outline-none hover:bg-gray-900 shadow-upside h-11 px-30px undefined" type="button" aria-label="button">
                    <span className="mr-2">Shop Now</span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 15.333 12.825">
                         <g data-name="arrow-forward (1)" transform="translate(-93 -110.588)">
                             <path data-name="Path 16639" d="M268,112l4.517,5L268,122" transform="translate(-165.184 0)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                 </path>
                                 <line data-name="Line 6" x1="12.308" transform="translate(94 117)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                </line>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
        </>
        );
      })}
    </Carousel>
  );
};

export default Simple;




