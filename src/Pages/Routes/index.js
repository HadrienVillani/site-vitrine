import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Header from '../Header';
import Galery from '../Galery';
import Contact from '../Contact';

function index() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Galery' element={<Galery />} />
        <Route path='/Contact' element={<Contact />} />
        <Route exact path='*' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default index;
