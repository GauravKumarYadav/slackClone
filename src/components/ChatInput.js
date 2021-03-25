import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import firebase from 'firebase';

import db from '../Firebase';
import {useAuthValue} from '../Auth/AuthProvider';

import '../styles/chatInput.css';

function ChatInput({channelName,channelId}) {
    const [input, setInput] = useState('');
    const [{ user }]=useAuthValue();
    
    const sendMessage = (e) =>{
        e.preventDefault();
        if (channelId){
            db.collection('rooms').doc(channelId).collection('messages').add({
                message:input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage:user.photoURL,
            });
        }
    }

    return (
        <div className="chatInput" >
            <form>
                <input 
                value={input}
                onChange={e=>setInput(e.target.value)}
                placeholder={`Message #${channelName?.toLowerCase()}`} />
                <Button type="submit" onClick={sendMessage} >SEND</Button>
            </form>
        </div>
    )
}

export default ChatInput
