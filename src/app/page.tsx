import Hero from "@/components/Layout/Hero";
import Product from "@/components/Product";
import { ProductType } from "@/interface";

const getProducts = async () => {
  let res = await fetch('https://fakestoreapi.com/products', { cache: "force-cache" })
  const data = await res.json()
  return data

}

export default async function Home() {
  const data = await getProducts()
  return (
    <main className="container">
      <Hero />
      <div className="grid grid-cols-4 gap-4">
        {
          data.map((item: ProductType) => {
            return (<div key={item.id}>
              <Product productDetail={item} />
            </div>)
          })
        }
      </div>
    </main>
  )
}
