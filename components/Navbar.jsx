// import React from 'react';
// import Link from 'next/link';


// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <Link to="/" className="navbar-logo">MySite</Link>
//         <ul className="nav-menu">
//           <li className="nav-item"><Link to="/" className="nav-links">Home</Link></li>
//           <li className="nav-item"><Link to="/tips" className="nav-links">Tips</Link></li>
//           <li className="nav-item"><Link to="/blog" className="nav-links">Blog</Link></li>
//           <li className="nav-item"><Link to="/budget" className="nav-links">Budget</Link></li>
//           <li className="nav-item"><Link to="/related" className="nav-links">Related Posts</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">MySite</Link>
        <ul className="nav-menu">
          <li className="nav-item"><Link href="/" className="nav-links">Home</Link></li>
          <li className="nav-item"><Link href="/tips" className="nav-links">Tips</Link></li>
          <li className="nav-item"><Link href="/blog" className="nav-links">Blog</Link></li>
          <li className="nav-item"><Link href="/budget" className="nav-links">Budget</Link></li>
          <li className="nav-item"><Link href="/related" className="nav-links">Related Posts</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
