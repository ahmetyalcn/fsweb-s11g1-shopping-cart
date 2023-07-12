import { createContext, useContext, useState } from "react";
import { data } from "../data.js"
import { CartContext } from "./CartContext.js";

export const ProductContext = createContext();
const ProductProvider = ({ children }) => {
    const {addItem} = useContext(CartContext)
    const [products, setProducts] = useState(data);
  
    return (
        <ProductContext.Provider value={{ products, addItem}}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductProvider;