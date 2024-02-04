import React from 'react'
import './Chat.scss'
import ChatHeader from './ChatHeader'

function Chat() {
  return (
    <div className='chat'>
      <ChatHeader />
      <div className='chatMessage'>Chat</div>
      <div className='chatInput'>Chat</div>
    </div>
  )
}

export default Chat