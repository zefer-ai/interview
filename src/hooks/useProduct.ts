import { getDatabase, ref, update } from "firebase/database"
import { allProductsPath, getNewKey, Product, productPath } from "../helpers"
import { useFirebase } from "./useFirebase"

export const useProduct = ({ productId }: { productId?: string } = {}) => {
  const { model } = useFirebase<Product>({
    path: productPath({ id: productId! }),
    skip: !productId
  })
  
  const createNewProduct = async ({ name }: { name: string }) => {
    const newProductId = getNewKey(allProductsPath())
    update(ref(getDatabase(), productPath({ id: newProductId })), { id: newProductId, name })
  }

  return {
    createNewProduct,
    product: model
  }
}