import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';
import Footer from './components/Footer';
import Checkout from './components/Checkout';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://atlas-content-cdn.pixelsquid.com/assets_v2/250/2506955487707141152/previews/G16-200x200.jpg',
      name: 'Puma Grey Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999
    },
    {
      url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
      name: 'LOREM Watch Black',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 2599
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
      name: 'AMZ Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 50000
    },
    {
      url: 'https://atlas-content-cdn.pixelsquid.com/assets_v2/289/2892459607647589487/previews/G03-200x200.jpg',
      name: 'Security Camera',
      category: 'CCTV',
      seller: 'Camron LTD',
      price: 4000
    },
    {
      url: 'https://atlas-content-cdn.pixelsquid.com/assets_v2/241/2414077986132202576/previews/G03-200x200.jpg',
      name: 'Smart Watch',
      category: 'Watches',
      seller: 'Watch Ltd',
      price: 2000
    },
    {
      url: 'https://atlas-content-cdn.pixelsquid.com/assets_v2/333/3335753251097155324/previews/G03-200x200.jpg',
      name: 'Cup Starbucks',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 100
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
        
       
      }
      <Footer/>


    </div>
  );
}

export default App;