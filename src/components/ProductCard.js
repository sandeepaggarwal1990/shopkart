import { Link } from 'react-router-dom'

function ProductCard({ id, name, price, image, onAddToCart }) {
  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </Link>
      <p className="price">${price.toFixed(2)}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  )
}

export default ProductCard
