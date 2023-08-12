import './Footer.css'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter-sign.png'
export const Footer = () => {
  return (
    <footer>
        <div className="footer">
            <div className='f_part'>
                <img className='f_icons' src={facebook} alt="facebook" />
                <img className='f_icons' src={linkedin} alt="linkedin" />
                <img className='f_icons' src={twitter} alt='twitter'/>
            </div>
            <div className='s_part'>
                <p>copyright@2023</p>
            </div>
        </div>
    </footer>
  )
}
