import React from 'react';
import "../style/Header.css"
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import { useGlobalContext } from '../StateProvider';

function Header() {
  const { user, image } = useGlobalContext()

  return (
    <div className='header'>
      <div className="header__left">
        <Avatar
        className='header__avatar'
        alt ={user}
        src={image}
        />
        <AccessTimeIcon/>
      </div>
      
      <div className="header__search">
        <SearchIcon/>
        <input 
        type="text" 
        placeholder='Calingapatnam'/>
      </div>

      <div className="header__right">
        <HelpOutlineIcon/>
      </div>
    </div>
  )
}

export default Header