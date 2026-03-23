export default function Bags() {
  return (
    <div className="container">
      <div className="card">

        <div className="title">🛍️ Bag Details</div>
        <div className="subtitle">Classic Collection</div>
        <div className="divider" />

        <div className="input-group">
          <label>Bag Name</label>
          <input type="text" defaultValue="Classic Tote Bag" />
        </div>

        <div className="input-group">
          <label>Price</label>
          <input type="text" defaultValue="₱599" />
        </div>

        <div className="input-group">
          <label>Color</label>
          <input type="text" defaultValue="Beige" />
        </div>

        <div className="input-group">
          <label>Size</label>
          <input type="text" defaultValue="Medium" />
        </div>

        <button className="btn">🛒 Buy Bag</button>

      </div>
    </div>
  );
}
