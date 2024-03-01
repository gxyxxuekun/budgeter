import Button from '@mui/material/Button'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Product } from '../../types'
import ProductCard from '../../components/TransactionCard'
import styled from 'styled-components'

const ListComponent = styled('div')`
  margin: 0 auto;
  padding-top: 20px;
`

function Products() {
  const [products, setProducts] = useState<Product[]>([])
  // since this fetch occurs on page load, i will wrap in a useEffect
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err))
  }, [])

  console.log(products)

  return (
    <>
      <h1>Dashboard Page!</h1>
      <NavLink to="/new-product">
        <Button color="secondary" variant="outlined">
          Create a new product!
        </Button>
      </NavLink>
      {/* List of products! */}
      <ListComponent>
        {products.map((product) => (
          <ProductCard
            productName={product.title}
            description={product.description}
            id={product._id}
          />
        ))}
      </ListComponent>
    </>
  )
}

export default Products
