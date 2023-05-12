"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";

import img1 from '../../assets/bg-1.png';
import img2 from '../../assets/bg-1-1.png';
import img3 from '../../assets/bg-1-2.png';
import { Product } from '../Product';

const Swipe = () => {
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={12}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[]}
                className="mySwiper"
                initialSlide={1}
            >
                <SwiperSlide>
                    <Product
                        image={img1}
                        name='Organic Skinny High Waist Raw Hem Jeans'
                        price='€33.95' />
                </SwiperSlide>
                <SwiperSlide>
                    <Product
                        image={img2}
                        name='Organic Skinny High Waist Raw Hem Jeans'
                        price='€33.95' />
                </SwiperSlide>
                <SwiperSlide>
                    <Product
                        image={img3}
                        name='Organic Skinny High Waist Raw Hem Jeans'
                        price='€33.95' />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export { Swipe }