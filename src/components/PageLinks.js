import {pageLinks} from "../data";

function PageLinks(props){
    return <ul className={props.parentClass} id="nav-links">
        {pageLinks.map(link => <li key={link.id}>
            <a href={link.href} className={props.itemClass}>{link.text}</a>
        </li>)}
    </ul>
}

export default PageLinks;