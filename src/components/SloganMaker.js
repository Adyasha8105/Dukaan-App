/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import ReactTooltip from "react-tooltip";

import Cross from "../images/cross.svg";
import Arrow from "../images/arrow.svg";

const allSlogans = [
  "Life isn't about getting and having, it's about giving and being.",
  "Whatever the mind of man can conceive and believe, it can achieve.",
  "There is no Sore it will Not Heal, No cool it will not Subdue.",
  "Strive not to be a success, but rather to be of value.",
  "The most difficult thing is the decision to act, the rest is merely tenacity.",
  "We must balance conspicuous consumption with conscious capitalism.",
  "Whatever the mind of man can conceive and believe, it can achieve.",
  "I attribute my success to this: I never gave or took any excuse.",
  "Definiteness of purpose is the starting point of all achievement.",
  "Life is what happens to you while you're busy making other plans.",
  "The most common way people give up their power is by thinking they don't have any.",
  "We become what we think about.",
];

const SloganComponent = () => {
  const [tooltipValue, setTooltipValue] = useState("Click to copy");

  const copySlogan = (slogan) => {
    navigator.clipboard.writeText(slogan);
    setTooltipValue("Copied!");
  };

  return (
    <>
      {allSlogans.map((slogan, index) => (
        <div className="relative flex flex-col group" key={index}>
          <button
            data-tip={tooltipValue}
            data-place={index % 2 === 0 ? "left" : "right"}
            data-class="tooltip"
            type="button"
            onClick={() => copySlogan(slogan)}
            onMouseLeave={() => setTooltipValue("Click to copy")}
            className="h-fit rounded p-4 bg-[hsl(0,_0%,_95%)] flex flex-col items-start justify-start"
          >
            <p className="text-left">{slogan}</p>
          </button>
        </div>
      ))}
      <ReactTooltip
        effect="solid"
        getContent={() => tooltipValue}
        arrowColor="transparent"
        backgroundColor="#4D4D4D"
      />
    </>
  );
};

const SloganMaker = () => {
  const [value, setValue] = useState("cozy");

  return (
    <div className="px-6 py-12 bg-[hsl(0,_0%,_98%)]">
      <div className="w-[min(1024px,_100%)] mx-auto py-12 px-6 -mt-32 rounded-lg shadow shadow-slate-200/50 bg-white">
        <div className="w-[min(720px,_100%)] mx-auto flex flex-col items-start justify-start gap-6">
          <div className="font-galano-semibold text-3xl text-black">Free slogan maker</div>
          <p className="text-black/70 text-lg">
            Simply enter a term that describes your business, and get up to
            1,000 relevant slogans for free.
          </p>
          <div className="flex flex-col items-stretch justify-start gap-2">
            <span className="text-black/70">Word for your slogan</span>
            <div className="rounded w-[min(320px,_100%)] border-2 border-black/20 px-2 flex flex-row items-center justify-between gap-12 focus-within:border-black/40">
              <input
                className="w-full py-2 focus:outline-none"
                placeholder="eg. lorem ipsum"
                value={value}
                type="text"
                onChange={(e) => setValue(e.target.value)}
              />
              <button
                className="p-2 grid place-items-center focus:outline-none"
                onClick={() => setValue("")}
              >
                <img src={Cross} alt="Cross" />
              </button>
            </div>
          </div>
          <button className="rounded px-4 py-2 bg-primary text-white text-lg">
            Generate slogans
          </button>
          <div className="w-full border border-black/10" />
          <div className="w-full flex flex-row items-center justify-between gap-2 flex-wrap">
            <p className="font-galano-medium text-lg">
              We have generated 1,023 slogans for “cozy”
            </p>
            <button className="rounded border border-primary px-4 py-2 text-primary">
              Download all
            </button>
          </div>   
          <div className="w-full grid grid-rows-none sm:grid-cols-1 md:grid-cols-2 gap-4">
            <SloganComponent />
          </div>
          <div className="w-full border border-black/10"></div>
          <div className="w-full flex flex-row items-center justify-between gap-4">
            <div className="flex-1 flex flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="rounded-full w-6 h-6 grid place-items-center bg-primary text-white text-sm"
              >
                1
              </a>
              <a
                href="#"
                className="rounded-full w-6 h-6 grid place-items-center text-primary text-sm"
              >
                2
              </a>
              <a
                href="#"
                className="rounded-full w-6 h-6 grid place-items-center text-primary text-sm"
              >
                3
              </a>
              <a
                href="#"
                className="rounded-full w-6 h-6 grid place-items-center text-primary text-sm"
              >
                ...
              </a>
              <a
                href="#"
                className="rounded-full w-6 h-6 grid place-items-center text-primary text-sm"
              >
                21
              </a>
            </div>
            <a href="#" className="flex text-primary text-sm">
              Next <img src={Arrow} alt="Arrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SloganMaker;
