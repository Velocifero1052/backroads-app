import {socialLinks} from "../data";
import PageLinks from "../components/PageLinks";
import SocialLink from "./SocialLink";

function Footer(){
    return(
        <footer className="section footer">
            <PageLinks parentClass={'footer-links'} itemClass={'footer-link'} />

            <ul className="footer-icons">
                {socialLinks.map((link) => {
                    const {id, href, icon} = link;
                    return (
                        <SocialLink key={id} className={'footer-icon'} href={href} icon={icon}/>
                    );
                })}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{new Date().getFullYear()}</span> all rights reserved
            </p>
        </footer>
    );
}
export default Footer;