import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './assets/components/Header'
import CalculadoraIMC from './assets/components/Form'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <CalculadoraIMC />
  </React.StrictMode>,
)
