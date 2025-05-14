"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./loadingScreen";
import Navbar from "./navbar";
import MyResponsiveNetwork from "./components/MyResponsiveNetwork";
import House from "./components/house";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const data = {
    nodes: [
      { id: "garlic", color: "#758A48", size: 150, height: 0 },
      { id: "wifi", color: "#916A4F", size: 80, height: 1 },
      { id: "barter", color: "#B07C57", size: 100, height: 0 },
      { id: "commons", color: "#76583F", size: 120, height: 2 },
      { id: "eco-net", color: "#2B7180", size: 90, height: 1.2 },
      { id: "local-trade", color: "#899D5E", size: 85, height: 1 },
      { id: "open-source", color: "#758A48", size: 95, height: 1.5 },
      { id: "mesh-network", color: "#B07C57", size: 70, height: 0.8 },
      { id: "digital-commons", color: "#2B7180", size: 110, height: 2 },
      { id: "garlic-futures", color: "#916A4F", size: 105, height: 1.7 },
    ],
    links: [
      { source: "garlic", target: "wifi", distance: 1000 },
      { source: "garlic", target: "barter", distance: 300 },
      { source: "barter", target: "commons", distance: 320 },
      { source: "wifi", target: "eco-net", distance: 280 },
      { source: "eco-net", target: "commons", distance: 300 },
      { source: "commons", target: "local-trade", distance: 310 },
      { source: "local-trade", target: "open-source", distance: 1000 },
      { source: "open-source", target: "mesh-network", distance: 290 },
      { source: "mesh-network", target: "digital-commons", distance: 310 },
      { source: "digital-commons", target: "garlic", distance: 340 },
      { source: "wifi", target: "local-trade", distance: 300 },
      { source: "eco-net", target: "garlic-futures", distance: 320 },
      { source: "garlic-futures", target: "open-source", distance: 330 },
      { source: "barter", target: "garlic-futures", distance: 310 },
      { source: "garlic-futures", target: "mesh-network", distance: 500 },
    ]
  };
  
  

  return (
    <div>
      {isLoading ? (
        <LoadingScreen backgroundcolor={"bg-[#758A48]"}/>
      ) : (
        <div>
          <Navbar />
          <div className="flex flex-col items-center justify-center gap-10 min-h-[100vh] p-8">
            <h1 className="text-3xl font-bold uppercase text-center">
              In a world beyond currency,{" "}
              <span className="text-[#76583F]">garlic is gold.</span>
            </h1>
          </div>
          <div className="w-full relative overflow-hidden h-[100vh]">
              <MyResponsiveNetwork data={data} />
              <img className = "absolute top-150 left-100  w-[250px]" src = "/garlicbulb.png"/>
              <img className = "absolute top-80 left-60 w-[250px]" src = "/garlicbulb.png"/>
              <img className = "absolute top-40 left-200 w-[250px]" src = "/garlicbulb.png"/>
              <img className = "absolute top-90 left-260 w-[250px]" src = "/garlicbulb.png"/>
              <img className = "absolute top-20 left-20 w-[250px]" src = "/garlicbulb.png"/>
              <img className = "absolute top-30 right-50 w-[250px]" src = "/garlicbulb.png"/>
            </div>
            <div className="w-full p-20 bg-[#2B7180] overflow-hidden flex flex-col justify-between relative h-[120vh]">
                <div>
                    <h1 className = "font-bold text-xl font-uppercase">Shu Lea Cheang's Garlic World</h1>
                    <p className = "w-[50%]">Welcome to Shu Lea Cheang's Garlic World! Where garlic heals, feeds, and fosters relationships. Garlic is your decentralized currency! Trade what you have, grow what you don't, and evolve beyond capitalism. Avoid hoarding as your garlic count will be capped.</p>
                </div>
                <form className = "flex justify-end flex-col gap-5 items-end">
                    <p className = "w-[50%]" >Trade postings will be updated daily! Communicate with other traders, build relationships, and trade as you wish! Submit your postings below.</p>
                    <input type = "text" className = "w-[50%] p-4 bg-white" placeholder="Housing Name"></input>
                    <input type = "text" className = "w-[50%] p-4 bg-white" placeholder="Max of 3 categories of items for trade"></input>
                    <input type = "text" className = "w-[50%] p-4 bg-white" placeholder="Contact Info (Ex: Phone Number, Address, Email)"></input>
                    <button type = 'submit' className = "bg-[#899D5E] p-4">Enter</button>
                </form>  
                <House
                    className="absolute top-[600px] left-[40px]"
                    name="Fiona's House"
                    inventory={["4 Garlic Bulbs", "Decentralized WiFi", "7 Corn"]}
                    />

                    <House
                    className="absolute top-[300px] left-[500px]"
                    name="Alex's Den"
                    inventory={["18 Garlic Bulbs", "Cultivation Patch", "3 gallons of water"]}
                    />

                    <House
                    className="absolute top-[500px] left-[900px]"
                    name="Luna's Cottage"
                    inventory={["2 Garlic Bulbs", "3 artworks", "2 wooden chairs"]}
                    />

                    <House
                    className="absolute top-[200px] left-[200px]"
                    name="Niko's Shelter"
                    inventory={["0 Garlic Bulbs", "8 artworks", "Compost Bin"]}
                    />

                    <House
                    className="absolute top-[200px] left-[1100px]"
                    name="Zara's Hub"
                    inventory={["6 Garlic Bulbs", "7 Herbal Plants", "2 sticks of butter"]}
                    />

                    <House
                    className="absolute top-[100px] left-[700px]"
                    name="Kai's Outpost"
                    inventory={["9 Garlic Bulbs", "2 knitted rugs", "4 knitted sweaters"]}
                    />

            </div>
            <div className="flex flex-col items-center justify-center gap-10 min-h-[100vh] p-8">
            <h1 className="text-3xl font-bold uppercase text-center">
              TRADING FORUM
            </h1>
            <form className = "flex  flex-col gap-5 ">
                    <p >Enter your trade below! You will be contacted with a response by the trader.</p>
                    <input type = "text" className = " p-4 bg-white" placeholder="Your Name"></input>
                    <input type = "text" className = " p-4 bg-white" placeholder="Trader's posting name"></input>
                    <input type = "text" className = "p-4 bg-white" placeholder="Message to trader (Include your desired trade below!)"></input>
                    <button type = 'submit' className = "bg-[#899D5E] p-4">Enter</button>
                </form>  
          </div>
        </div>
      )}
    </div>
  );
}
