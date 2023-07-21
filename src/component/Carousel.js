import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as FiIcon from 'react-icons/fi'
import Member from './Member';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
import './Carousel.css';
SwiperCore.use([Autoplay, Navigation]);

function Carousel() {
    const [item] = useState(Member);
    return (
        <div>
            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                "delay": 1500,
                "disableOnInteraction": false
            }} navigation={true} className="mySwiper">
                {
                    item.map((elem) => {
                        const { id, name, position, image, comment, facebook, linkedin, github } = elem;
                        return (
                            <SwiperSlide className="slide-animation" key={id}>
                                <div className="img-box">
                                    <img src={image} alt={name} />
                                </div>
                                <div className="text-box">
                                    {comment}
                                </div>
                                <div className="img-bio">
                                    <h4>{name}</h4>
                                    <h5>{position}</h5>
                                </div>
                                <div className="social">
                                    <a href={linkedin}><i><FiIcon.FiLinkedin color="#0077b5" /></i></a>
                                    <a href={github}><i><FiIcon.FiGithub color="#333" /></i></a>
                                    <a href={facebook}><i><FiIcon.FiFacebook color="#4267B2" /></i></a>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Carousel
