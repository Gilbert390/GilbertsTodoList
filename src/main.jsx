import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  Navbar  from "./navbar"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Navbar/>
  </React.StrictMode>,
)
