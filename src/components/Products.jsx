import React, { useState } from "react";
import EnquiryModal from "./EnquiryModal"; // Import the EnquiryModal component

// Import local images
import bedroomImage from "../images/bedroom.png";
import wardrobeImage from "../images/wardrobe.png";
import ledPanelImage from "../images/led_panel.png";
import livingRoomImage from "../images/living_room.png";
import falseCeilingImage from "../images/false_ceiling.png";
import commercialPlacesImage from "../images/commercial_places.png";
import modularKitchenImage from "../images/modular_kitchen.png";
import officeInteriorImage from "../images/office_interior.png";
import gardenDecorImage from "../images/garden_decor.png";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
const products = [
  {
    id: 1,
    name: "BEDROOM INTERIOR",
    description:
      "Transform your sleeping space into a serene sanctuary with our bespoke bedroom interior designs that blend comfort with style.",
    imageUrl: bedroomImage,
  },
  {
    id: 2,
    name: "WARDROBE",
    description:
      "Maximize your storage with our custom wardrobes, tailored to fit your space and style, ensuring everything has its place.",
    imageUrl: wardrobeImage,
  },
  {
    id: 3,
    name: "LED PANEL",
    description:
      "Enhance any room with our energy-efficient LED panels, offering sleek design and uniform lighting to brighten your space elegantly.",
    imageUrl: ledPanelImage,
  },
  {
    id: 4,
    name: "LIVING ROOM DESIGN",
    description:
      "Create a welcoming atmosphere with our living room designs that balance aesthetic appeal with functional comfort, perfect for both relaxation and entertaining.",
    imageUrl: livingRoomImage,
  },
  {
    id: 5,
    name: "FALSE CEILING DESIGN",
    description:
      "Elevate your interiors with our innovative false ceiling designs that add depth and character while offering functional benefits like enhanced lighting and sound insulation.",
    imageUrl: falseCeilingImage,
  },
  {
    id: 6,
    name: "COMMERCIAL PLACES DESIGNING",
    description:
      "Revitalize your business space with our dynamic commercial place designs, tailored to reflect your brand and optimize operational efficiency.",
    imageUrl: commercialPlacesImage,
  },
  {
    id: 7,
    name: "MODULAR KITCHEN",
    description:
      "Streamline your culinary space with our modular kitchens, featuring smart layouts and customizable features designed for maximum utility and style.",
    imageUrl: modularKitchenImage,
  },
  {
    id: 8,
    name: "OFFICE INTERIOR",
    description:
      "Transform your workspace with our office interior designs that foster productivity and creativity, while ensuring a comfortable and motivating environment for your team.",
    imageUrl: officeInteriorImage,
  },
  {
    id: 9,
    name: "GARDEN DECOR",
    description:
      "Enhance your outdoor space with our garden decor solutions, creating beautiful, functional areas that invite relaxation and nature engagement.",
    imageUrl: gardenDecorImage,
  },
];

const ProductsPage = () => {
  const [activeProduct, setActiveProduct] = useState(null);

  const handleEnquiryClick = (product) => {
    setActiveProduct(product);
  };

  const closeEnquiryModal = () => {
    setActiveProduct(null);
  };

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <img
            src={image1}
            alt="Description of image1"
            className="w-full h-auto rounded-lg shadow-lg  transition duration-300 ease-in-out hover:scale-110"
          />
          <img
            src={image2}
            alt="Description of image2"
            className="w-full h-auto rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-110"
          />
          <img
            src={image3}
            alt="Description of image3"
            className="w-full h-auto rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-110"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="card w-full bg-base-100 shadow-xl relative"
            >
              <figure className="px-10 pt-10 transition duration-300 ease-in-out hover:scale-110">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="rounded-xl mt-10 "
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.description}</p>
                <div className="card-actions">
                  <button
                    className="btn bg-[#561C24] text-white hover:bg-red-800"
                    onClick={() => handleEnquiryClick(product)}
                  >
                    Enquiry
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {activeProduct && (
          <EnquiryModal product={activeProduct} onClose={closeEnquiryModal} />
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
