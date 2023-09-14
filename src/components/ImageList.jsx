import React from 'react';
import ReactRoundedImage from 'react-rounded-image';


export const ImageList = ({images}) => {
  // Function to shuffle an array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle images
const shuffledImages = shuffleArray(images);

  return (
    <div style={{display: "flex", flexWrap: "wrap"}}>
      {shuffledImages.map((image, index) => (
        <div key={index} style={{margin: "10px"}}>
          <ReactRoundedImage
            image={image}
            roundedSize="0"
            imageWidth="200"
            imageHeight="200"
          />
        </div>
      ))}
    </div>
  );
};
