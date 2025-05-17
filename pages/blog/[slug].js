// import { useRouter } from 'next/router';
// import blogPosts from '../../data/blogPosts.js';

// const BlogPost = () => {
//   const router = useRouter();
//   const { slug } = router.query;

//   const post = blogPosts[slug];

//   if (!post) {
//     return <h2>Post not found</h2>;
//   }

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.date}</p>
//       <img src={post.image} alt={post.title} />
//       <div>{post.description}</div>
//     </div>
//   );
// };

// export default BlogPost;

// pages/blog/[slug].js
import { useRouter } from 'next/router';
import blogPosts from '../../data/blogPosts';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Optional: wait for the router to load the slug
  if (!slug) return <p>Loading...</p>;

  const post = blogPosts[slug];

  if (!post) {
    return (
      <div>
        <h2>Post not found</h2>
        <p>The blog post you're looking for doesn't exist or the URL is incorrect.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <img src={post.image} alt={post.title} style={{ maxWidth: '100%' }} />
      <div>{post.description}</div>
    </div>
  );
};

export default BlogPost;
