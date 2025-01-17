'use client';
import {Swiper, SwiperSlide} from 'swiper/react'; 
import Gadget from './Gadget';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';
const PopularGadgetCarousel = ({gadgets}) => {
  return <Swiper slidesPerView={1} spaceBetween={30} breakpoints={{
    640: {slidesPerView: 1},
    768: {slidesPerView: 2},
    960: {slidesPerView: 3},
    1440: {slidesPerView: 4},
  }}
  pagination={{
    clickable: true
  }}
  modules={[Pagination]}
  className='popular-bike-slider mb-8'
  >
    {gadgets.map(gadget => {
        return <SwiperSlide key={gadget._id}><Gadget gadget={gadget}/></SwiperSlide>
    })}
  </Swiper>;
}

export default PopularGadgetCarousel