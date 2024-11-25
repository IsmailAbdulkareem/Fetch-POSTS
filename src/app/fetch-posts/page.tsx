'use client';

import { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function FetchPostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
        try {
          const response = await fetch('/api/external');
          if (!response.ok) {
            throw new Error('Failed to fetch posts.');
          }
          const data = await response.json();
          console.log('Fetched Data:', data); // Log the API response
          setPosts(data as Post[]);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
          setLoading(false);
        }
      }
      

    fetchPosts();
  }, []);

  if (loading) return <p className='text-blue-600 border-b-2 border-solid border-2 border-indigo-600'>Loading posts...</p>;
  if (error) return <p className='text-red-600 border-b-2 border-solid border-2 border-indigo-60'>Error: {error}</p>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <h1 className='text-blue-500 font-bold text-2xl' style={{ textAlign: "center", color: "#333" }}>Posts</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {posts.map((post, index) => (
          <li
            key={`${post.id}-${index}`}
            style={{
              marginBottom: "20px",
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 style={{ color: "#0070f3", margin: "0 0 10px" }}>{post.title}</h2>
            <p style={{ margin: 0 }}>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

