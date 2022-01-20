import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = () => {
  let setting = {
    dots: true,
    infinite: true,
    speed: 500,
    SlidersToShow: 1,
    autoplay: true,
  };
  return (
    <Carousel {...setting}>
      <Wrap>
        <img src="images/slider-badging.jpg" alt="slider" />
      </Wrap>
      <Wrap>
        <img src="images/slider-badging.jpg" alt="slider" />
      </Wrap>
      <Wrap>
        <img src="images/slider-badag.jpg" alt="slider" />
      </Wrap>
    </Carousel>
  );
};

export default ImgSlider;
const Carousel = styled(Slider)`
            margin-top: 20px;
            color: white;

            ul li button{
                &before{
                    font-style: 20px;
                    color: white;
                }
            }

            li.slick-active button:before{
                color: white;
            }
            .slick-list{
                overflow: visible;
            }
            button{
                z-index: 1;
            }
`;

const Wrap = styled.div`
                cursor: pointer;
            img{
                border: 4px solid transparent;
                border-radius: 10px;
                width: 100%;
                height: 100%;
                box-shadow: rgb(0 0 0 /69%) 0px 26px 38px -10px, rgb(0 0 0 /73%) 0px 16px 10px -18px;
                transition-duration: 280ms;
                &:hover{
                    border-radius: 10px;
                    border: 4px solid rgb(249, 249, 249, 0.8);
                }
            }
`;
