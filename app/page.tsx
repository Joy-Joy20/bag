import Link from "next/link";

export default function Home() {
  return (
    <div className="home-wrapper">

      {/* Welcome Section */}
      <div className="home-container">
        <h1>Welcome to Bag Shop</h1>
        <p>Discover our classic collection of bags!</p>
        <Link href="/bags">
          <button className="btn">Go to Bags 🛍️</button>
        </Link>
      </div>

      {/* Products Section */}
      <h2 className="section-title">Featured Bags</h2>

      <div className="products">

        <div className="product-card">
          <img src="https://via.placeholder.com/200" />
          <h3>Classic Tote Bag</h3>
          <p>₱599</p>
        </div>

        <div className="product-card">
          <img src="https://via.placeholder.com/200" />
          <h3>Travel Backpack</h3>
          <p>₱899</p>
        </div>

        <div className="product-card">
          <img src="https://via.placeholder.com/200" />
          <h3>Mini Sling Bag</h3>
          <p>₱499</p>
        </div>

      </div>

    </div>
  );
}