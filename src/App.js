import logo from './logo.svg';
import './App.css';
import ProductSearch from './components/ProductSearch';
import ProductDetails from './components/ProductDetails';
import ProductDisplay from './components/ProductDisplay';

function App() {
  return (
    <div>
      <ProductSearch/>
      <ProductDetails/>
      <ProductDisplay/>
    </div>
  )
}

export default App;
