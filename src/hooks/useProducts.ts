import { getDatabase, ref, update } from "firebase/database"
import { allProductsPath, getNewKey, Product, productPath } from "../helpers"
import { useFirebase } from "./useFirebase"

export const useProducts = () => {
  const { model: products } = useFirebase<Array<Product>>({
    path: allProductsPath(),
  })
  
  const createNewProduct = async ({ name }: { name: string }) => {
    const newProductId = getNewKey(allProductsPath())
    update(ref(getDatabase(), productPath({ id: newProductId })), { id: newProductId, name })
  }

  return {
    createNewProduct,
    products: Object.values(products || {})
  }
}