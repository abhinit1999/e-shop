// import { Menu } from '@material-ui/core';
import './App.css';
import Banner from './components/Home'
import Menu from './components/Menu';
import {menuItemsData} from './components/Menu/data';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    
    <Banner />

<Menu list={menuItemsData} />


<Footer />

    </div>
  );
}

export default App;
