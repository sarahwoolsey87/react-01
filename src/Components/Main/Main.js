import React from 'react';
import HornedBeast from '../HornedBeast/HornedBeast'

function Main() {
  const hornedBeasts = [
    {
      title: "Unicorn",
      imageUrl: "https://example.com/unicorn.jpg",
      description: "A magical creature with a horn on its head."
    },
    {
      title: "Dragon",
      imageUrl: "https://example.com/dragon.jpg",
      description: "A mythical creature that can breathe fire."
    }
  ];

  return (
    <div>
      {hornedBeasts.map((beast, index) => (
        <HornedBeast
          key={index}
          title={beast.title}
          imageUrl={beast.imageUrl}
          description={beast.description}
        />
      ))}
    </div>
  );
}

export default Main;
