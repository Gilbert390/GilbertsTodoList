import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar(){
    return(
        <nav className="navigation">
            <a href="">LOGO</a>
            <ul>
                <li>
                    <a href="">Home<FontAwesomeIcon icon="fa-solid fa-house" /></a>
                </li>
                <li>
                    <a href="">Account<FontAwesomeIcon icon="fa-regular fa-user" /></a>
                </li>
                <li>
                    <a href="">Settings<FontAwesomeIcon icon="fa-solid fa-gear" /></a>
                </li>
            </ul>
        </nav>
    )

}
