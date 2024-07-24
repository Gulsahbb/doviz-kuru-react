import { useState } from 'react'
import './App.css'
import Currency from './components/Currency'

function App() {


  return (
    // Bizim ekranda fotoğraf koyduğumuz alan currency içerisinde.Biz burada bu currency yi div içine yazdığımız için burada da genel kısmı değiştirebilmek için div içerisine style kodu yazdık.
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Currency />
    </div>
  )
}

export default App
