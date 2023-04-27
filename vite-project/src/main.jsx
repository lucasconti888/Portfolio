import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <div className="container" style={{ backgroundColor: '#091235',
    }}>
    <App />
    </div>
  </React.StrictMode>,
)
