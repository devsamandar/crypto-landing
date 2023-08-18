import React from "react";

function CoinCard() {
  return (
    <>
      <div className="flex items-center gap-5">
        <i className="fa-brands fa-bitcoin text-orange-400 text-5xl" />
        <h4 className="text-base">Bitcoin</h4>
      </div>
      <div className="flex items-center gap-5">
        <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center">
          <i className="fa-brands fa-ethereum text-white text-3xl" />
        </div>
        <h4 className="text-base">Ethereum</h4>
      </div>
      <div className="flex items-center gap-5">
        <div className="h-12 w-12 bg-emerald-700 rounded-full flex items-center justify-center">
          <i className="fa-solid fa-t text-white text-2xl" />
        </div>
        <h4 className="text-base">Tether</h4>
      </div>
      <div className="flex items-center gap-5">
        <div className="h-12 w-12 bg-sky-500 rounded-full flex items-center justify-center">
          <i className="fa-solid fa-lock text-white text-2xl" />
        </div>
        <h4 className="text-base">Chainlink</h4>
      </div>
      <div className="flex items-center gap-5">
        <div className="h-12 w-12 bg-red-500 rounded-full flex items-center justify-center">
          <i className="fa-solid fa-diamond text-white text-2xl" />
        </div>
        <h4 className="text-base">Basic Attention Token</h4>
      </div>
      <div className="flex items-center gap-5">
        <div className="h-12 w-12 bg-sky-500 rounded-full flex items-center justify-center">
          <i className="fa-brands fa-dochub text-white text-2xl" />
        </div>
        <h4 className="text-base">Dash</h4>
      </div>
      <div className="flex items-center gap-5">
        <div className="h-12 w-12 bg-amber-300 rounded-full flex items-center justify-center">
          <i className="fa-brands fa-dropbox text-white text-2xl" />
        </div>
        <h4 className="text-base">Binance Coin</h4>
      </div>
      <div className="flex items-center gap-5">
        <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center">
          <i className="fa-brands fa-tiktok text-white text-2xl" />
        </div>
        <h4 className="text-base">Tezos</h4>
      </div>
    </>
  );
}

export default CoinCard;
