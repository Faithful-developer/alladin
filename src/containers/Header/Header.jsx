import './Header.scss'
import {Link} from "react-router-dom";
import bellIcon from '../../assets/images/icons/bell.svg'
import searchIcon from '../../assets/images/icons/search.svg'
import avaIcon from '../../assets/images/avatar.png'

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <Link to='/'>
                        Logo
                    </Link>
                    <ul className="header-linkers">
                        <li>
                            <Link to='/new'>
                                Новинки
                            </Link>
                        </li>
                        <li>
                            <Link to='/catalog'>
                                Каталог
                            </Link>
                        </li>
                        <li>
                            <Link to='/bestselller'>
                                Подборки
                            </Link>
                        </li>
                        <li>
                            <Link to='/plans'>
                                Подписки
                            </Link>
                        </li>
                        <li>
                            <Link to='/my-films'>
                                Мои фильмы
                            </Link>
                        </li>
                        <li>
                            <Link to='/child'>
                                Дети
                            </Link>
                        </li>
                    </ul>
                    <ul className="header-extra">
                        <li>
                            <Link to='/notification'>
                                <img src={bellIcon} alt=""/>
                            </Link>
                        </li>
                        <li>
                            <Link to='/search'>
                                <img src={searchIcon} alt=""/>
                            </Link>
                        </li>
                        <li>
                            <Link to='/profile' >
                                <img src={avaIcon} alt=""/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;