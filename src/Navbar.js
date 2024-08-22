import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg'
import { NavLink } from 'react-router-dom';

const header = () => {
    return (
        <nav className=" navbar navbar-expand intro_down">
            <div className="navigation container-fluid d-flex justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/projektai">Projektai</NavLink>
                    </li>
                    <NavLink className="navbar-brand custom-margin-logo" to="/">
                        <img className='logo' src={logo} />
                    </NavLink>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Kontaktai">Kontaktai</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default header;