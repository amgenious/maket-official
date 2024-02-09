"use client"
import { products } from "@/data/constant"
import { useContext } from "react";
import { Context } from "@/context";

export default function DetailsPage({params}) {
  const {handleAddToCart, cartItems} = useContext(Context)
  const id  = params.id
  return (
    <>
    {
      products
      .filter((product) => product.id === id)
      .map((product) => (
    <div className="w-[100%] flex p-3" key={product.id}>
      <div className=" bg-base-300 mx-auto">
        <div className="grid md:grid-cols-2 grid-cols-1 w-[100%] mx-auto ">
              <div className="image-div w-[100%] flex">
                <figure>
                <img className="object-contain md:w-[60%] mx-auto" src={product.image}/>
                </figure>
              </div>
              <div className="w-[50%] flex flex-col justify-around p-3">
                <div className="w-[150%]">
                <h1 className="font-bold md:text-6xl text-2xl mb-2">{product.name}</h1>
                <p className="font-semibold md:text-lg text-base rounded-lg p-2 bg-primary w-fit mb-5">{product.price}</p>
                <h1 className="font-bold md:text-lg text-base">Description</h1>
                <p>Color: <span className="font-bold">Black</span></p>
                </div>
                  <button disabled={cartItems.map((item)=>item.id).indexOf(product.id) !== -1} onClick={()=> handleAddToCart(product)} className="p-2 bg-primary w-fit rounded-lg text-center hover:bg-secondary disabled:opacity-25 disabled:hover:bg-primary">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg></button>
              </div>
        </div>
      </div>
    </div>
      ))
    }
    </>
  )
}