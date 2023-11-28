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
          <img src="" alt="" />
        </div>
        <div className="nav-btn-con">
          <button className="book-btn">Book now!</button>
          <button className="contact-btn">Contact me</button>
        </div>
      </header>
    </>
  );
};

export default NavBar;
