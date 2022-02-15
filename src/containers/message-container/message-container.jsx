/* import style from "./message-container.module.css"; */
import { useState } from 'react';
import MessageForm from '../../components/message-form/message-form';


const MessageContainer = () => {

    /* Liste qui contient les messages */
    const [messages, setMessages] = useState([]);

    const handleNewMessage = (msg) => {

        /* 2 méthodes de concaténation */
        setMessages(messages => messages.concat(msg));
        setMessages(messages => [...messages, msg]);
    }
    return (

        /* Balise "main" précise que c'est le contenu principal de la page */
        <main>
            <h1>Message...</h1>
            <MessageForm onSendMsg={handleNewMessage} />
        </main>
    )
}

export default MessageContainer;