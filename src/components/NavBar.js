import "./NavBar.css"
import AjaiImage from '../images/BITSID_Ajai Sharan Velmurugan.jpg';

function NavBar(){
    return(
        <header>
         <div className="header_img">
          <img src={AjaiImage} alt="ajai.img" />
          <p> Ajai Sharan </p>
         </div>
        <nav className="navBar">
            <ul>
                <li className="nav_item" id="nav_1"><a>HOME</a></li>
                <li className="nav_item" id="nav_2"><a>ABOUT ME</a></li>
                <li className="nav_item" id="nav_3"><a>SKILLS</a></li>
                <li className="nav_item" id="nav_4"><a>EXPERIENCE</a></li>
                <li className="nav_item" id="nav_5"><a>EDUCATION</a></li>
                <li className="nav_item" id="nav_6"><a>PORTFOLIO</a></li>
                <li className="nav_item" id="nav_7"><a>BLOG</a></li>
                <li className="nav_item" id="nav_8"><a>CONTACT</a></li>
            </ul>
        </nav>
        </header>
        
    );
}

export default NavBar