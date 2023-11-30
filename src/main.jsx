import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './combineReducer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode  store={store}>
   <Provider>
   <App />
   </Provider>  
  </React.StrictMode>,
)
