import React, { useEffect, useState } from 'react';
import client from '../sanityClient';
import { urlFor } from '../imageUrlBuilder';
import '../App.css';

const Navbar = () => {
  const [navbar, setNavbar] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "navbar"][0]`)
      .then((data) => setNavbar(data))
      .catch(console.error);
  }, []);

  if (!navbar) return null;

  return (
    <nav className="navbar">
      {navbar.logo && (
        <img
          src={urlFor(navbar.logo).width(100).url()}
          alt="Logo"
          className="navbar-logo"
        />
      )}
      <ul className="navbar-links">
        {navbar.links?.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
