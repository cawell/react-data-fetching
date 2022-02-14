import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './services/queryClient'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
