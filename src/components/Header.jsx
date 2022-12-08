import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="w-4/5 flex flex-row md:justify-center justify-between items-center py-4 mx-auto">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Link to="/" className="text-white">
          <span className="px-2 py-1 font-bold text-3xl italic">Dapp</span>
          <span className="py-1 font-semibold italic">Auction-NFT</span>
        </Link>
      </div>

      <ul
        className="md:flex-[0.5] text-white md:flex
      hidden list-none flex-row justify-between 
      items-center flex-initial"
      >
        <li className="mx-4 cursor-pointer">Market</li>
        <li className="mx-4 cursor-pointer">Artist</li>
        <li className="mx-4 cursor-pointer">Features</li>
        <li className="mx-4 cursor-pointer">Community</li>
      </ul>

      <button
        className="shadow-xl shadow-black text-white
        bg-green-500 hover:bg-green-700 md:text-xs p-2
        rounded-full cursor-pointer text-xs sm:text-base"
      >
        Connect Wallet
      </button>
    </nav>
  )
}
export default Header