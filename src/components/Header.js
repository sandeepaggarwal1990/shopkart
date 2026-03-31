import { Link } from 'react-router-dom'

function Header({ cartCount }) {
  return (
    <header>
      <h1>Shopkart</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>
    </header>
  )
}

export default Header
