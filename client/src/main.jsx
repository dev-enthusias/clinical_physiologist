import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import RegisterAs from './pages/Forms/RegisterAs';
import AssociateForm, {
  action as asssoicateAction,
} from './pages/Forms/AssociateForm';
import StandardForm from './pages/Forms/StandardForm';
import ConferenceForm from './pages/Forms/ConferenceForm';
import About from './pages/About';
import Error from './pages/Error';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/conference',
    element: <ConferenceForm />,
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
        action: asssoicateAction,
      },
      {
        path: '/register/standard',
        element: <StandardForm />,
      },
    ],
  },
  {
    path: '/about',
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
