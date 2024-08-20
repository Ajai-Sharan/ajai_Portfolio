import "./NavBar.css"
import AjaiImage from '../images/BITSID_Ajai Sharan Velmurugan.jpg';
import {useNavigate} from "react-router-dom";

function NavBar(){
    return(
        <header>
         <div className="header_img">
          <img src={AjaiImage} alt="ajai.img" />
          <p> Ajai Sharan </p>
         </div>
        <nav className="navBar">
            <ul>
                <a href={"#home"}>
                    <li className="nav_item" id="nav_1">HOME
                    </li></a>

            <a href={"#about"}>
                    <li className="nav_item" id="nav_2">
                        ABOUT ME
                    </li>
                </a>
                <a href={"#skill"}>
                    <li className="nav_item" id="nav_3">SKILLS
                    </li>
                </a>
                <a href={"#education"}>
                    <li className="nav_item" id="nav_5">EDUCATION
                    </li>
                </a>
                <a href={"#contact"}>
                    <li className="nav_item" id="nav_8">CONTACT
                    </li></a>

        </ul>

        </nav>
        </header>

    );
}

export default NavBar