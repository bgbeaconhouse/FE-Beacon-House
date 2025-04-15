import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

const [products, setProducts] = useState(null)
const [error, setError] = useState(null);


useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3000/api/products")
      const result = await response.json();
      console.log(result)
     setProducts(result)
    } catch (error) {
      setError(error)
    }
  }
  fetchData();
}, []);

  return (
    <>
      <div>
        
        <h1>Products</h1>
        <ul>
        {products && products.map(product => (
          <li key={product.id}>Name: {product.name}, Price: {product.price} </li>
        ))}
        </ul>
        </div>
    
     
    </>
  )
}

export default App
