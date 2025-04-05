import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [scrollStart, setScrollStart] = useState(0);

  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 49.99,
      image: [
        {
          url: "https://picsum.photos/500/500?random=1",
          alt: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Casual Shirt",
      price: 29.99,
      image: [
        {
          url: "https://picsum.photos/500/500?random=2",
          alt: "Casual Shirt",
        },
      ],
    },
    {
      _id: "3",
      name: "Comfortable Sneakers",
      price: 69.99,
      image: [
        {
          url: "https://picsum.photos/500/500?random=3",
          alt: "Comfortable Sneakers",
        },
      ],
    },
    {
      _id: "4",
      name: "Elegant Dress",
      price: 89.99,
      image: [
        {
          url: "https://picsum.photos/500/500?random=4",
          alt: "Elegant Dress",
        },
      ],
    },
    {
      _id: "5",
      name: "Trendy Sunglasses",
      price: 19.99,
      image: [
        {
          url: "https://picsum.photos/500/500?random=5",
          alt: "Trendy Sunglasses",
        },
      ],
    },
    {
      _id: "6",
      name: "Classic Watch",
      price: 199.99,
      image: [
        {
          url: "https://picsum.photos/500/500?random=6",
          alt: "Classic Watch",
        },
      ],
    },
    {
      _id: "7",
      name: "Sporty Backpack",
      price: 39.99,
      image: [
        {
          url: "https://picsum.photos/500/500?random=7",
          alt: "Sporty Backpack",
        },
      ],
    },
    {
      _id: "8",
      name: "Stylish Hat",
      price: 24.99,
      image: [
        {
          url: "https://picsum.photos/500/500?random=8",
          alt: "Stylish Hat",
        },
      ],
    },
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX - scrollRef.current.offsetLeft);
    setScrollStart(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollStart - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const updateScrollButton = () => {
    const container = scrollRef.current;

    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScroll =
        container.scrollWidth > leftScroll + container.clientWidth;

      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScroll);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButton);
      updateScrollButton();

      return () => {
        container.removeEventListener("scroll", updateScrollButton);
        return () =>
          container.removeEventListener("scroll", updateScrollButton);
      };
    }
  }, []);

  return (
    <section className="py-16 px-4 lg:px-0">
      {/* Header Section */}
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest trends and styles in our new arrivals section.
        </p>

        {/* Scroll Buttons */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border ${
              canScrollLeft
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded border ${
              canScrollRight
                ? "bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable Product Container */}
      <div
        ref={scrollRef}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative scroll-smooth ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            <img
              src={product.image[0].url}
              alt={product.image[0].alt || product.name}
              className="w-full h-[450px] object-cover rounded-lg"
              draggable="false"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg bg-black/40">
              <Link to={`/product/${product._id}`}>
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">$ {product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
