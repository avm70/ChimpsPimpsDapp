import React from 'react';
import styled from 'styled-components';
import { Pagination, Navigation, Autoplay, EffectCards } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


import img1 from '../../assets/Nfts/chimp1.png'
import img2 from '../../assets/Nfts/chimp5.png'
import img3 from '../../assets/Nfts/chimp6.png'
import img4 from '../../assets/Nfts/chimp7.png'
import img5 from '../../assets/Nfts/chimp8.png'
import img6 from '../../assets/Nfts/chimp9.png'
import img7 from '../../assets/Nfts/chimp2.png'
import img8 from '../../assets/Nfts/chimp3.png'
import img9 from '../../assets/Nfts/chimp4.png'
import img10 from '../../assets/Nfts/chimp10.png'

const Container = styled.div`
width: 30vw;
height: 60vh;
font-size: 0%;

@media (max-width: 64em){
    height: 20vh;
    width: 40vw;
}

.swiper{
    width: 100%;
    height: 100%;
}

.swiper-slide{
    width: 100%;
    height: 100%;
    background: black;  
    border: 0.1px;
    border-style: solid;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: black;
    position: relative;
}
`

const ImageContainer = styled.div`
img {
    width: 100%;
    height: 30%;  
    border: 1px;
    border-style: solid;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: black;
    position: relative;
}
`


const Carousel = () => {
    return (
        <Container>
            <Swiper
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    type:'fraction',
                }}
                scrollbar={{
                    draggable: true,
                }}
                navigation={true}
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards,Pagination,Navigation,Autoplay]}
                className="mySwiper"
                >
                <SwiperSlide><ImageContainer><img src={img10} alt="nft"/></ImageContainer></SwiperSlide>
                <SwiperSlide><ImageContainer><img src={img9} alt="nft"/></ImageContainer></SwiperSlide>
                <SwiperSlide><ImageContainer><img src={img8} alt="nft"/></ImageContainer></SwiperSlide>
                <SwiperSlide><ImageContainer><img src={img7} alt="nft"/></ImageContainer></SwiperSlide>
                <SwiperSlide><ImageContainer><img src={img1} alt="nft"/></ImageContainer></SwiperSlide>
                <SwiperSlide><ImageContainer><img src={img2} alt="nft"/></ImageContainer></SwiperSlide>
                <SwiperSlide><ImageContainer><img src={img3} alt="nft"/></ImageContainer></SwiperSlide>
                <SwiperSlide><ImageContainer><img src={img4} alt="nft"/></ImageContainer></SwiperSlide>
                <SwiperSlide><ImageContainer><img src={img5} alt="nft"/></ImageContainer></SwiperSlide>
                <SwiperSlide><ImageContainer><img src={img6} alt="nft"/></ImageContainer></SwiperSlide>
            </Swiper>
        </Container>
    )
}

export default Carousel