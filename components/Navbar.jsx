import React from 'react'
import Link from 'next/link'
import { navlinks } from '@/data/constant'

export default function Navbar() {
  return (
    <div className='w-[100%]'>
        <div className="navbar bg-base-300">
       <div className="h-fit flex justify-between items-center">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-success text-white m-1 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 50 50"
                fill="#ffffff"
              >
                <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
            >
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/shops'>Shops</Link>
              </li>
              <li>
                <Link href='/products'>Products</Link>
              </li>
            </ul>
          </div>
          
        </div>
  <div className="flex-1">
        <Link href='/'>
    <div className="btn btn-ghost text-3xl font-extrabold">maket</div>
        </Link>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item bg-primary"></span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-200 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <Link href='/cart'>
            <button className="btn btn-primary btn-block">View cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className='bg-base-300 w-[100%] flex justify-center md:justify-start'>
<div className="dropdown w-[90%] md:w-[10%]">
  <div tabIndex={0} role="button" className="btn m-1 w-full text-white">Filter</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-300 rounded-box w-full">
    {
        navlinks.map((navlink) => (
            <li key={navlink.id}><Link href={navlink.url}>{navlink.name}</Link></li>
        ))
    }
  </ul>
</div>
</div>
    </div>
  )
}
