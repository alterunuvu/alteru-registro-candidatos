import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import Logo from './Navbar/logo.2.png';
import { Link } from 'react-router-dom';

export const Sidebar = [
  {
    title: '',
    path: '/Admin',
    icon: <Link to="/"><img src={Logo} alt="logo"  className="logoAlteru"/></Link>,
    cName: 'nav-text'
  },
 {
    title: 'Dashboard',
    path: '/Leads',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Signup',
    path: '/Signup',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'FormSignup',
    path: '/FormSignup',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
  {
    title: 'UserList',
    path: '/Leads',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'UserView',
    path: '/UserView',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  
];