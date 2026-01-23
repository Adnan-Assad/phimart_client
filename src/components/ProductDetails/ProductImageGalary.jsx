import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import defaultImage from "../../assets/images";

const ProductImageGalary = ({ images, ProductName }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const displayImages = images.length > 0 ? images : [defaultImage];

  return (
    <div>
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className="product-main-slider"
      >
        {displayImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={images} alt={ProductName} />
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </div>
  );
};

export default ProductImageGalary;
