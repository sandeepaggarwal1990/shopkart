function Cart({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p className="price">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
            <button>Checkout</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
