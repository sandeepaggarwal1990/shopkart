import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import supabase from '../supabase'

function ProductDetail({ onAddToCart }) {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single()
      setProduct(data)
      setLoading(false)
    }
    fetchProduct()
  }, [id])

  if (loading) {
    return <p className="text-center mt-8">Loading...</p>
  }

  return (
    <div className="product-detail">
      <img src={product.image_url} alt={product.name} />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">₹{product.price}</p>
        <p className="description">{product.description}</p>
        <p>In stock: {product.stock}</p>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductDetail
