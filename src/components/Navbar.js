import logo from '../images/logo.svg';
import {socialLinks} from '../data';
import PageLinks from '../components/PageLinks';
import SocialLink from "./SocialLink";

function Navbar(){
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="backroads"/>
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <PageLinks parentClass={'nav-links'} itemClass={'nav-link'} />
                <ul className="nav-icons">
                    {socialLinks.map((link) => {
                        const {id, href, icon} = link;
                        return (
                            <SocialLink key={id} className={'nav-icon'} href={href} icon={icon}/>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;