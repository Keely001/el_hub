import "./Promo.css"
import { Link } from "react-router-dom"

export const Promo = () => {
  return (
    <section className="promoArea" >
  
      <div className="leftSide">
        <span className="fst_part">
          END SEASON
        </span>
        <span className="scd_part">
          SmartPhones
        </span>
        <div className="thd_part">
          last call for up to <span>$250</span> off!
        </div>
        <Link to="/">
        <button className="btn">
          Hello
        </button>
        </Link>
      </div>
      <div className="rightSide">

      </div>
    </section>
  )
}
