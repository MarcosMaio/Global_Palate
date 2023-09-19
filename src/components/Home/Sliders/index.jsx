import React, { useState } from 'react'
import styles from './sliders.module.scss'
import TextDivisor from '../../../assets/text_divide_decoration.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation , EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/navigation';
import Banner_1 from './img/banner 1.jpg'
import Banner_2 from './img/banner 2.jpg'
import Banner_3 from './img/banner 3.jpg'

export default function Sliders() {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleSlideChangeTransitionEnd = () => {
        setSlideIndex(slideIndex + 1);
    };

    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                delay: 10000,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={false}
                effect={'fade'}
                fadeEffect={{
                crossFade: true,

                }}
                simulateTouch={false}
                allowTouchMove={false}
                modules={[Autoplay, Navigation,EffectFade]}
                className="mySwiper"
                onSlideChangeTransitionEnd={handleSlideChangeTransitionEnd}
                >
                    
                    <SwiperSlide>
                        <div className={styles.division__content}>
                            <img width="1880" height="950" className={styles.slider__image} style={
                                slideIndex === 0
                                ? { animation: 'none' }
                                : {} } 
                            src={Banner_1} alt="Imagem 1" />
                            <div className={styles.overlayContent}>
                                <div className={styles.content}>
                                    <span className={styles.content__subtitle}>Unforgettable Flavor</span>
                                    <img className={styles.content__decoration} src={TextDivisor} alt='' />
                                    <h1 className={styles.content__title} >Savoring Every Bite of Perfection</h1>
                                    <p className={styles.content__paragraph}>Your Culinary Adventure Awaits Here</p>
                                    <button className={styles.content__button}>View Our Menu</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className={styles.division__content}>
                            <img width="1880" height="950" className={styles.slider__image} style={
                                slideIndex === 1
                                ? { animation: 'none' }
                                : {} } 
                            src={Banner_2} alt="Imagem 2" />
                            <div className={styles.overlayContent}>
                                <div className={styles.content}>
                                    <span className={styles.content__subtitle}>Fresh Vitality</span>
                                    <img className={styles.content__decoration} src={TextDivisor} alt='' />
                                    <h1 className={styles.content__title} >Nourishing Your Body, Delighting Your Palate</h1>
                                    <p className={styles.content__paragraph}>Your Culinary Adventure Awaits Here</p>
                                    <button className={styles.content__button}>View Our Menu</button>
                                </div>
                            </div>
                        </div>
                        
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={styles.division__content}>
                            <img width="1880" height="950" className={styles.slider__image} style={
                                slideIndex === 2
                                ? { animation: 'none' }
                                : {} }
                            src={Banner_3} alt="Imagem 3" />
                            <div className={styles.overlayContent}>
                                <div className={styles.content}>
                                    <span className={styles.content__subtitle}>Irresistible Elegance</span>
                                    <img className={styles.content__decoration} src={TextDivisor} alt='' />
                                    <h1 className={styles.content__title} >Satisfying Your Sweetest Desires</h1>
                                    <p className={styles.content__paragraph}>Your Culinary Adventure Awaits Here</p>
                                    <button className={styles.content__button}>View Our Menu</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
        </div>
)
}
