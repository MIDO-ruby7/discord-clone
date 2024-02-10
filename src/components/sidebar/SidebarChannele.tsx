import React from 'react'
import './SidebarChannele.scss'
import { DocumentData } from 'firebase/firestore';

type Props = {
  id: string;
  channel: DocumentData
}

function SidebarChannele(props: Props) {
  const { id, channel } = props;
  return (
    <div className='sidebarChannele'>
      <h4>
        <span className='sidebarChannelHash'>#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  )
}

export default SidebarChannele