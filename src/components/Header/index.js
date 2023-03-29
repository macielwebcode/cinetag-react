import styles from './Header.module.css';
import { Link } from "react-router-dom";
import logo from './logo.png';
import HeaderLink from 'components/HeaderLink';

function Header(){
    return(
        <header className={styles.header}>
            <Link to="./">
                <img src={logo} alt="logo site" />
            </Link>
            <nav>
                <HeaderLink url="./">
                    Home
                </HeaderLink>

                <HeaderLink url="./Favoritos">
                    Favoritos
                </HeaderLink>
            </nav>
        </header>
    )
}

export default Header;