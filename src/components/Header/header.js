// src/components/Header/header.js
import * as React from 'react';
import { Link } from 'gatsby';
import * as styles from './header.module.css';

const Header = () => {
 const navItems = [
   { path: '/', span: 'Home'},
   { path: '/#concept', span: 'Concept'},
   { path: '/#whisky', span: 'Whisky'},
   { path: '/#cocktail', span: 'Cocktail'},
   { path: '/#shop-info', span: 'Shop info'},
 ];

 return (
   <header className={styles.header}>
    <div className={styles.pc}>
     <p className={styles.logo}>The Last</p>
       <ul className={styles.nav}>
         {navItems.map((item, index) => (
           <li key={index}>
             <Link to={item.path}>
               <span>{item.span}</span>
             </Link>
           </li>
         ))}
       </ul>
     </div>


   </header>
 );
};

export default Header;