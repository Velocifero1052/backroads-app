function SocialLink(props){
    return (
        <li>
            <a href={props.href} target={'_blank'} rel="noreferrer" className={props.className}>
                <i className={props.icon}></i>
            </a>
        </li>
    );
}
export default SocialLink;