import {pageLinks} from "../data";
import PageLink from "./PageLink";

function PageLinks(props){
    return <ul className={props.parentClass} id="nav-links">
        {pageLinks.map(link =>
            <PageLink key={link.id} href={link.href} itemClass={props.itemClass} text={link.text} />
        )}
    </ul>
}

export default PageLinks;