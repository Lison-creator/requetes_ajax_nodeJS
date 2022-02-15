import style from "./message-container.module.css";
import { useState } from 'react';
import { nanoid } from "nanoid";
import MessageForm from '../../components/message-form/message-form';
import MessageList from '../../components/message-list/message-list';


const MessageContainer = () => {

    /* Liste qui contient les messages */
    const [messages, setMessages] = useState([]);

    const handleNewMessage = (msg) => {

        const newMsg = {
            msg: msg,
            id: nanoid()
        };

        /* 2 méthodes de concaténation */
        /*  setMessages(messages => messages.concat(msg));
        Pour changer l'ordre de concaténation: 
          setMessages(messages => [].concat(newMsg).concat(message)); */

        setMessages(messages => [newMsg, ...messages]);
    }
    return (

        /* Balise "main" précise que c'est le contenu principal de la page */
        <main className={style.main}>
            <h1>Message...</h1>
            <MessageForm onSendMsg={handleNewMessage} />
            <MessageList incomingMessages={messages} />
        </main>
    )
}

export default MessageContainer;