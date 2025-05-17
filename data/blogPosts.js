// // const blogPosts = {
// //   'budget-travel': {
// //     title: 'Budget Travel Tips',
// //     date: 'May 15, 2025',
// //     image: '/BT.png',
// //     description: <p>Save more while exploring the world with smart tips...</p>,
// //   },
// //   'europe-cities': {
// //     title: 'Top 10 European Cities',
// //     date: 'May 10, 2025',
// //     image: '/10ET.png',
// //     description: <p>Explore the best destinations in Europe.</p>,
// //   },
// //   'solo-travel': {
// //     title: 'Solo Travel Safety',
// //     date: 'May 5, 2025',
// //     image: '/solo.png',
// //     description: <p>How to stay safe and confident while traveling alone.</p>,
// //   }
// // };

// // export default blogPosts;

// import { useRouter } from 'next/router';
// const blogPosts = {
//   'budget-travel': {
//     title: 'Budget Travel Tips',
//     date: 'May 15, 2025',
//     content: 'Save more while exploring the world. Here are some practical strategies for affordable travel...',
//     image: '/BT.png',
//     description:(
//   <div>
//     <h3>💸 Travel Smart, Spend Less</h3>
//     <p>
//       Traveling the world doesn't have to be expensive. With a bit of planning and the right strategies, you can see incredible places, enjoy authentic experiences, and stick to a tight budget. These budget travel tips will help you make the most of your money — wherever your passport takes you.
//     </p>

//     <h4>Top Budget Travel Tips</h4>
//     <ul>
//       <li><strong>Plan Ahead:</strong> Book transportation and accommodation early to get the best rates.</li>
//       <li><strong>Travel in Off-Season:</strong> Prices drop significantly in shoulder or low seasons. Fewer tourists, too!</li>
//       <li><strong>Use Budget Airlines:</strong> Airlines like Ryanair, Wizz Air, or EasyJet offer affordable fares across Europe and beyond — just beware of extra fees.</li>
//       <li><strong>Pack Light:</strong> Avoid baggage fees by traveling with carry-on only. Smart packing saves money and hassle.</li>
//       <li><strong>Stay in Hostels or Guesthouses:</strong> Affordable, social, and often located centrally. Look for free breakfast or kitchen access to save more.</li>
//       <li><strong>Cook Your Own Meals:</strong> Visit local markets and grocery stores. Making your own food saves money and gives you a local experience.</li>
//       <li><strong>Use Public Transport:</strong> Buses, metros, and trains are cheaper than taxis or car rentals. Many cities also offer multi-day or unlimited passes.</li>
//       <li><strong>Walk or Bike:</strong> The cheapest way to explore — and the healthiest! Many cities offer free walking or bike tours.</li>
//       <li><strong>Look for Free Attractions:</strong> Parks, museums (on free-entry days), historical sites, and cultural festivals are often free to enjoy.</li>
//       <li><strong>Use Travel Apps:</strong> Apps like Skyscanner, Rome2Rio, and Hostelworld can help you find the best deals on flights, routes, and stays.</li>
//     </ul>

//     <h4>Bonus Tips</h4>
//     <ul>
//       <li><strong>Travel Overnight:</strong> Save on a night’s accommodation by taking night buses or trains.</li>
//       <li><strong>Bring a Reusable Water Bottle:</strong> Save money (and the environment) by refilling instead of buying bottled water.</li>
//       <li><strong>Get Travel Insurance:</strong> Unexpected events can be expensive. Insurance helps avoid major costs in emergencies.</li>
//     </ul>

//     <p>
//       Budget travel isn't about cutting corners — it's about making smart choices that allow you to explore more for less. With these tips, your dream trip can be both affordable and unforgettable.
//     </p>
//   </div>
// )

//   },
//   'europe-cities': {
//     title: 'Top 10 European Cities',
//     date: 'May 10, 2025',
//     content: 'Explore the best destinations in Europe with culture, food, and fun...',
//     image: '/10ET.png',
//     description: (
//       <div>
//         <h3>✈️ Explore Europe Without Breaking the Bank!</h3>
//         <p>
//           Europe is full of iconic cities, rich cultures, and unforgettable experiences. But traveling across this beautiful continent doesn’t have to cost a fortune. Here’s a list of the <strong>top 10 must-visit European cities</strong> along with smart <strong>budget travel tips</strong> to help you make the most of your trip.
//         </p>

