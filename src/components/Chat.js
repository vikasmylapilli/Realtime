import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../style/Chat.css";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import db from '../firebase';
import Messages from './Messages';
import ChatInput from './ChatInput';

function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = React.useState(null);
    const [roomMessages, setRoomMessages] = React.useState([]);

    useEffect(()=>{
        if(roomId){
            db.collection('rooms').doc(roomId)
            .onSnapshot((snapShot) => (
            setRoomDetails(snapShot.data())
            ))
        }
        db.collection('rooms').doc(roomId)
        .collection('messages')
        .orderBy("timestamp","asc")
        .onSnapshot(snapshot=>setRoomMessages(snapshot.docs.map(doc => doc.data()))
        )
    },[roomId])

    return (
        <div className='chat'>
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong>
                            #{roomDetails?.name}
                        </strong>
                        <StarBorderIcon/>
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon/> Details
                    </p>
                </div>
            </div>
            <div className="chat__messages">
                {
                    roomMessages.map(message=>(
                        <Messages message={message.message} 
                        timestamp={message.timestamp} 
                        user={message.user} 
                        userImage={message.userImage} />
                    ))
                }
            </div>
            <ChatInput channelName = {roomDetails?.name}
            channelId={roomId}/>
        </div>
    )
}

export default Chat