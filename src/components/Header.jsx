import React from 'react'
import '../css/Header.css';
import Logo from '../assets/amazon_logo.webp';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
        <Link to="/">
          <div className="headerLogo__wrapper">
            <img src={Logo} className="header__logo" alt="Amazon Logo" />
          </div>
        </Link>

        <div className="header__search">
          <input className="header__searchInput" type="text" placeholder="Search for a product..."/>
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
            <div className="header__option">
              <span className="header__optionLineOne">
                Hello Guest
              </span>
              <span className="header__optionLineTwo">
                Sign In
              </span>
            </div>

            <div className="header__option">
              <span className="header__optionLineOne">
                Returns
              </span>
              <span className="header__optionLineTwo">
                &amp; Orders
              </span>
            </div>

            <div className="header__option">
              <span className="header__optionLineOne">
                <span className="header__optionLineOne">
                 Your
                </span>
                <span className="header__optionLineTwo">
                  Prime
                </span>
              </span>
            </div>

            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">0</span>
            </div>
        </div>
    </div>
  )
}

export default Header