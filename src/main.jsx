import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import ErrorPage from './routes/error-page'
import LanPage from './routes/landing-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LanPage />,
    errorElement: <ErrorPage />

  },
//  {
//    path: '/login',
//    element: <LoginPage />,
//  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
