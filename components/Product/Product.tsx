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
        </div>
    )
}

export default Product
