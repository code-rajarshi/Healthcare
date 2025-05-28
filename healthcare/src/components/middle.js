import React from 'react'
import '../stylesheet/middle.css'

import { IoSearch } from "react-icons/io5";
import { HiBell } from "react-icons/hi";
import { GiLeg } from "react-icons/gi";
import { PiScanDuotone } from "react-icons/pi";
import { IoIosHeart } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import ActivityChart from './graph';

const Middle = () => {
  return (
    <div>
      <div className="mainM">
      
      <div className="mmdiv1">
        <div className="icon1">
             <IoSearch style={{color:'darkblue'}} />
        </div>
        <div className="searchbar1">
          <input type="text" placeholder='Search'/>
        </div>
        <div className="icon2">
             <HiBell style={{color:'darkblue'}} />
        </div>
      </div>

      <div className="mmdiv2">
        <div className="mmheading1">
          <h2>Dashboard</h2>
        </div>
        <div className="mmoptions1">
          <select name="" id="">
            <option value="">This Week</option>
            <option value="">Privious Week</option>
            <option value="">Next Week</option>
          </select>
        </div>
      </div>

      <div className="mmdiv3">
        <div className="mmdiv3sub">

           <div className="img1">
            <img height={250} src="https://images.vexels.com/content/141930/preview/muscular-system-anatomy-human-body-71cfc9.png" alt="" />
           </div>

           <div className="mmdiv3sub1">
            <div className="mmdiv3subicon1">
              <GiLeg style={{color:'yellow'}} />
            </div>
             <div className="mmdiv3sub1text">
              <p>Healthy Leg</p>
             </div>
             <div className="mmdiv3subicon2">
              <PiScanDuotone size={30} style={{color:'skyblue'}} />
             </div>
           </div>
           
           <div className="mmdiv3sub2">
             <div className="mmdiv3subicon4">
              <PiScanDuotone size={30} style={{color:'skyblue'}} />
             </div>
            
             <div className="mmdiv3sub2text">
              <div className="mmdiv3subicon3">
              <IoIosHeart style={{color:'red'}} />
              </div>
              <div className="healthyheart">
              <p>Healthy Heart</p>
              </div>
             </div>
            
           </div>
        </div>

        <div className="mmdiv32ndsub">
          <div className="lungs">
            <div className="lungsimg">
             <img height={25} src="https://pngimg.com/d/lung_PNG62.png" alt="" />
             <p>Lungs</p>
            </div>
            <div className="dateformmdiv3">
              <p>Date: 26 Oct 2021 </p>
            </div>
            <div className="colorpanelformmdiv3">
              <div className="cpm">
                <div className="cpm1"></div>
              </div>
            </div>

          </div>

          <div className="lungs">
            <div className="lungsimg">
             <img height={25} src="https://static.vecteezy.com/system/resources/thumbnails/052/648/095/small/3d-model-of-a-human-tooth-in-a-neutral-position-png.png" alt="" />
             <p>Teeth</p>
            </div>
            <div className="dateformmdiv3">
              <p>Date: 26 Oct 2021 </p>
            </div>
            <div className="colorpanelformmdiv3">
              <div className="cpm">
                <div className="cpm2"></div>
              </div>
            </div>

          </div>

          <div className="lungs">
            <div className="lungsimg">
             <img height={25} src="https://static.vecteezy.com/system/resources/previews/020/032/996/non_2x/3d-icon-of-dog-bone-free-png.png" alt="" />
             <p>Bone</p>
            </div>
            <div className="dateformmdiv3">
              <p>Date: 26 Oct 2021 </p>
            </div>
            <div className="colorpanelformmdiv3">
              <div className="cpm">
                <div className="cpm3"></div>
              </div>
            </div>

          </div>

        </div>
      </div>
      <div className="mmdiv4">
        <div className="mmdiv4corner">
        <button>Details <FaArrowRight /> </button>
        </div>
       
      
      </div>

     <div className="graph1">
      <ActivityChart />
     </div>

      </div>
    </div>
  )
}

export default Middle
