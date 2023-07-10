import React from 'react';

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#" id="fb">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <button id="search_btn" className="tooltip" data-tooltip="Search">
              <i className="fas fa-search"></i>
            </button>
          </li>

          <li id="space2"></li>

          <li>
            <a className="tooltip active" data-tooltip="Home" href="#" id="home">
              <i className="fas fa-home"></i>
            </a>
          </li>
          <li>
            <a className="tooltip" data-tooltip="Group" href="#" id="group">
              <i className="fas fa-user-friends"></i>
            </a>
          </li>
          <li>
            <a className="tooltip" data-tooltip="Watch" href="#" id="tv">
              <i className="fas fa-tv"></i>
            </a>
          </li>
          <li>
            <a className="tooltip" data-tooltip="Friend" href="#" id="friend">
              <i className="fas fa-user-alt"></i>
            </a>
          </li>
          <li id="space1"></li>
          <li>
            <button className="tooltip" data-tooltip="Add" id="btn_plus">
              <i className="fas fa-plus"></i>
            </button>
          </li>
          <li>
            <button className="tooltip" data-tooltip="Message" id="btn_msg">
              <i className="fab fa-facebook-messenger"></i>
            </button>
          </li>
          <li>
            <button className="tooltip" data-tooltip="Notification" id="btn_bell">
              <i className="fas fa-bell"></i>
            </button>
          </li>
          <li>
            <button className="tooltip" data-tooltip="Profile" id="btn_profile">
              <i className="fas fa-user-cog"></i>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;