import React from 'react'
import "../style/ChatInput.css"
import db from '../firebase';
import { useGlobalContext } from '../StateProvider';
import firebase from 'firebase';


function ChatInput({channelName, channelId}) {
    const {user,image, phoneNumber, email } = useGlobalContext();
    const [input, setInput] = React.useState('');

    const sendMessage = e=>{
        e.preventDefault();

        if(channelId){
            db.collection('rooms').doc(channelId).collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user,
                userImage: image,
                
            });
            db.collection('data').add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user,
                userImage: image,
                phonenumber: phoneNumber,
                email: email,
            });
        }
    }

    return (
        <div className='chatInput'>
            <form>
                <input 
                value={input}
                onChange={e=>setInput(e.target.value)}
                placeholder={`Message #${channelName}`} />
                <button 
                type="submit"
                onClick={sendMessage}
                >Send</button>
            </form>
        </div>
    )
}

export default ChatInput