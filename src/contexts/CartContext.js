import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
    const [cart, setCart] = useLocalStorage("s11g1",[]);
    const addItem = (item) => {
        setCart([...cart, item])

    };
    const removeItem =(id)=>{
        setCart(cart.filter((item=>item.id!==id)))
        }

    return (
        <CartContext.Provider value={{ cart, addItem,removeItem }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;