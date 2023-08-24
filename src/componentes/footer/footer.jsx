import SocialLinks from "../sociallinks/socialLinks";
import "./footer.module.css";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";

const Footer = ({ children, link }) => {
  return (
    <footer>
      <p>
        Feito com <ion-icon name="heart" /> por{" "}
        <a href={link} target="_blank">
          {children}
        </a>
        <SocialLinks icon={"logo-github"} href={"#"} />
      </p>
    </footer>
  );
};

export default Footer;
