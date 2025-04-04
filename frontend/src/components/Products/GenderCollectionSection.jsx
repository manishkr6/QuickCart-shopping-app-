import React from "react";
import womensCollectionImages from "../../assets/womens-collection.webp";
import mensCollectionImages from "../../assets/mens-collection.webp";
import { Link } from "react-router-dom";
import { TbArrowRightToArc } from "react-icons/tb";

const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Women's Collection */}
        <div className="relative flex-1">
          <img
            src={womensCollectionImages}
            alt=""
            className="w-full h-[700px] object-cover rounded-md"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-2 rounded-md">
            <h2 className="text-[20px] md:text-2xl font-bold text-gray-900 mb-3">
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=Women"
              className="flex items-center gap-2 font-medium text-gray-700 hover:text-gray-500 transition-colors"
            >
              Shop Now <TbArrowRightToArc />{" "}
            </Link>
          </div>
        </div>

        {/* Men's Collection */}
        <div className="relative flex-1">
          <img
            src={mensCollectionImages}
            alt=""
            className="w-full h-[700px] object-cover rounded-md"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-2 rounded-md">
            <h2 className="text-[20px] md:text-2xl font-bold text-gray-900 mb-3">
              Men's Collection
            </h2>
            <Link
              to="/collections/all?gender=Men"
              className="flex items-center gap-2 font-medium text-gray-700 hover:text-gray-500 transition-colors"
            >
              Shop Now <TbArrowRightToArc />{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
