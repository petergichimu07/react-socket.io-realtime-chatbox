import React from 'react';



import './Message.css';

const Message =  ({message: {user,text},name}) =>{
    // console.log("ReceivedName:",name);
let isSentByCurrentUser=false;

const trimmedName=name.trim().toLowerCase();

if (user===trimmedName){
    isSentByCurrentUser=true;
}
console.log(isSentByCurrentUser);
return (
    isSentByCurrentUser
    ?(
        <div  className="MessageContainer justifyEnd">
            {/* <p className="sentText sentTextYou pr-10">You</p> */}
            <div className="messageBox backgroundBlue">
                <p className="messageText colorWhite">{text}</p>
            </div>
        </div>
    )
    :(
        <div   className="MessageContainer justifyStart">
            <div className="messageBox backgroundLight">
            <p className="sentText sentTextOther ">{user}</p>
                <p className="messageText colorDark">{text}</p>
            </div>
        </div>
    )
)

}

    
  

export default Message;