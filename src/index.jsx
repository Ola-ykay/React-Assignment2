import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App'
import ErrorBoundary from './Components/ErrorBoundary'

ReactDOM.createRoot(document.getElementById('root')).render(
	
    <ErrorBoundary>
      <React.StrictMode>
  <App />
     </React.StrictMode>
     </ErrorBoundary>
)