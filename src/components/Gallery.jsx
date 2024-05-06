import React, { useState } from "react";
import img1 from "../images/1.jpeg";
import img2 from "../images/2.jpeg";
import img3 from "../images/3.jpeg";
import img4 from "../images/4.jpeg";
import img5 from "../images/5.jpeg";
import img6 from "../images/6.jpg";
import img7 from "../images/7.jpeg";
import img8 from "../images/8.jpeg";
import img9 from "../images/9.jpeg";
import img10 from "../images/10.jpeg";
import img11 from "../images/11.jpeg";
import img12 from "../images/12.jpeg";
import img13 from "../images/13.jpeg";
import img14 from "../images/14.jpg";
import img15 from "../images/15.jpeg";
import img16 from "../images/16.jpeg";
import img17 from "../images/17.jpg";
import img18 from "../images/18.jpeg";
import img19 from "../images/19.jpeg";

const images = [
  img2,
  img3,
  img4,
  img5,
  img6,

  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img18,
  img17,
  
  img7,
  
  img19,img1,
];

const ImageModal = ({ src, alt, onClose }) => {
  if (!src) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
      <div className="p-4 max-w-3xl max-h-full overflow-auto">
        <img src={src} alt={alt} className="rounded-lg" />
        <button onClick={onClose} className="btn btn-error mt-2">
          Close
        </button>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => openModal(image)}
            className="cursor-pointer"
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="h-auto max-w-full rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        ))}
      </div>
      {modalImage && (
        <ImageModal
          src={modalImage}
          alt="Enlarged image"
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Gallery;
