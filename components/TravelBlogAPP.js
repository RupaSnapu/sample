import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import HeroSection from './HeroSection';
import BlogContent from './BlogContent';
import TipCard from './TipCard';
import RelatedPosts from './RelatedPosts';
import Footer from './Footer';
import TravelOnBudget from './TravelOnBudget';
import BlogDetail from './BlogDetail';
function TravelBlogAPP() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/blog" element={<BlogContent />} />
        <Route path="/tips" element={
          <>
            <TipCard title="Pro Tip" body="Pack light to travel faster and save on baggage fees." />
            <TipCard
              title="Pro Tip"
              body="Plan Ahead but Stay Flexible. Book key things like flights and accommodations early, but leave some room for spontaneous adventures."
            />
          </>
        } />
        <Route path="/budget" element={<TravelOnBudget />} />
        <Route path="/related" element={<RelatedPosts />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default TravelBlogAPP;
