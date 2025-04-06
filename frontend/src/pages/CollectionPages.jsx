import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSiderbar from "../components/Products/FilterSiderbar";

const CollectionPages = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    // Close sidebar if clicked outside
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    // Add and clean up event listener
    document.addEventListener("mousedown", handleClickOutside);

    document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
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
      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter />
      </button>

      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSiderbar />
      </div>

      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>

        {/* Sort Options */}
      </div>
    </div>
  );
};

export default CollectionPages;
