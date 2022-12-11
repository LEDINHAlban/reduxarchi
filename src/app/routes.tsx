import Dashboard from '../pages/Dashboard/Dashboard'
import Details from '../pages/Details/Details'
import { RouteObject } from 'react-router-dom'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/details',
    element: <Details />,
  },
]
