import { useState, useEffect } from 'react'
import supabase from '../supabase'

function Orders({ user }) {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      setLoading(false)
      return
    }

    const fetchOrders = async () => {
      const { data } = await supabase
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false })

      setOrders(data || [])
      setLoading(false)
    }
    fetchOrders()
  }, [user])

  if (!user) {
    return (
      <div className="orders-page">
        <h2>My Orders</h2>
        <p>Please login to see your orders.</p>
      </div>
    )
  }

  if (loading) {
    return <p className="text-center mt-8">Loading orders...</p>
  }

  return (
    <div className="orders-page">
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>You haven't placed any orders yet.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <h3>Order #{order.id}</h3>
              <span className="order-status">{order.status}</span>
            </div>
            <p>Total: ₹{Number(order.total).toFixed(2)}</p>
            <p className="order-date">
              {new Date(order.created_at).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </p>
          </div>
        ))
      )}
    </div>
  )
}

export default Orders
