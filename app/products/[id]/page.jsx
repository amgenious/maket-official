import { products } from "@/data/constant"
import Image from "next/image"

export default function DetailsPage({params}) {
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
                <button className="font-semibold text-lg rounded-lg p-2 bg-primary w-fit mt-5">Add to Cart</button>
              </div>
        </div>
      </div>
    </div>
      ))
    }
    </>
  )
}
