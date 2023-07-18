import React, { useState } from "react";
import "./HornedBeast.css";

export default function HornedBeast({ title, imgUrl, description }) {
  const [fav, setFav] = useState(0);

  function handleFav() {
    setFav(fav + 1);
  }

  return (
    <div className="hb-container">
      <h2>{title}</h2>
      <img className="hb-image" src={imgUrl} alt={title} />
      <p className="hb-content">{description}</p>
      <p>
        <span className="heart" onClick={handleFav}>
          ❤️
        </span>
        {fav}
      </p>
    </div>
  );
}
