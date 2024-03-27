import React from 'react'

const Footer = () => {
  return (
    <div className="w-4/5 flex sm:flex-row flex-col justify-between items-center my-4 mx-auto py-5">
      <div className="hidden sm:flex flex-1 justify-start items-center space-x-12">
        {/* <p className="text-white text-base text-center cursor-pointer">
          Artist
        </p>
        <p className="text-white text-base text-center cursor-pointer">
          Features
        </p>
        <p className="text-white text-base text-center cursor-pointer">
          Community
        </p> */}
        <p className="text-white text-base text-center cursor-pointer"><a href="https://c4ei.net/" className="mx-4 cursor-pointer">Market</a></p>
        <p className="text-white text-base text-center cursor-pointer"><a href="https://c4ei.net/collections" className="mx-4 cursor-pointer">Collection</a></p>
        <p className="text-white text-base text-center cursor-pointer"><a href="https://c4ei.net" target="_blank" rel="noopener noreferrer">C4EI Home</a></p>
        <p className="text-white text-base text-center cursor-pointer"><a href="https://c4ex.net" target="_blank" rel="noopener noreferrer">Buy C4EI</a></p>
      </div>

      <p className="text-white text-right text-xs">
        &copy;2024 All rights reserved
      </p>
    </div>
  )
}

export default Footer
