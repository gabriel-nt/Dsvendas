import logoImg from 'assets/img/ds_dark.svg';

const Navbar = () => (
  <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
    <div className="container">
      <nav className="my-2 my-md-0 mr-md-3">
        <img src={logoImg} alt="DevSuperior" width="120" />
      </nav>
    </div>
  </div>
);

export default Navbar;
