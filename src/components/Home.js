import "./Home.css"
import { Promo } from "../pages"
import { Dealcard } from "./Dealcard"
import { hotDeals } from "../data/Offers"

export const Home = () => {
  return (
    <div>
      <Promo/>
      <div className="hotDeals_area">
      {hotDeals.map((hotDeal) => {
       return <Dealcard hotDeal= {hotDeal}/>
      })}
      </div>
    </div>
  )
}
