// // import { Search } from "@/components/ui/search"
// // import { FeaturedPost } from "@/components/blog/featured-post"
// // import { PostCard } from "@/components/blog/post-card"

// const FEATURED_POST = {
//   title: "Mastering UI/UX Design: A Comprehensive Guide",
//   excerpt: "Learn the essential principles and best practices for creating exceptional user experiences in modern web applications.",
//   date: "2024-03-20",
//   image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
//   slug: "mastering-ui-ux-design"
// }

// const POSTS = [
//   {
//     title: "The Future of Web Development",
//     excerpt: "Exploring upcoming trends and technologies shaping the future of web development.",
//     date: "2024-03-19",
//     image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop",
//     slug: "future-web-development"
//   },
//   {
//     title: "Building Scalable Applications",
//     excerpt: "Best practices for creating maintainable and scalable web applications.",
//     date: "2024-03-18",
//     image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop",
//     slug: "building-scalable-applications"
//   },
//   {
//     title: "Modern CSS Techniques",
//     excerpt: "Advanced CSS strategies for creating beautiful and responsive layouts.",
//     date: "2024-03-17",
//     image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2070&auto=format&fit=crop",
//     slug: "modern-css-techniques"
//   }
// ]

// export default function Home() {
//   return (
//     <main className="container mx-auto px-4 py-8">
//       <div className="mb-8 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
//         <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
//         <div className="w-full md:w-[300px]">
//           <Search />
//         </div>
//       </div>
      
//       <section className="mb-12">
//         <FeaturedPost {...FEATURED_POST} />
//       </section>

//       <section>
//         <h2 className="mb-8 text-2xl font-semibold tracking-tight">Recent Posts</h2>
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {POSTS.map((post) => (
//             <PostCard key={post.slug} {...post} />
//           ))}
//         </div>
//       </section>
//     </main>
//   )
// }