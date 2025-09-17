import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import About from './pages/about.jsx'
import NotFound from './pages/NotFound.jsx'
import History from './pages/History.jsx'

const router = createBrowserRouter([
  {path:"/",element:<App/>},
  {path:"/about",element:<About/>,children:[{path:"history/:id",element:<History/>}]},
  {path:"*",element:<NotFound/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
