import Category from "../../components/category/Category";
import HeroSection from "../../components/heroSection/HeroSection";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Layout from "../../components/layout/layout";
import Loader from "../../components/loader/Loader";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";




const HomePage = () => {
   
    return (
        <Layout>
            <HeroSection/>
            <Category/>
            <HomePageProductCard/>
            <Track/>
            <Testimonial/>
            <Loader/>
            <h1>{name}</h1>
        </Layout>
    );
}

export default HomePage;