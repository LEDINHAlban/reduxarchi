import './App.css'

import Header from './components/Layout/Header/Header'
import { routes } from './app/routes'
import { useRoutes } from 'react-router-dom'

function App() {
  const element = useRoutes(routes)
  return (
    <>
      <Header />
      {element}
    </>
  )
}

export default App
