import { Link } from 'react-router-dom'
import { connectWallet } from '../services/blockchain'
import { truncate, useGlobalState } from '../store'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  const [connectedChainId] = useGlobalState('connectedChainId')
  return (
    <nav className="w-4/5 flex flex-row md:justify-center justify-between items-center py-4 mx-auto">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Link to="/" className="text-white">
          <span className="px-2 py-1 font-bold text-3xl italic">NFT</span>
          <span className="py-1 font-semibold italic">C4EI Auction</span>
        </Link>
      </div>

      <ul
        className="md:flex-[0.5] text-white md:flex
      hidden list-none flex-row justify-between 
      items-center flex-initial"
      >
        <Link to="/" className="mx-4 cursor-pointer">Market</Link>
        <Link to="/collections" className="mx-4 cursor-pointer">Collection</Link>
        {/* <Link to="https://c4ei.net" className="mx-4 cursor-pointer">c4ei Home</Link>
        <Link to="https://c4ex.net" className="mx-4 cursor-pointer">Buy C4EI</Link> */}
        <a href="https://c4ei.net" target="_blank" rel="noopener noreferrer">C4EI Home</a>
        <a href="https://c4ex.net" target="_blank" rel="noopener noreferrer">Buy C4EI</a>
        <a href="https://docs.google.com/document/d/1S3HcMW2EmzvCEtDeF4JdSrbZOuO0JdPOHl5Stc0lhbE/edit?usp=sharing" target="_blank" rel="noopener noreferrer">사용법(DOC)</a>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </ul>

      {connectedAccount ? (
        <button
          className="shadow-xl shadow-black text-white
          bg-green-500 hover:bg-green-700 md:text-xs p-2
          rounded-full cursor-pointer text-xs sm:text-base"
        >
          {connectedChainId} {truncate(connectedAccount, 4, 4, 11)}
          
        </button>
      ) : (
        <button
          className="shadow-xl shadow-black text-white
          bg-green-500 hover:bg-green-700 md:text-xs p-2
          rounded-full cursor-pointer text-xs sm:text-base"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </nav>
  )
}
export default Header
