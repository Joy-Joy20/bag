import Link from "next/link";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Bag Shop</h1>
      <p>Discover our classic collection of bags!</p>
      <Link href="/bags">
        <button className="btn">Go to Bags 🛍️</button>
      </Link>
    </div>
  );
}