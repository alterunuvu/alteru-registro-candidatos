//import './navbar.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import Logo from '../Navbar/logo.2.png';
//import { Link } from 'react-router-dom';
//
//
//export default function Navbar (){
//    return <header className="header">
//           <span><Link to="/"><img src={Logo} alt="logo"  className="logo"/></Link></span>
//           <div className="links">
//           <span><Link to="/FormSignup" className="linkregister">Form Register</Link></span>
//           <span><Link to="/" className="linkhome"> Login</Link></span>
//           <span><Link to="/UserList" className="linkhome "> DataTable</Link></span>
//           </div>
//         </header>
//}

import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Sidebar} from '../Sidebar';
import './navbar.css';
import { IconContext } from 'react-icons';
import Logo from '../Navbar/logo.2.png';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      
      <IconContext.Provider value={{ color: '#fafafab2' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars className="iconscolor" onClick={showSidebar} />
          </Link>
          <span><Link to="/"><img src={Logo} alt="logo"  className="logo"/></Link></span>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {Sidebar.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
