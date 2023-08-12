import "./Header.css"
import Logo from "../assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHeart, faArrowsRotate, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
  return (
    <header >
        <div className="upper_ribbon" >
            <div className="r_part1" >
                <p>Home of all electronics at a discounted prize</p>
            </div>
            <div className="r_part2">
                
                <a href= '/'>On offer</a>
                    
                <a href= '/'>Gift cards</a>
                    
                <a href= '/'>Redeem points</a>

            </div>
        </div>
        <div className="middle_ribbon">
            <div className= "logo">
                <img src={Logo} alt="Logo.png"/>
                <p>el_hub</p>
            </div>
            <div className="searchArea">
                <form>
                    <input className="searchBar"type="text" placeholder="Search....." id="search-tab" autoComplete="off"/>
                    <button className="searchButton" type="button"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </form>
            </div>
            <div className="searchIcons">
                <a className="icons" href="/"><FontAwesomeIcon icon={faHeart} /></a>
                <a className="icons" href="/"><FontAwesomeIcon icon={faArrowsRotate} /></a>
                <a className="icons" href="/"><FontAwesomeIcon icon={faCartShopping} /></a>
                <a className="icons" href="/"><FontAwesomeIcon icon={faUser} /></a>
                <p className="iconsTotal">Ksh. 14500</p>
            </div>
        </div>
    </header>
  )
}
