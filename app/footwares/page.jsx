import { products } from "@/data/constant"
import Link from "next/link"

export default function FotwarePage() {
  return (
    <div className="w-[100%] text-center p-2">
    <div className='w-[100%] flex flex-col justify-center items-center mt-3 mb-3 gap-8'>
     <div className='w-[100%] flex flex-wrap justify-center items-center gap-5'>
        {
            products
            .filter((product) => product.catergory === "footware")
            .map((product)=>(
              <Link href={product.url} key={product.id}>
                <div className="card w-60 h-80 glass">
                <figure>
                  <img
                    src={product.image}
                    alt="car!"
                    />
                </figure>
                <div className="card-body">
                  <h2 className="text-center text-xl font-semibold">{product.name}</h2>
                  <p>{product.price}</p>

                </div>
              </div>
                    </Link>
            ))
        }
</div>
</div>
</div>
  )
}
