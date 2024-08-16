import { child, getDatabase, push, ref } from 'firebase/database';

export const getNewKey = (path?: string) =>
  push(child(ref(getDatabase()), path || '/')).key!;


export const allProductsPath = () => `/products`
export const productPath = ({ id }: { id: string }) => `/products/${id}`
export const allShortcutsPath = () => `/shortcuts`

export type Product = {
  name: string,
  id: string
}
