import {useEffect, useState} from 'react';
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
  const [productList, setProductList] = useState([])
  
  useEffect(() => {
    window.fetch('/api/avo')
      .then(response => response.json())
      .then(({ data }) => {
        setProductList(data)
      })
  }, [])

  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>
      {productList.map((product) => ( 
        <p>{product.name}</p>
      ))}
    </div>
  )
}

export default Home;
