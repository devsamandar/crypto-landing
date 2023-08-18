import React from "react";
import CoinCard from "../../components/CoinCard";

function Coins() {
  return (
    <section className="py-20" data-aos="fade-up" id="coins">
      <div className="container">
        <div className="text-center">
          <h1 className="text-3xl font-medium">Supported coins</h1>
          <p className="font-medium text-slate-500 mt-5 mb-4">
            Fastest way to buy or sell
            <span className="text-slate-900">popular</span> crypto coins.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-14 mt-16">
          <CoinCard />
        </div>
        <div className="text-center mt-16">
          <a
            href="#"
            className="py-3 px-6 rounded border border-primary text-white bg-primary hover:shadow-lg hover:shadow-primary/50 focus:outline focus:outline-primary/50 transition-all duration-500"
          >
            View complete list <i className="fa-solid fa-arrow-right ms-2" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Coins;
