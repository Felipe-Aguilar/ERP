import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/index.scss'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from './context/Variables'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
