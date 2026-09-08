import React from "react";
import Layout from "./Layout";

// here i use swiper js
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';


const Home = () => {
  return (
    <Layout>
      <div>
        <header>
          <Swiper navigation={true} pagination={true} modules={[Navigation,Pagination]} 
            slidesPerView={1}>
            <SwiperSlide><img src="/images/p1.jpg"/></SwiperSlide>
            <SwiperSlide><img src="/images/p2.jpg"/></SwiperSlide>
            <SwiperSlide><img src="/images/p3.jpg"/></SwiperSlide>
            <SwiperSlide><img src="/images/p4.jpg"/></SwiperSlide>
            <SwiperSlide><img src="/images/p5.jpg"/></SwiperSlide>
          </Swiper>
        </header>
      </div>
    </Layout>
  );
};

export default Home;
