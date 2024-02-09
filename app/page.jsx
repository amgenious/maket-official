"use client"
import { products } from "@/data/constant";
import { Filter } from "@/components/Filter";
import  Link  from "next/link";
import { useContext } from "react";
import { Context } from "@/context";
export default function Home() {
 
  const {handleAddToCart, cartItems} = useContext(Context)
  return (
   <>
   <Filter />
  <div className="w-[100%] text-center p-2">
    <p className="mb-2 text-xl font-bold">Here are some recent products</p>
    <div className='w-[100%] flex flex-col justify-center items-center mt-3 mb-3 gap-8'>
         <div className='w-[100%] flex flex-wrap justify-center items-center gap-5'>
            {
                products.map((product)=>(
                  <div className="card w-60 h-80 glass" key={product.id}>
                    <figure>
                      <Link href={product.url} >
                      <img
                        src={product.image}
                        alt="car!"
                        />
                        </Link>
                    </figure>
                    <div className="card-body">
                      <h2 className="text-center text-xl font-semibold">{product.name}</h2>
                      <p>{product.price}</p>

                    </div>
                    <div className="w-full mb-2">
                    <button disabled={cartItems.map((item)=>item.id).indexOf(product.id) !== -1} onClick={()=> handleAddToCart(product)} className="p-2 bg-primary w-fit rounded-lg text-center hover:bg-secondary disabled:opacity-25 disabled:hover:bg-primary">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg></button>
                    </div>
                  </div>
                ))
            }
    </div>
    </div>
  </div>   
   </>
  );
}