//         <h4>Top 10 European Cities for Budget-Friendly Travel</h4>
//         <ol>
//           <li>
//             <strong>Budapest, Hungary</strong> – Thermal baths, stunning architecture, and cheap eats. <em>Don’t miss:</em> A night walk across Chain Bridge or a soak in Széchenyi Baths.
//           </li>
//           <li>
//             <strong>Prague, Czech Republic</strong> – Fairytale city with affordable accommodation and food. <em>Budget tip:</em> Many historical sites are free to view from the outside.
//           </li>
//           <li>
//             <strong>Lisbon, Portugal</strong> – Colorful neighborhoods, fado music, and budget-friendly seafood. <em>Pro tip:</em> Use the iconic tram 28 for a cheap city tour.
//           </li>
//           <li>
//             <strong>Kraków, Poland</strong> – Rich history, beautiful old town, and low costs. <em>Budget tip:</em> Many museums offer free entry on selected days.
//           </li>
//           <li>
//             <strong>Athens, Greece</strong> – Ancient ruins and vibrant street life at great prices. <em>Save more:</em> Buy a combined ticket to multiple archaeological sites.
//           </li>
//           <li>
//             <strong>Valencia, Spain</strong> – Beach city with delicious local cuisine and fewer crowds than Barcelona. <em>Pro tip:</em> Visit the City of Arts and Sciences from the outside for free.
//           </li>
//           <li>
//             <strong>Sofia, Bulgaria</strong> – One of Europe’s cheapest capitals with a unique cultural mix. <em>Budget tip:</em> Take a free walking tour offered by local guides.
//           </li>
//           <li>
//             <strong>Belgrade, Serbia</strong> – Lively nightlife, riverside vibes, and affordable dining. <em>Save big:</em> Local buses and hostels are incredibly cheap.
//           </li>
//           <li>
//             <strong>Porto, Portugal</strong> – Charming riverside town known for port wine and colorful houses. <em>Budget tip:</em> Explore by foot — many attractions are clustered together.
//           </li>
//           <li>
//             <strong>Tallinn, Estonia</strong> – A medieval gem with modern touches, and not overly touristy. <em>Free fun:</em> Stroll through the Old Town and visit public lookouts.
//           </li>
//         </ol>

//         <h4>💡 Budget Travel Tips for Europe</h4>
//         <ul>
//           <li>Travel in the off-season for cheaper flights and accommodations.</li>
//           <li>Book in advance — trains, buses, and hostels are cheaper when planned ahead.</li>
//           <li>Use city passes that offer discounts or free access to public transport and museums.</li>
//           <li>Cook your own meals or eat where locals do.</li>
//           <li>Walk or use public transport — skip taxis or rental cars.</li>
//           <li>Use budget airlines but check baggage policies carefully.</li>
//           <li>Stay in hostels or try couchsurfing/short-term rentals.</li>
//           <li>Travel overnight on buses or trains to save on a night’s stay.</li>
//           <li>Bring a reusable water bottle — many cities have refill stations.</li>
//           <li>Get travel insurance — a small investment that can prevent major expenses.</li>
//         </ul>
//       </div>
//     )
//   },
//   'solo-travel': {
//     title: 'Solo Travel Safety',
//     date: 'May 5, 2025',
//     content: 'How to stay safe and confident while traveling alone...',
//     image: '/solo.png',
//     description: (
//       <p>
//         Solo travel can be empowering and enriching, but it also requires heightened awareness and preparation. Solo travel safety refers to the practices and precautions individuals take to protect themselves while traveling alone. Key aspects include researching destinations thoroughly, keeping emergency contacts handy, securing travel documents and valuables, and staying aware of surroundings. It also involves using trusted transportation, avoiding risky areas, and maintaining regular communication with friends or family. With the right planning and mindset, solo travelers can explore the world with confidence and security.
//       </p>
//     )
//   }
// };
// export default function BlogPost() {
//   const router = useRouter();
//   const { slug } = router.query;

//   if (!slug) return <p>Loading...</p>;

//   const post = blogPosts[slug];

//   if (!post) return <p>Post not found</p>;

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.content}</p>
//     </div>
//   );
// }
// data/blogPosts.js

const blogPosts = {
  'budget-travel': {
    title: 'Budget Travel Tips',
    date: 'May 15, 2025',
    image: '/BT.png',
    description: (
      <div>
        <h3>💸 Travel Smart, Spend Less</h3>
        <p>Traveling the world doesn't have to be expensive...</p>
      </div>
    ),
  },
  'europe-cities': {
    title: 'Top 10 European Cities',
    date: 'May 10, 2025',
    image: '/10ET.png',
    description: (
      <div>
        <h3>✈️ Explore Europe Without Breaking the Bank!</h3>
        <p>Europe is full of iconic cities, rich cultures, and unforgettable experiences...</p>
      </div>
    ),
  },
  'solo-travel': {
    title: 'Solo Travel Safety',
    date: 'May 5, 2025',
    image: '/solo.png',
    description: (
      <div>
        <h3>Travel Alone, Stay Safe</h3>
        <p>Solo travel can be empowering and enriching...</p>
      </div>
    ),
  },
};

export default blogPosts;
