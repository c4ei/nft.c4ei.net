// import React, { Suspense } from 'react';
import Nft from './views/Nft';
import Home from './views/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import PlaceBid from './components/PlaceBid';
import Collections from './views/Collections';
import CreateNFT from './components/CreateNFT';
import { isWallectConnected, loadAuctions } from './services/blockchain';
import { setGlobalState, useGlobalState } from './store';
import OfferItem from './components/OfferItem';
import ChangePrice from './components/ChangePrice';
import { checkAuthState } from './services/chat';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
// const Nft = React.lazy(() => import('./views/Nft'));
// const Home = React.lazy(() => import('./views/Home'));
// const Header = React.lazy(() => import('./components/Header'));
// const Footer = React.lazy(() => import('./components/Footer'));
// const PlaceBid = React.lazy(() => import('./components/PlaceBid'));
// const Collections = React.lazy(() => import('./views/Collections'));
// const CreateNFT = React.lazy(() => import('./components/CreateNFT'));
// const { isWallectConnected, loadAuctions } = React.lazy(() => import('./services/blockchain'));
// const { setGlobalState, useGlobalState } = React.lazy(() => import('./store'));
// const OfferItem = React.lazy(() => import('./components/OfferItem'));
// const ChangePrice = React.lazy(() => import('./components/ChangePrice'));
// const { checkAuthState } = React.lazy(() => import('./services/chat'));

function App() {
  const [loaded, setLoaded] = useState(false);
  const [auction] = useGlobalState('auction');
  useEffect(async () => {
    await isWallectConnected();
    try{
      await loadAuctions().finally(() => setLoaded(true));
    }catch(e){
      console.log('loadAuctions error');
    }
    await checkAuthState()
      .then((user) => setGlobalState('currentUser', user))
      .catch((error) => setGlobalState('currentUser', null))
    // console.log('Blockchain Loaded')
  }, []);

  return (
    <div
      className="min-h-screen bg-gradient-to-t from-gray-800 bg-repeat
    via-[#25bd9c] to-gray-900 bg-center subpixel-antialiased"
    >
      {/* <Suspense fallback={<div>Loading components...</div>}> */}
        <Header />
        {loaded ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/nft/:id" element={<Nft />} />
          </Routes>
        ) : null}
        <CreateNFT />
          {auction ? (
          <>
            <PlaceBid />
            <OfferItem />
            <ChangePrice />
          </>
        ) : null}
        <Footer />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

      {/* </Suspense> */}
    </div>
  )
}
export default App
