import { Home } from './pages/home';
import { createBrowserRouter } from 'react-router-dom';
import { routePaths } from './constants/paths';

export const routes = createBrowserRouter([
  {
    path: routePaths.Home,
    element: <Home />,
    children: [
      {
        path: routePaths.Home,
        element: <Home />,
      },
    ],
  },
]);
