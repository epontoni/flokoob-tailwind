import 'remixicon/fonts/remixicon.css'
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Clasifications from './pages/Clasifications';
import PageNotFound from './pages/PageNotFound';
import EventDetails from './pages/EventDetails';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route exact path='/events' element={<Events />}></Route>
        <Route path='/events/:id' element={<EventDetails />}></Route>
        <Route path='/clasifications' element={<Clasifications />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;