import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServiceList from './pages/ServiceList';
import ServiceDetail from './pages/ServiceDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;


/*<Router>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
  <Route path="/services" element={<ServiceList />} />
  <Route path="/services/:id" element={<ServiceDetail />} />
  <Route path="*" element={<NotFound />} />
</Routes>
<Footer />
</Router>*/