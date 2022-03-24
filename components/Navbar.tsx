// Importacines externas / Own modules
import React from 'react';

// Importaciones Internas / Next modules
import styles from './Navbar.module.css';
import { ActiveLink } from './ActiveLink';

//
const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

// Modules
export const Navbar = () => {
    
  return (

        <nav className={ styles['menu-container'] }>
          {
            menuItems.map(({ text, href }) => (
              <ActiveLink key={ href } text={ text } href={ href } />
            ))
          }
        </nav>

        // <nav className={styles['menu-container']}>
        //     <ActiveLink text='Home' href="/" />
        //     <ActiveLink text='About' href="/about" />
        //     <ActiveLink text='Contact' href="/contact" />
        //     <ActiveLink text='Pricing' href="/pricing" />
        // </nav>
  )
}
