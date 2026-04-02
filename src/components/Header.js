import { Link } from 'react-router-dom'
import supabase from '../supabase'

function Header({ cartCount, user }) {
  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <header>
      <h1>Shopkart</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
        {user ? (
          <>
            <Link to="/orders">My Orders</Link>
            <button onClick={handleLogout} className="nav-btn">Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  )
}

export default Header
