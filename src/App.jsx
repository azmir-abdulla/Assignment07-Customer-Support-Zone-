import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cards from './components/Cards';
import Tickets from './components/Tickets';
import { Suspense } from 'react';

const tickets = fetch('./tickets.json').then(res => res.json());


function App() {


  return (
    <>
      <Navbar></Navbar>
      <Cards></Cards>


      <Suspense fallback={<div className='text-center mt-20 text-2xl'>Tickets Are Loading...</div>}>
        <Tickets tickets={tickets}></Tickets>        
      </Suspense>


      <Footer></Footer>
    </>
  )
}

export default App
