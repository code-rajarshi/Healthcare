import React ,{} from 'react'
import SideNav from './sideNav'
import '../stylesheet/DashBoard.css'

import Middle from './middle'
import Last from './last'
const DashBoard = () => {
  return (
    <div className='container'>
        <SideNav/>
        <Middle/>
        <Last/>
    </div>
  )
}

export default DashBoard
