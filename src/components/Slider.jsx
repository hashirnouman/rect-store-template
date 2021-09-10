import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <div>
        
      </div>
      <Carousel
        swipeable={true}
        autoPlay={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .9"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          <img
            src="https://upstartgroup.com/wp-content/uploads/FreeConsult-HDR-1700X500-v2.jpg"
            alt=""
          />
        </div>
        <div>
          <img src="https://via.placeholder.com/1700x500" alt="" />
        </div>
        <div>
          <img src="https://via.placeholder.com/1700x500" alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
