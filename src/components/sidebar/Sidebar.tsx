import React from 'react'
import "./Sidebar.scss"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import SidebarChannele from './SidebarChannele';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarLeft'>
        <div className='severIcon'>
          <img src="https://gyazo.com/8263d58f4d7d69f77806e863783c4f93/max_size/1000" alt=''/>
        </div>
        <div className='severIcon'>
          <img src="https://gyazo.com/8263d58f4d7d69f77806e863783c4f93/max_size/1000" alt=''/>
        </div>
      </div>
      <div className='sidebarRight'>
        <div className='sidebarTop'>
          <h3>KanzenniRikaishita</h3>
          <ExpandMoreIcon />
        </div>
        <div className='sidebarChanneles'>
          <div className='sidebarChannelesHeader'>
            <div className='sidebarHeader'>
              <ExpandMoreIcon />
              <h4>Reactチャンネル</h4>
            </div>
            <AddIcon className='sidebarAdIcon' />
          </div>
          <div className='sidebarChannelesList'>
            <SidebarChannele />
          </div>

          <div className='sidebarFooter'>
            <div className='sidebarAccount'>
              <img src='./favicon.ico' alt=''/>
              <div className='accountName'>
                <h4>kanzenniRikaishita</h4>
                <span>#8162</span>
              </div>
            </div>
            <div className='sidebarVoice'>
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar