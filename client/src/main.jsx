import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import RegisterAs from './pages/RegisterAs';
import AssociateForm from './pages/AssociateForm';
import StandardForm from './pages/StandardForm';
import Error from './pages/Error';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    children: [
      {
        path: '/register/select',
        element: <RegisterAs />,
      },
      {
        path: '/register/associate',
        element: <AssociateForm />,
      },
      {
        path: '/register/standard',
        element: <StandardForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
