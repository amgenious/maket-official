"use client"
import { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

function GlobalState({children}){
    const  [cartItems, setCartItems] = useState([])

    function handleAddToCart(getCurrentItems){
        let cpyCartItem = [...cartItems]
        const indexOfCurrentItem = cpyCartItem.findIndex(item => item.id === getCurrentItems.id)

        if(indexOfCurrentItem === -1){
            cpyCartItem.push(getCurrentItems)
        }
        setCartItems(cpyCartItem)
        localStorage.setItem("cartItems", JSON.stringify(cpyCartItem))
    }
    function removeFromCart(getCurrentId){
        let cpyCartItem = [...cartItems];
        cpyCartItem = cpyCartItem.filter(item=> item.id !== getCurrentId)

        setCartItems(cpyCartItem)
        localStorage.setItem("cartItems", JSON.stringify(cpyCartItem))
    }
    useEffect(()=>{
        setCartItems(JSON.parse(localStorage.getItem("cartItems"))||[])
    },[])
    return <Context.Provider value={{cartItems,handleAddToCart, removeFromCart}}>{children}</Context.Provider>
}
export default GlobalState