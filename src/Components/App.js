import Banner from './Banner';
//import Cart from './Cart';
import ShoppingList from './ShoppingList';
import logo from '../assets/flower.png'


function App() {
  return (
    <div>
      <Banner>
				<img src={logo} alt='flower-store' className='fs-logo' />
				<h1 className='fs-title'>Flower Store</h1>
			</Banner>
      {/* <Cart /> */}
      <ShoppingList/>
    </div>
  )
}

export default App;
