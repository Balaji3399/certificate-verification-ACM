import React from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom' ;

import Home from './pages/home' ;
import Certificate from './pages/certificate';
import About from './pages/about' ;
import Contact from './pages/contact' ;


export default function App() {
  return (

    <>
      <div>
        <Router>
          <Routes>
            <Route path='/home' element={ <Home /> } />
            <Route path='/' element={ <Home /> } />
            <Route path='/certificate' element={ <Certificate /> } />
            <Route path='/about' element = { <About /> } />
            <Route path='/contact' element = { <Contact /> } />
          </Routes>
        </Router>
      </div>
    </>
  );
}
