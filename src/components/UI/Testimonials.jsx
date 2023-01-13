import React from 'react';
import '../../styles/testimonials.css'
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import {EffectCards} from "swiper";
import avatar01 from '../../assets/img/avatar01.png'
import avatar02 from '../../assets/img/avatar02.png'

const BASE_URL =
  "https://sensical-platform.imgix.net/production/logos/wetransfer_gui_machado_experimental_paradigm-2-tif_2022-05-06_1823/";

export default function Testimonials() {
  return (
    <>
      <section>
        <div className="container sliders">

          <h2 className="section__title">Testimonials</h2>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            loop={true}
          >
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar01} alt=""/>
                </div>
                <h4>Jesica Fernandes</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aut doloremque magni quo sed veritatis. Accusantium doloremque
                  ducimus eaque et facere ipsam maiores maxime minus nostrum
                  placeat, quasi, sunt suscipit, vitae.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-02">
                  <img src={avatar02} alt=""/>
                </div>
                <h4>Jesica Fernandes</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aut doloremque magni quo sed veritatis. Accusantium doloremque
                  ducimus eaque et facere ipsam maiores maxime minus nostrum
                  placeat, quasi, sunt suscipit, vitae.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-03">
                  <img src={avatar01} alt=""/>
                </div>
                <h4>Jesica Fernandes</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aut doloremque magni quo sed veritatis. Accusantium doloremque
                  ducimus eaque et facere ipsam maiores maxime minus nostrum
                  placeat, quasi, sunt suscipit, vitae.</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}



