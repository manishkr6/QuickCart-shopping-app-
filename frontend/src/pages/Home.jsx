import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";

const placeholderProducts = [
  {
    _id: "1",
    name: "Casual Shirt",
    price: 29.99,
    image: [
      {
        url: "https://picsum.photos/500/500?random=6",
      },
    ],
  },
  {
    _id: "2",
    name: "Comfortable Sneakers",
    price: 69.99,
    image: [
      {
        url: "https://picsum.photos/500/500?random=7",
      },
    ],
  },
  {
    _id: "3",
    name: "Elegant Dress",
    price: 89.99,
    image: [
      {
        url: "https://picsum.photos/500/500?random=8",
      },
    ],
  },
  {
    _id: "4",
    name: "Trendy Sunglasses",
    price: 19.99,
    image: [
      {
        url: "https://picsum.photos/500/500?random=9",
      },
    ],
  },
  {
    _id: "5",
    name: "Leather Jacket",
    price: 99.99,
    image: [
      {
        url: "https://picsum.photos/500/500?random=10",
      },
    ],
  },
  {
    _id: "6",
    name: "Classic Watch",
    price: 199.99,
    image: [
      {
        url: "https://picsum.photos/500/500?random=11",
      },
    ],
  },
  {
    _id: "7",
    name: "Stylish Backpack",
    price: 39.99,
    image: [
      {
        url: "https://picsum.photos/500/500?random=12",
      },
    ],
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetails />

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>

        <ProductGrid products={placeholderProducts} />
      </div>

      <FeaturedCollection />
      <FeaturesSection />
    </div>
  );
};

export default Home;
