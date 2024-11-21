import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Heading from './component/Heading/Heading'
import List from './component/List/List'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  var lists = ['leptop','mobile','tv','Washing machine']
  return (
    <div>
      <Heading/>
      <List menu={lists} name="vishal makavana"/>
    </div>
  )
}

export default App
