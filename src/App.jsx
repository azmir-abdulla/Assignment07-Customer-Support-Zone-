import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cards from './components/Cards';
import Main from './components/Main'


import { Suspense } from 'react';





function App() {
  const tickets = fetch('./tickets.json').then(res => res.json());
  
  return (
    <>
      <Navbar></Navbar>
      
    
      <Suspense fallback={<div className='text-center mt-20 text-2xl'>Tickets Are Loading...</div>}>
        <Main tickets={tickets} ></Main>
      </Suspense>


      <Footer></Footer>
    </>
  )
}

export default App;
