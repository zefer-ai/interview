import { useProducts } from '../hooks/useProducts'
import { Outlet, useNavigate } from 'react-router-dom'
import { Product, productPath } from '../helpers'

export const Homepage = () => {
  const { products, createNewProduct } = useProducts()
  const nav = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          nav('/')
        }}
      >
        Go home
      </button>
      {
        (products as Product[]).map((product: Product) => (
          <div key={product.id}>
            <button
              onClick={() => nav(productPath({ id: product.id }))}
            >
              View product
            </button>
            {product.name}
          </div>
        ))
      }
      <button
        onClick={() => {
          createNewProduct({ name: `product_${Date.now()}` })
        }}
      >
        create product
      </button>
      <div>----------</div>
      <Outlet />
    </div>
  )
}