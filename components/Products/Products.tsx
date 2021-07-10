import { useEffect, useState } from "react"
import Product from "../Product/Product"
 import ProductData from '../ProductData/ProductData.json'

const Products = () => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        setProducts(ProductData)
    })
    // console.log(products);
    
    return (
        <>
        
        
        <div className="w-full px-4 my-10 lg:mt-60px md:px-35px">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xxl:grid-cols-3">
                {
                    products.map(product => <Product  product={product} key={product.id} />)
                }
            </div>
        </div>
        </>
    )
}

export default Products
