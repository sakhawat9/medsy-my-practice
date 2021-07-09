import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


const Product = ({product}) => {
    console.log(product);
    const {image, name, price, category, pieces} = product;
    return (
        <div className="relative w-full cursor-pointer product-item">
            <div className="flex items-center h-full border border-gray-300 rounded p-20px lg:p-30px">
                <div className="plus-icon"><FontAwesomeIcon icon={faPlus} /></div>
                 <div className="flex items-center justify-center flex-shrink-0 overflow-hidden rounded w-90px h-90px xl:w-110px xl:h-110px mx-20px lg:mx-30px">
                    <img src={image} alt={name} />
                 </div>
                 <div className="flex flex-col items-start">
                    <span className="mb-1 font-semibold text-gray-900">{name}</span>
                    <span className="mb-2 font-normal text-gray-700">${price}</span>
                    <p className="flex items-center">
                        <span className="text-gray-500 capitalize text-11px">{category}</span>
                        <span className="flex flex-shrink-0 mx-3 bg-gray-500 rounded w-3px h-3px"></span>
                        <span className="text-gray-500 text-11px">{pieces}</span>
                    </p>
                 </div>
            </div>
        {/* <div className="absolute z-10 w-full bg-white border border-t-0 border-gray-300 rounded-b product-item-details shadow-product-item" style={{opacity: 1, height: "auto", transform: "translate3d(0px, 0px, 0px)"}}>
            <div className="flex flex-wrap w-full p-20px lg:p-30px">
                <div className="flex flex-col justify-start w-6/12 mb-5 pr-30px even:pr-0">
                    <span className="mb-2 text-gray-500 text-11px">Dosages Form</span>
                    <span className="font-normal text-gray-900 capitalize text-13px">Tablet</span>
                </div>
                <div className="flex flex-col justify-start w-6/12 mb-5 pr-30px even:pr-0">
                    <span className="mb-2 text-gray-500 text-11px">Dosages</span>
                    <span className="font-normal text-gray-900 capitalize text-13px">as per doctor advice</span>
                </div>
                <div className="flex flex-col justify-start w-6/12 pr-30px even:pr-0">
                    <span className="mb-2 text-gray-500 text-11px">Active Substance</span>
                    <span className="font-normal text-gray-900 capitalize text-13px">Anti-caking agent (Sorbitol), Gum Acacia, Resistant Maltodextrin,</span>
                </div>
                <div className="flex flex-col justify-start w-6/12 pr-30px even:pr-0">
                    <span className="mb-2 text-gray-500 text-11px">Manufacturer</span>
                    <span className="font-normal text-gray-900 capitalize text-13px">Trividia</span>
                </div>
            </div>
            <div className="flex items-center border-t border-gray-300 flex-end px-20px lg:px-30px py-15px">
                <button className="flex items-center justify-center flex-shrink-0 w-auto ml-auto font-normal text-white uppercase transition ease-in-out bg-gray-900 rounded outline-none duration-250 focus:outline-none hover:bg-gray-900 h-9 text-13px px-20px" type="button" aria-label="button">Add To Cart</button>
            </div>
        </div> */}
        </div>
    )
}

export default Product
