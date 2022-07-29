import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const { t } = useTranslation();

    return (
        <nav className="navbar">
            <div>
                <Link to="/" className="btn-primary">{t("home")}</Link>
                <Link to="/CreatePost" className="btn-primary">{t("post")}</Link>
                <Link to="/About" className="btn-primary">{t("information")}</Link>
            </div>
        </nav>
        
    );
}

export default Navbar;