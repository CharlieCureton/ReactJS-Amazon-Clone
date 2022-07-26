import React from 'react'
import './Header.css';
import Logo from './amazon_logo.webp';

function Header() {
  return (
    <div className='header'>
        <img src={Logo} className="header__logo" alt="Amazon Logo" />

        <div className="header__search">
          <input className="header__searchInput" type="text"/>
          {/* Logo */}
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
        </div>
    </div>
  )
}

export default Header