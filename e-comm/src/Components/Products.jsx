import React, { useState } from "react";
import Layout from "./Layout";

// here i use swiper js
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination } from "swiper/modules";

const Products = () => {
  const [products, setProducts] = useState([
    {
      title: "Blue shirt for mens",
      price: 1200,
      discount: 15,
      thumbnail: "/products/a.jpg",
    },
    {
      title: "Blue shirt for mens",
      price: 1200,
      discount: 15,
      thumbnail: "/products/b.jpg",
    },
    {
      title: "Blue shirt for mens",
      price: 1200,
      discount: 15,
      thumbnail: "/products/c.jpg",
    },
    {
      title: "Blue shirt for mens",
      price: 1200,
      discount: 15,
      thumbnail: "/products/d.jpg",
    },
    {
      title: "Blue shirt for mens",
      price: 1200,
      discount: 15,
      thumbnail: "/products/e.jpg",
    },
    {
      title: "Blue shirt for mens",
      price: 1200,
      discount: 15,
      thumbnail: "/products/f.jpg",
    },
    {
      title: "Blue shirt for mens",
      price: 1200,
      discount: 15,
      thumbnail: "/products/g.jpg",
    },
    {
      title: "Blue shirt for mens",
      price: 1200,
      discount: 15,
      thumbnail: "/products/f.jpg",
    },
    {
      title: "Blue shirt for mens",
      price: 1200,
      discount: 15,
      thumbnail: "/products/g.jpg",
    },
    {
      title: "Blue shirt for mens",
      price: 1200,
      discount: 15,
      thumbnail: "/products/h.jpg",
    },
    {
      title: "Blue shirt for mens",
      price: 1200,
      discount: 15,
      thumbnail: "/products/i.jpg",
    },
    {
      title: "Blue shirt for mens",
      price: 1200,
      discount: 15,
      thumbnail: "/products/j.jpg",
    },
    {
      title: "Blue shirt for mens",
      price: 1200,
      discount: 15,
      thumbnail: "/products/k.jpg",
    },
  ]);
  return (
    <Layout>
      <div>
        <div className="md:p-16 p-8">
          <h1 className="text-3xl font-bold text-center">All Products</h1>
          <p className="mx-auto text-gray-500 md:w-7/12 mt-2 mb-16 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            similique quisquam ad modi dignissimos at dolore temporibus quam,
            eligendi.
          </p>
          <div className="md:w-10/12 mx-auto grid md:grid-cols-4 gap-12">
            {products.map((item, index) => (
              <div key={index} className="bg-white shadow-lg">
                <img className="rounded-md" src={item.thumbnail} alt="img" />
                <div className="p-4">
                  <h1 className="text-lg font-semibold">{item.title}</h1>
                </div>
                <div className="space-x-2">
                  <label className="font-bold text-lg">
                    ₹{item.price - (item.price * item.discount) / 100}
                  </label>
                  <del>₹{item.price}</del>
                  <label className="text-gray-600">({item.discount}%)</label>
                </div>
                <button className="w-full py-2 bg-green-500 rounded-md text-white font-semibold mt-4">
                  Buy now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
