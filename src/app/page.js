"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./loadingScreen";
import Navbar from "./navbar";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="p-4 flex flex-col items-center min-w-screen min-h-screen">
          <Navbar />
          <div className="flex flex-col items-center justify-center screen-h-75">
            <h1 className="text-3xl font-bold uppercase">
              “When [a crash] happens, 
              <br></br>you invent your own 
              <br></br>currency locally. 
            </h1>
            <h1 className="text-3xl font-bold uppercase italic"> Why not use garlic?"</h1>
            <h1 className="">— Shu Lea Cheang</h1>

            <div className="mb-10">
              <img src="./garlic-tv.jpg" alt="Garlic TV" className="mt-10" />
              <p>Shu Lea Cheang, Garlic=Rich Air, 2002/2003. Installation view, New Museum, New York. Photo: Maris Hutchinson/EPW Studio.</p>
            </div>

            <div className="p-10 mt-20 leading-quarter flex flex-col gap-8 text-xl">
              <p>
              Shu Lea Cheang’s Garlic=Rich Air was an interactive online project and participatory artwork that imagined a post-capitalist society in the year 2030 in which community wireless would be the only internet and organic garlic the primary currency.
              </p>
              <p>
              In Cheang’s project, users signed up for the barter economy via a website where they could deposit digital goods to be exchanged for organic garlic, whose value was decided collectively by the community. Following a period of trading, Cheang created a virtual-to-physical exchange where virtual garlic could be traded for real bulbs.
              </p>
              <p>
              This exchange was staged as a street performance based around a pick-up truck adorned with the slogan “GET GARLIC. GO WIRELESS.” Fitted with free wireless connectivity and carrying hundreds of pounds of freshly harvested garlic, the truck facilitated a lively barter-based micro-economy on the streets of New York in a “real-time fictional scenario” that prototyped strategies for community adaptation and exchange in the face of climate change and economic precarity.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
