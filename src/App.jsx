import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Home from './pages/Home';
import Ourwork from './pages/Ourwork';
import Services from './pages/Services';

const App = () => {
  return (
    <div className='app md:px-36 md:mt-7 p-3'>
      <BrowserRouter>
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/work' element={<Ourwork/>} />
         <Route path='/service' element={<Services/>} />
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
