import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => (
  <div className="navbar-inner header">
    <span className="glyphicon glyphicon-menu-hamburger header-icon" />
    <span className="btn-group" role="group" >
      <Link className="link header-link home" to="/" >
        <button type="button" className="btn btn-default">Home</button>
      </Link>
      <Link className="link header-link results" to="/results">
        <button type="button" className="btn btn-default">Results</button>
      </Link>
      <Link className="link header-link results" to="/" onClick={props.handleLogout} >
        Logout
      </Link>
    </span>

    <span className="user-info">
      <img
        className="img-circle user-photo"
        src={props.user ? props.user.picture : ''}
        alt={props.user ? props.user.name : '' }
      />
      <span className="pull-right">
        {props.user ? props.user.name : ''}
      </span>
    </span>
  </div>
);

export default Header;

// <img
//   className="img-circle user-photo"
//   src={props.user ? props.user.picture : ''}
//  alt={props.user ? props.user.name : '' }
///>

//<button type="button" className="btn btn-default btn-lg">
  // <span className="glyphicon glyphicon-star" aria-hidden="true"></span> Star
// </button>
