import {Link, Outlet} from 'react-router-dom';
import scbLogo from '../../assets/scb-logo.png';

import './NavBar.css';

const NavBar = () => {
    return(
        <div>
            <header className="header">
                <div className="headerContainer">
                    <Link to="/dashboard" className="headerLogo">
                        <img src={scbLogo} alt="SCB Logo" aria-label="SCB logo" height="80px" width="150px" />
                    </Link>
                </div>
            </header>
            <Outlet/>
        </div>
    );
};

export default NavBar;
