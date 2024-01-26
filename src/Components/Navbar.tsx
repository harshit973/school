import React from "react";

function Navbar({
    className,
    style
}) {
  return (
    <nav style={style} className={className}>
      <div className="container-fluid">
        <a style={{color:'white',fontSize:40,textShadow:'0 2px 2px rgba(0,0,0,.25)'}} className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div style={{fontSize:40,textShadow:'0 2px 2px rgba(0,0,0,.25)'}} className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a style={{color:'white'}} className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a style={{color:'white'}} className="nav-link" href="#">
              Features
            </a>
            <a style={{color:'white'}} className="nav-link" href="#">
              Pricing
            </a>
            <a style={{color:'white'}} className="nav-link disabled" aria-disabled="true">
              Disabled
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
