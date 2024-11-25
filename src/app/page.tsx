import Link from "next/link"
export default function Home() {
  return (
    <div>
      <Link className="text-blue-600 border-b-2 border-solid border-2 border-indigo-600 rounded-sm " href="/fetch-posts">Fetch Posts</Link> 
    </div>
  );
}
