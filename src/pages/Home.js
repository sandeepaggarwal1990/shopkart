import { useState, useEffect } from 'react'
import supabase from '../supabase'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'

function Home({ onAddToCart }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await supabase.from('products').select('*')
      setProducts(data)
      setLoading(false)
    }
    fetchProducts()
  }, [])

  return (
    <div>
      <Hero />
      {loading ? (
        <p className="text-center mt-8">Loading products...</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image_url}
              onAddToCart={() => onAddToCart(product)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
