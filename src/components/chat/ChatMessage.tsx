import React from 'react'
import './ChatMessage.scss'
import { Avatar } from '@mui/material';

function ChatMessage() {
  return (
    <div className='message'>
      <Avatar />
      <div className='messageInfo'>
        <h4>
          なまえ
          <span className='messageTimestamp'>
            2024/02/03/ 15:15
          </span>
        </h4>
        <p>メッセージ</p>
      </div>
    </div>
  )
}

export default ChatMessage