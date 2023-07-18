import React from 'react';
import HornedBeast from '../HornedBeast/HornedBeast'

function Main() {
  const hornedBeasts = [
    {
      title: "Unicorn",
      imageUrl: "https://th.bing.com/th/id/OIP.5LBIhFUtNlQCojQ8tgt_pgHaEK?pid=ImgDet&rs=1",
      description: "A magical creature with a horn on its head."
    },
    {
      title: "Dragon",
      imageUrl: "https://th.bing.com/th/id/R.302d9543cc0f2be1119b69ce64f97d0a?rik=dRclmSaGMc49pQ&riu=http%3a%2f%2fdurian.blender.org%2fwp-content%2fuploads%2f2009%2f10%2fsintel-wallpaper-dragon.jpg&ehk=0W49OzbyoFZuLe%2bW2zlRhSgZ7vWMH37q5fufMdr%2bf4M%3d&risl=&pid=ImgRaw&r=0",
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
