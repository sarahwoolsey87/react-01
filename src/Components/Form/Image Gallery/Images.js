import React from 'react';

const ImageGallery = ({ images, filter }) => {
  const filteredImages =
    filter === 'All' ? images : images.filter((image) => image.horns === parseInt(filter));

  return (
    <div>
      {filteredImages.map((image) => (
        <img key={image.id} src={image.url} alt={`Image ${image.id}`} />
      ))}
    </div>
  );
};

export default ImageGallery;
