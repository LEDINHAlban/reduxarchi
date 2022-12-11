import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Dashboard</Link>
        </li>
        <li>
          <Link to='/details'>Details</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
