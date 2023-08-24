import "./socialLinks.module.css";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";

const SocialLinks = ({icon, href}) => {
    return(
        <a className="ionIcon" href={href} target="_blank">
            <ion-icon name={icon}/>
        </a>
    )
}

export default SocialLinks;