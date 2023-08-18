import './Dealcard.css'

export const Dealcard = ({hotDeal}) => {
  return (
    <div className="card">
      <div className="left_s">
        <p>{hotDeal.p1}</p>
        <p>{hotDeal.p2}</p>
        <p>from <span>Ksh.{hotDeal.prize}</span> OFF</p>
      </div>
      <div className="right_s">
        <img src={hotDeal.image} alt="ps" />
      </div>
    </div>
    
  )
}
