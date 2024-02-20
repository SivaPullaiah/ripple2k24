import { Link } from 'react-router-dom';
import './index.css';

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="https://www.rgmcet.edu.in/">
        <img
          className="ml-3"
          src="https://res.cloudinary.com/sivapullaiah/image/upload/v1707897768/-srtRx3af-K5_DgUBa4g7-transformed_p3ps4a.png"
          width="60"
          height="60"
          alt="Logo"
          loading="lazy"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <div className="d-flex flex-row">
            <div className="nav-item">
              <Link to="/" className="navigation-links">
                Home
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/about" className="navigation-links">
                About
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/contact" className="navigation-links">
                Contact
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/registration" className="navigation-links">
                Register Now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
