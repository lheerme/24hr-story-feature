import { createBrowserRouter } from 'react-router'
import { Home } from './pages/app/home'
import { Stories } from './pages/app/stories'
import { AppLayout } from './pages/layouts/app-layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/stories/:storyId', element: <Stories /> },
    ],
  },
])
