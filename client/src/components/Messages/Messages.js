import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from '../Message/Message';

import './Messages.css';


const Messages =  ({messages,name}) =>(
    <div style={{overflowY:"scroll"}}className="messages-container">
<ScrollToBottom className="Messages">
{messages.map((message,i)=><div key={i}><Message message={message}name={name}/></div>)}
</ScrollToBottom></div>
)
    
  

export default Messages;