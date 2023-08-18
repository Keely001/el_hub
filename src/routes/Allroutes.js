import { Routes, Route } from "react-router-dom"
import {Home} from '../components'
export const Allroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
    </Routes>
  )
}
