import Header from './components/header/Header';
import Promo from './components/promo/Promo';
import Brands from './components/brands/Brands';
import Arrivals from './components/arrivals/Arrivals';
import Sale from './components/sale/Sale'
import Favourite from './components/favourite/Favourite'

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Sale />
      <Favourite />
    </div>
  );
}

export default App;
