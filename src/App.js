import './App.css';
import { Route, Routes, useLocation } from 'react-router';
import { AnimatePresence } from "framer-motion"
import { useEffect } from 'react';
import * as React from 'react';
import Loading from './components/Loading';
import NotFound from './components/NotFound';
const Navbar = React.lazy(() => import('./components/Navbar'));
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Memory = React.lazy(() => import('./components/Memory'));
const Document = React.lazy(() => import('./components/Document'));

function App() {

  const location = useLocation();

  useEffect(() => {

    // window.onscroll = function () {
    //   scrollCe()
    // };

    // function scrollCe() {
    //   console.log(document.documentElement.scrollTop)
    // }

    // let winscrol = document.documentElement.scrollTop;
    // const height1 = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // const height = document.documentElement.clientHeight;
    // const sheight = document.documentElement.scrollHeight;

    // window.addEventListener("scroll", (e) => {
    //   console.log(document.documentElement.scrollTop);
    // });

    // const scroller = document.querySelector(".App");

    // scroller.addEventListener("scroll", (e) => {
    //   console.log(scroller);
    // });


  }, [])

  return (
    <div className="App">
      <Navbar />
      {/* <h1>Halaman</h1> */}
      <React.Suspense fallback={<Loading />}>
        <div className='content'>
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route path='' element={<Home />} />
              <Route path='document' element={<Document />} />
              <Route path='memory' element={<Memory />} />
              <Route path='about' element={<About />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </div>
      </React.Suspense>
    </div >
  );
}

export default App;
