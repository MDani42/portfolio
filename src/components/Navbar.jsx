import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const pages = [
  { path: '/', name: 'Kezdőlap' },
  { path: '/projekteim', name: 'Projekteim' },
  { path: '/rolam', name: 'Rólam' },
  { path: '/elerhetosegek', name: 'Elérhetőségek' },
  
];

export const Navbar = () => {
  return (
    <nav className='nav'>
      <Link to="/" className='site-name'>Portfolio</Link>
      <ul>
        {pages.map((page, index) => (
          <li key={index}>
            <Link className='oldalak' to={page.path}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
