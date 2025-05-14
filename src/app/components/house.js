import React from "react";

const House = ({ className, name, inventory }) => {
  return (
    <div className={`${className} flex items-center`}>
      <img className="w-[200px] cursor-pointer" src="/house.png" alt="House" />
      <div className="flex flex-col pr-10">
        <h2 className="text-lg font-bold">{name}</h2>
        {Array.isArray(inventory) &&
          inventory.length > 0 &&
          inventory.map((item, index) => (
            <div key={index}>
              <p>{item}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default House;
