function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mx-auto p-2">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://www.tyreplex.com/tyre-dealers-in-india/shree-hemkunt-tyres-and-services">
                    <img
                        className="d-block w-100"
                        src="/image/TP-logo.png"
                        alt="First slide"
                        width={25} height={20} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Car Tyres</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Bike Tyres</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Tyre Pressure</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Commercial Tyres</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                More
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">CashBack Offer</a></li>
                                <li><a className="dropdown-item" href="#">Find Tyre Dealers</a></li>
                                <li><a className="dropdown-item" href="#">Compare Tyres</a></li>
                                <li><a className="dropdown-item" href="#">Wheel Alignment</a></li>
                                <li><a className="dropdown-item" href="#">Wheel balancing</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Are you a Tyre Dealer</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search tyres for you " aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                        <div className="navbar-brand "><a href="https://www.tyreplex.com/login" ><i class="fa-sharp fa-solid fa-user"></i> Login</a></div>
                    </form>
                </div>
            </div>
        </nav>)
}

export default Navbar