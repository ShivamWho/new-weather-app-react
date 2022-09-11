import React from 'react'
import '../css/Header.css'

function Header() {
  return (
    <ul className="navbar">
        <li className="nav-item">
          Weather
          <div class="ping"></div>
        </li>
        <li className="nav-item">Alert</li>
        <li className="nav-item">Map</li>
        <li className="nav-item">Satelite</li>
        <li className="nav-item">News</li>
    </ul>
  )
}

export default Header