import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-list">
      <img
        src="https://media.licdn.com/dms/image/C5112AQHKDG-dPKbkvA/article-cover_image-shrink_720_1280/0/1548996596472?e=2147483647&v=beta&t=ecDsmyC3TQZ66TucBImUfMud-t2bk2veeJlJrvbOARk"
        className="logo-img"
      />
      <div className="header-list-1">
        <Link to="/" className="style-link">
          Home
        </Link>

        <Link to="/about" className="style-link">
          About
        </Link>

        <Link to="/skills" className="style-link">
          Skills
        </Link>

        <Link to="/contact" className="style-link">
          Contact
        </Link>

        <Link to="/projects" className="style-link">
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Header;
