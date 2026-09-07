import React, { useState } from "react";
import Layout from "./Layout";
const Products = () => {
  const [products, setProducts] = useState([
    {
      title: "men shirt blue denim",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dignissimos dolor magni temporibus nostrum minima.",
      price: 2000,
      discount: 15,
      image: "/products/a.jpg",
    },
    {
      title: "men shirt blue denim",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dignissimos dolor magni temporibus nostrum minima.",
      price: 2000,
      discount: 15,
      image: "/products/b.jpg",
    },
    {
      title: "men shirt blue denim",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dignissimos dolor magni temporibus nostrum minima.",
      price: 2000,
      discount: 15,
      image: "/products/c.jpg",
    },
    {
      title: "men shirt blue denim",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dignissimos dolor magni temporibus nostrum minima.",
      price: 2000,
      discount: 15,
      image: "/products/d.jpg",
    },
    {
      title: "men shirt blue denim",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dignissimos dolor magni temporibus nostrum minima.",
      price: 2000,
      discount: 15,
      image: "/products/e.jpg",
    },
    {
      title: "men shirt blue denim",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dignissimos dolor magni temporibus nostrum minima.",
      price: 2000,
      discount: 15,
      image: "/products/f.jpg",
    },
    {
      title: "men shirt blue denim",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dignissimos dolor magni temporibus nostrum minima.",
      price: 2000,
      discount: 15,
      image: "/products/g.jpg",
    },
    {
      title: "men shirt blue denim",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dignissimos dolor magni temporibus nostrum minima.",
      price: 2000,
      discount: 15,
      image: "/products/h.jpg",
    },
    {
      title: "men shirt blue denim",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dignissimos dolor magni temporibus nostrum minima.",
      price: 2000,
      discount: 15,
      image: "/products/i.jpg",
    },
    {
      title: "men shirt blue denim",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dignissimos dolor magni temporibus nostrum minima.",
      price: 2000,
      discount: 15,
      image: "/products/j.jpg",
    },
    {
      title: "men shirt blue denim",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dignissimos dolor magni temporibus nostrum minima.",
      price: 2000,
      discount: 15,
      image: "/products/k.jpg",
    },
    {
      title: "men shirt blue denim",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dignissimos dolor magni temporibus nostrum minima.",
      price: 2000,
      discount: 15,
      image: "/products/a.jpg",
    },
  ]);
  return (
    <Layout>
      <div>
        <h1 className="text-xl font-semibold mb-4">Products</h1>
        {/* here i use md: for makeing phone */}
        <div className=" grid md:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <div key={index} className="bg-white rounded-md  shadow-md">
              <img src={item.image} alt="img" className="rounded-t-md w-full h-[270px] object-cover" />
              <div className="font-semibold p-4">
                <h1>{item.title}</h1>
                {/* here i use (slice) for short description */}
                <p className="text-gray-600">
                  {item.description.slice(0, 20)}...
                </p>
                <div className="flex gap-2 mt-1">
                  <label>
                    ₹{item.price - (item.price * item.discount) / 100}
                  </label>
                  <del className="font-semibold">₹{item.price}</del>
                  <label className="text-gray-600">
                    ({item.discount}% Off)
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
