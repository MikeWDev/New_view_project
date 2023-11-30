import Logo from "../assets/img/new-view-logo.png";
const NavBar = () => {
  return (
    <>
      <header>
        <nav>
          <div className="nav-item">
            <a href="#">Services</a>
          </div>
          <div className="nav-item">
            <a href="#">Location</a>
          </div>
          <div className="nav-item">
            <a href="#">Gallery</a>
          </div>
        </nav>
        <div className="nav-logo-box">
          <a href="">
            <img src={Logo} alt="Hairdresser logo" />
          </a>
        </div>
        <div className="nav-btn-con">
          <div className="btn-box book-btn">
            <button>Book now!</button>
          </div>
          <div className="btn-box contact-btn">
            <button>Contact me</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
