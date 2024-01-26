import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './routes/error-page';
import { ChakraProvider } from '@chakra-ui/react';
import Homepage from './routes/homepage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
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
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>,
)
