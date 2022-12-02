import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Register from './pages/Register';

function App() {
  const router = createBrowserRouter([
    {
      path: '/registration',
      element: <Register />,
    },
    {
      path: '/',
      element: <Main />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
