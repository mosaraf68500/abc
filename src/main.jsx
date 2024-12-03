import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './components/Roots';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './AuthProvider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Roots></Roots>,
    children:[


      {
        path:"/",
        element:<Home></Home>
      },
      {

        path:"login",
        element:<Login></Login>
      },

      {
        path:"register",
        element:<Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>

  </StrictMode>,
)
