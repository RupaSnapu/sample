
// import React from 'react';
// import Link from 'next/link';

// const RelatedPosts = () => {
//   return (
//     <section className="related-posts">
//       <h2>Related Posts</h2>
//       <div className="related-posts-grid">
//         <div className="related-post-card">
//           <div className="related-post-image">
//             <img src="BT.png" alt="Post 1" />
//           </div>
//           <div className="related-post-content">
//             <h3>Budget Travel Tips</h3>
//             <p className="related-post-excerpt">Save more while exploring the world.</p>
//             <p className="related-post-date">May 15, 2025</p>
//             <Link to="/blog/budget-travel" className="read-more-btn">Read More</Link>
//           </div>
//         </div>

//         <div className="related-post-card">
//           <div className="related-post-image">
//             <img src="10ET.png" alt="Post 2" />
//           </div>
//           <div className="related-post-content">
//             <h3>Top 10 European Cities</h3>
//             <p className="related-post-excerpt">Explore the best destinations in Europe.</p>
//             <p className="related-post-date">May 10, 2025</p>
//             <Link to="/blog/europe-cities" className="read-more-btn">Read More</Link>
//           </div>
//         </div>

//         <div className="related-post-card">
//           <div className="related-post-image">
//             <img src="solo.png" alt="Post 3" />
//           </div>
//           <div className="related-post-content">
//             <h3>Solo Travel Safety</h3>
//             <p className="related-post-excerpt">How to stay safe and confident while traveling alone.</p>
//             <p className="related-post-date">May 5, 2025</p>
//             <Link to="/blog/solo-travel" className="read-more-btn">Read More</Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RelatedPosts;import React from 'react';
// import Link from 'next/link';

// const RelatedPosts = () => {
//   return (
//     <section className="related-posts">
//       <h2>Related Posts</h2>
//       <div className="related-posts-grid">
//         <div className="related-post-card">
//           <div className="related-post-image">
//             <img src="BT.png" alt="Post 1" />
//           </div>
//           <div className="related-post-content">
//             <h3>Budget Travel Tips</h3>
//             <p className="related-post-excerpt">Save more while exploring the world.</p>
//             <p className="related-post-date">May 15, 2025</p>
//             <Link href="/blog/budget-travel" className="read-more-btn">Read More</Link>
//           </div>
//         </div>

//         <div className="related-post-card">
//           <div className="related-post-image">
//             <img src="10ET.png" alt="Post 2" />
//           </div>
//           <div className="related-post-content">
//             <h3>Top 10 European Cities</h3>
//             <p className="related-post-excerpt">Explore the best destinations in Europe.</p>
//             <p className="related-post-date">May 10, 2025</p>
//             <Link href="/blog/europe-cities" className="read-more-btn">Read More</Link>
//           </div>
//         </div>

//         <div className="related-post-card">
//           <div className="related-post-image">
//             <img src="solo.png" alt="Post 3" />
//           </div>
//           <div className="related-post-content">
//             <h3>Solo Travel Safety</h3>
//             <p className="related-post-excerpt">How to stay safe and confident while traveling alone.</p>
//             <p className="related-post-date">May 5, 2025</p>
//             <Link href="/blog/solo-travel" className="read-more-btn">Read More</Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RelatedPosts;

import Link from 'next/link';

const RelatedPosts = () => {
  return (
    <section className="related-posts">
      <h2>Related Posts</h2>
      <div className="related-posts-grid">
        <div className="related-post-card">
          <img src="/BT.png" alt="Budget Travel" />
          <h3>Budget Travel Tips</h3>
          <p>Save more while exploring the world.</p>
          <p>May 15, 2025</p>
          <Link href="/blog/budget-travel" className="read-more-btn">
            Read More
          </Link>
        </div>

      <div className="related-post-card">
  <img
    src="/10ET.png"
    alt="Top 10 European Cities"
    style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
  />
  <h3>Top 10 European Cities</h3>
  <p>Explore the best destinations in Europe.</p>
  <p>May 10, 2025</p>
  <Link href="/blog/europe-cities" className="read-more-btn">
    Read More
  </Link>
</div>


        <div className="related-post-card">
          <img src="/solo.png" alt="Solo Travel Safety" />
          <h3>Solo Travel Safety</h3>
          <p>How to stay safe and confident while traveling alone.</p>
          <p>May 5, 2025</p>
          <Link href="/blog/solo-travel" className="read-more-btn">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
