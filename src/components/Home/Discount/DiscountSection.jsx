 
import bannerImg from "../../../assets/images/banner-image3.png";
import bgImg from "../../../assets/images/banner-image-bg-1.jpg";
import DiscountTimer from "./DiscountTimer";

const DiscountSection = () => {
    return (
        <section className="w-full h-[600px] bg-center bg-cover flex justify-center px-4 md:px-8 items-center " style={{backgroundImage: `url(${bgImg})`}}  >
        <div className="container w-full flex flex-col md:flex-row justify-between items-center  ">

            {/* Left Content */}


            <div className="max-w-md  md:w-1/2 flex justify-center">
                <img className=" w-2/3 md:w-full" src={bannerImg} alt="" />
            </div>

            {/* Right Content */}

            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 ">
                <h1 className="text-3xl md:text-4xl    font-bold text-gray-900">30% Discount on All Items. Hurry UP !!!</h1>

                {/* Discount Timer */}

                <DiscountTimer />

              
                <button className='btn btn-secondary px-6 py-3 rounded-full shadow-md'>Shop Collection</button>
            </div>
           
        </div>
        </section>
    );
};

export default DiscountSection;