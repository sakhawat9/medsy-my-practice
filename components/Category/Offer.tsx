import Carousel from "react-multi-carousel";
import Image from 'next/image'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 501, min: 0 },
    items: 2,
    paritialVisibilityGutter: 30,
  },
};
const images = [
  "/images/image__03.png",
  "/images/image__04.png",
  "/images/image__05.png",
  "/images/image__03.png",
  "/images/image__04.png",
  "/images/image__05.png",
  "/images/image__03.png",
  "/images/image__04.png",
  "/images/image__05.png",
  "/images/image__03.png",
  "/images/image__04.png",
  "/images/image__05.png",
  "/images/image__03.png",
  "/images/image__04.png",
  "/images/image__05.png",
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
      customRightArrow={
        <button
          aria-label="prev-button"
          className="absolute left-0 flex items-center justify-center text-gray-900 transition bg-white rounded-full w-30px h-30px shadow-float duration-250 hover:bg-gray-900 hover:text-white focus:outline-none ml-10px md:ml-35px "
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="8.5px" height="12px"viewBox="0 0 8.4 14" >
            <path id="chevron-left" d="M16.157,6.329l-1.4-1.4-7,7,7,7,1.4-1.4-5.6-5.6Z" transform="translate(-7.757 -4.93)" fill="currentColor" ></path>
          </svg>
        </button>
      }
      customLeftArrow={
        <button aria-label="next-button" className="absolute right-0 flex items-center justify-center text-gray-900 transition bg-white rounded-full w-30px h-30px shadow-float duration-250 hover:bg-gray-900 hover:text-white focus:outline-none mr-10px md:mr-35px" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8.5px"
            height="12px"
            viewBox="0 0 8.4 14"
          >
            <path
              d="M7.757,6.329l1.4-1.4,7,7-7,7-1.4-1.4,5.6-5.6Z"
              transform="translate(-7.757 -4.929)"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      }
    >
      {images.slice(0, 10).map((image) => {
        return (
          <>
              <div className="px-2 pb-1">
                <a href="https://www.instagram.com/p/CE1aZFQht-k/" className="block overflow-hidden transition-all duration-150 rounded-lg" target="__blank" rel="noopener">
                  <div className="relative w-full overflow-hidden instagram-card-image h-235px">
                    <Image className="absolute top-0 left-0 object-cover w-full h-full" layout='fill' alt="" src={image} />
                      <svg className="absolute top-10px right-10px" width="17.999" height="18" viewBox="0 0 17.999 18">
                        <path d="M9.177,18H9c-1.411,0-2.715-.032-3.982-.11A5.323,5.323,0,0,1,1.947,16.73,4.926,4.926,0,0,1,.292,14.058a11.84,11.84,0,0,1-.272-2.827C.012,10.573,0,9.795,0,9s.011-1.574.02-2.231A11.842,11.842,0,0,1,.292,3.945,4.926,4.926,0,0,1,1.947,1.273,5.323,5.323,0,0,1,5.016.111C6.284.034,7.588,0,9,0s2.715.033,3.982.11a5.323,5.323,0,0,1,3.068,1.162,4.925,4.925,0,0,1,1.655,2.672,11.841,11.841,0,0,1,.272,2.827C17.988,7.429,18,8.208,18,9V9c0,.792-.011,1.571-.02,2.228a11.835,11.835,0,0,1-.272,2.827,4.925,4.925,0,0,1-1.655,2.672,5.323,5.323,0,0,1-3.068,1.162c-1.214.074-2.461.11-3.807.11ZM9,16.595c1.388,0,2.662-.032,3.9-.107a3.874,3.874,0,0,0,2.265-.848,3.55,3.55,0,0,0,1.181-1.93,10.772,10.772,0,0,0,.228-2.5c.009-.653.018-1.426.02-2.21s-.011-1.557-.02-2.21a10.774,10.774,0,0,0-.228-2.5,3.55,3.55,0,0,0-1.181-1.93A3.875,3.875,0,0,0,12.9,1.515c-1.238-.075-2.512-.11-3.9-.107s-2.662.032-3.9.107a3.875,3.875,0,0,0-2.265.848,3.55,3.55,0,0,0-1.181,1.93,10.773,10.773,0,0,0-.228,2.5c-.009.653-.018,1.427-.02,2.212s.011,1.555.02,2.208a10.772,10.772,0,0,0,.228,2.5,3.55,3.55,0,0,0,1.181,1.93,3.875,3.875,0,0,0,2.265.848C6.339,16.563,7.614,16.6,9,16.595Zm-.034-3.2A4.395,4.395,0,1,1,13.359,9,4.4,4.4,0,0,1,8.965,13.4Zm0-7.383A2.988,2.988,0,1,0,11.953,9,2.992,2.992,0,0,0,8.965,6.013ZM13.851,3.2a1.055,1.055,0,1,0,1.055,1.055A1.055,1.055,0,0,0,13.851,3.2Zm0,0" transform="translate(0 -0.001)" fill="#fff">
                        </path>
                      </svg>
                  </div>
                </a>
              </div>
          </>
        );
      })}
    </Carousel>
  );
};

export default Simple;
