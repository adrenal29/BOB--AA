import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'
import logo from '../images/BOB.png'
function Navbar() {
  return (
    <div>
        <Link to="/"><img src={logo} className='logo'></img></Link>
        <ul className='nav'>
            <li><Link to="/dashboard/analytics"><h3>Analytics</h3></Link> </li>
            <li><Link to="/dashboard/budget"><h3>Budget Tracker</h3></Link> </li>
            <li><Link to="/dashboard/analytics"><h3>Instant Loan</h3></Link> </li>
            <li><Link to="/dashboard/statement"><h3>Bank Statement Analyzer</h3></Link> </li>
            <li><Link to="/dashboard/tax"><h3>Tax Filing</h3></Link> </li>
        </ul>
       
    </div>
  )
}

export default Navbar