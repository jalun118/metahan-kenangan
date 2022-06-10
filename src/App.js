import './App.css';
import { Route, Routes, useLocation } from 'react-router';
import { AnimatePresence } from "framer-motion"
import * as React from 'react';
import Loading from './components/Loading';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
const Navbar = React.lazy(() => import('./components/Navbar'));
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Memory = React.lazy(() => import('./components/Memory'));
const Document = React.lazy(() => import('./components/Document'));

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      <React.Suspense fallback={<Loading />}>
        <div className='content'>
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route path='' element={<Home />} />
              <Route path='document' element={<Document />} />
              <Route path='about' element={<About />} />
              <Route path='memory' element={<Memory />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </div>
      </React.Suspense>
      <Footer />
    </div >
  );
}

export default App;
