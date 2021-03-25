import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import db from '../Firebase';
import Message from '../components/Message';
import ChatInput from '../components/ChatInput';
import '../styles/chat.css';

function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessages, setRoomMessages] = useState([])
    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot((snapshot) => (
                setRoomDetails(snapshot.data())
            ))
        }
        db.collection('rooms').doc(roomId)
            .collection('messages').orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) => (
                setRoomMessages(snapshot.docs.map(doc => doc.data()))
            ))
    }, [roomId])

    console.log(roomMessages);

    return (
        <div className="chat">
            {/* Chat Header Starts */}
            <div className="chat_header" >
                <div className="chat_headerLeft" >
                    <h4 className="chat_channelName" >
                        <strong>
                            # {roomDetails?.name}
                        </strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat_headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>

                </div>
            </div>
            {/* Chat Header Ends */}

            {/* Messages Start */}
            <div className="chat_messages" >
                {
                    roomMessages.map(({ message , timestamp, user, userImage})=>(
                        <Message
                            message={message}
                            timestamp={timestamp}
                            user={user}
                            userImage={userImage}
                        />
                    ))
                }
            </div>
            {/* Messages Ends */}
            
            {/* chat Input start */}
            <ChatInput channelName={roomDetails?.name} channelId={roomId} />
            {/* chat input ends */}

        </div>
    )
}

export default Chat
