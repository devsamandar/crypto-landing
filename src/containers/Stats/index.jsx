import React from "react";
import Title from "../../components/Title";

function Stats() {
  return (
    <section
      className="py-24 bg-slate-500/10 relative"
      data-aos="fade-up"
      id="stats"
    >
      <div className="absolute top-0 inset-x-0 hidden sm:block">
        <img
          src="assets/images/shapes/white-wave.svg"
          alt="svg"
          className="w-full -scale-x-100"
        />
      </div>
      <div className="container relative">
        <Title title="Stats" page="Prompt In Numbers" />
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 mt-12">
          <div className="text-center">
            <span className="text-3xl">$50M+</span>
            <p className="font-semibold mt-3">Value transacted</p>
            <p className="text-slate-800 mt-1">
              in overall sell/buy transactions
            </p>
          </div>
          <div className="text-center">
            <span className="text-3xl">2.1M+</span>
            <p className="font-semibold mt-3">Transactions Processed</p>
            <p className="text-slate-800 mt-1">across 10+ countries</p>
          </div>
          <div className="text-center">
            <span className="text-3xl">2M+</span>
            <p className="font-semibold mt-3">Satisfied Processed</p>
            <p className="text-slate-800 mt-1">across 100+ locations</p>
          </div>
          <div className="text-center">
            <span className="text-3xl">4.5</span>
            <p className="font-semibold mt-3">Star App Rating</p>
            <p className="text-slate-800 mt-1">
              on google play &amp; apple store
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
