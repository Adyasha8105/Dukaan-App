/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

import Cross from "../images/cross.svg";
import Arrow from "../images/arrow.svg";


const SloganMaker = () => {
  const [value, setValue] = useState("cozy");

  return (
    <div className="px-4 py-12 bg-[hsl(0,_0%,_98%)]">
      <div className="w-[min(1024px,_100%)] mx-auto p-4 -mt-32 rounded-lg shadow shadow-slate-200/50 p-8 bg-white">
        <div className="w-[min(720px,_100%)] mx-auto flex flex-col items-start justify-start gap-6">
          <div className="font-bold text-3xl text-black">Free slogan maker</div>
          <p className="text-black/70 text-lg">
            Simply enter a term that describes your business, and get up to
            1,000 relevant slogans for free.
          </p>
          <div className="flex flex-col items-stretch justify-start gap-2">
            <span className="text-black/70">Word for your slogan</span>
            <div className="rounded w-[min(320px,_100%)] border-2 border-black/20 px-2 flex flex-row items-center justify-between gap-4 focus-within:border-black/40">
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
          <div className="w-full borderWidth-1 border-black/20"></div>
          <div class="w-full flex flex-row items-center justify-between gap-2 flex-wrap">
            <p class="font-medium text-lg">
              We have generated 1,023 slogans for “cozy”
            </p>
            <button class="rounded border border-primary px-4 py-2 text-primary">
              Download all
            </button>
          </div>
          <div class="w-full grid grid-rows-none sm:grid-cols-1 md:grid-cols-2 gap-4">
          </div>
          <div class="w-full border border-black/10"></div>
          <div class="w-full flex flex-row items-center justify-between gap-4">
            <div class="flex-1 flex flex-row items-center justify-center gap-4">
              <a
                href="#"
                class="rounded-full w-6 h-6 grid place-items-center bg-primary text-white text-sm"
              >
                1
              </a>
              <a
                href="#"
                class="rounded-full w-6 h-6 grid place-items-center text-primary text-sm"
              >
                2
              </a>
              <a
                href="#"
                class="rounded-full w-6 h-6 grid place-items-center text-primary text-sm"
              >
                3
              </a>
              <a
                href="#"
                class="rounded-full w-6 h-6 grid place-items-center text-primary text-sm"
              >
                ...
              </a>
              <a
                href="#"
                class="rounded-full w-6 h-6 grid place-items-center text-primary text-sm"
              >
                21
              </a>
            </div>
            <a href="#" class="flex text-primary text-sm">
              Next <img src={Arrow} alt="Arrow" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SloganMaker;
