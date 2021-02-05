import { useRouter } from 'next/router'

const Product = () => {
  const { query: {id} } = useRouter()

  return (
    <section>
      <h1>Página producto: {id}</h1>
    </section>
  )
}

export default Product
