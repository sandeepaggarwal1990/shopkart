import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import supabase from '../supabase'

function Cart({ cartItems, user, onClearCart }) {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  const handleCheckout = async () => {
    if (!user) {
      navigate('/login')
      return
    }

    setLoading(true)

    // Step 1: Create the order
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({ user_id: user.id, total: total, status: 'pending' })
      .select()
      .single()

    if (orderError) {
      alert('Something went wrong. Please try again.')
      setLoading(false)
      return
    }

    // Step 2: Add each cart item to order_items
    const orderItems = cartItems.map((item) => ({
      order_id: order.id,
      product_id: item.id,
      qty: 1,
      price: item.price,
    }))

    await supabase.from('order_items').insert(orderItems)

    // Step 3: Clear cart and go to orders page
    onClearCart()
    setLoading(false)
    navigate('/orders')
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image_url} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p className="price">₹{item.price}</p>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ₹{total.toFixed(2)}</h3>
            <button onClick={handleCheckout} disabled={loading}>
              {loading ? 'Placing Order...' : 'Checkout'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
