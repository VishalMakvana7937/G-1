import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Heading from './component/Heading/Heading'
import List from './List'
import Classcoll from './component/Heading/classcoll/Classcol'
import Test from './component/Heading/Test/Test'
import './App.css'

function App() {
  const Lists = ['tv','mobile','watch','irpord'] 
  return (
    <div>
      <Heading/>
      <List menu={Lists} name='vishal makavana'/>
      <Test/>
    </div>
  )
}

export default App
