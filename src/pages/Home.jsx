 
import HeroCarousel from "../components/Home/carousel/HeroCarousel";
import Category from "../components/Home/categories/Category";
import Features from "../components/Home/Features";
import Product from "../components/Products/Product";
import DiscountSection from "../components/Home/Discount/DiscountSection";

 const Home = () => {
    return (
        <div>
               <HeroCarousel />
               <Features />
               <Category />
               <Product />
               <DiscountSection />
        </div>
    );
};

export default Home;



 