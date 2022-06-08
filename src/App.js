import './App.css';
// import Header from './components/Home'
import Menu from './components/Menu';
import {menuItemsData} from './components/Menu/data';
import Footer from './components/Footer';
import Header from './components/Header';
import Banner from './components/Home';
function App() {
  return (
    <div>
    
    <Header />
    <Banner/>

<Menu list={menuItemsData} />


<Footer />

    </div>
  );
}

export default App;
