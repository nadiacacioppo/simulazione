import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './routes/error-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Homepage</div>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "homepage/listmovies",
      },
      {
        path: "homepage/listmovies/details",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
