import { useState } from 'react'
import Navbar from './component/Navbar'
import './App.css'
import News from './page/News'
import Category from './component/Category' 
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar className={'sticky top-0 z-50'} />
      <Category className={'sticky top-14 z-20'} />
      <News className="pb-10 " />
      <Footer />
    </>
  )
}

export default App
