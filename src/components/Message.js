import React from 'react'
import '../styles/message.css';
import moment from 'moment';


function Message({ message, timestamp, user, userImage }) {
    return (
        <div className="message" >
            <img src={userImage} alt={""} />
            <div className="message_info" >
                <h4>{user}{' '}
                    <span className="message_timestamp" >
                        {moment(timestamp?.toDate()).fromNow()}
                    </span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
