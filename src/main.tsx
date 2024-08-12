import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './views/Homepage.tsx';
import About from './views/about.tsx';
import FormPages from './Pages/Formpage.tsx';

const router = createBrowserRouter([
  {
    path:"/Form",
    element:<FormPages/>
  }
  ,
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/",
    element: <HomePage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
