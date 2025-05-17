// pages/index.js
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BlogContent from '../components/BlogContent';
import TipCard from '../components/TipCard';
import RelatedPosts from '../components/RelatedPosts';
import Footer from '../components/Footer';
import TravelOnBudget from '../components/TravelOnBudget';


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BlogContent />
      <TipCard />
      <TravelOnBudget />
      <RelatedPosts />
      <Footer />
    </>
  );
}
