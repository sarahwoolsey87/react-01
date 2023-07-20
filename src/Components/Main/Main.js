import React from "react";
import "./Main.css";

import HornedBeast from "../HornedBeast/HornedBeast";

export default function Main({ beastsData, filter, onBeastSelect }) {
  const filteredBeasts = filter === "All" ? beastsData : beastsData.filter(beast => {
    if (filter === "More") {
      return beast.horns > 3;
    } else {
      return beast.horns === parseInt(filter);
    }
  });

  return (
    <main className="main-container">
      {filteredBeasts.map((item) => (
        <HornedBeast
          key={item._id}
          title={item.title}
          imgUrl={item.image_url}
          description={item.description}
          onSelect={() => onBeastSelect(item)}
        />
      ))}
    </main>
  );
}
