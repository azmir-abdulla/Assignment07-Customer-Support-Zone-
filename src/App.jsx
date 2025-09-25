import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <div>
        <div className='rounded-lg h-7 bg-red-500 p-7 text-white'>
          <h1>0</h1>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
