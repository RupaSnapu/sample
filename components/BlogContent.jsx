import React from 'react';


const BlogContent = () => {
  return (
    <div className="blog-content">
      <article className="main-article">
        <h2>Top Travel Tips</h2>
        <div className="article-meta">
          <span>By Admin</span>
          <span>May 16, 2025</span>
        </div>
        <div className="article-image">
          <img src="tips.png" alt="Travel"
    style={{ width: '500px', height: 'auto', display: 'block', margin: '0 auto' }} />
        </div>
        <div className="article-text">
          <p>Plan early, book smart, and keep it light. Here's how to travel like a pro.</p>
        </div>
      </article>
    </div>
  );
};

export default BlogContent;
