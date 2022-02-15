import { useState } from "react";
import propTypes from "prop-types";
import style from "./message-form.module.css";


const MessageForm = (props) => {

    /* Use State */

    const [msgInput, setMsgInput] = useState("");

    const handleSubmit = (e) => {
        /* Empêche le refresh de la page */
        e.preventDefault();

        /* Communication montante (Event) */
        props.onSendMsg(msgInput);

        /* Modification du state, pour effacer l'input */
        setMsgInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            {/* Quand l'utilisateurice modifie le texte, iel modifie aussi le setMsgInput */}
            <input type="text"
                onChange={(e) => setMsgInput(e.target.value)} value={msgInput}
            />
            <button className={style.button} type="submit">Valider</button>
        </form>
    );
}

/* Définir les valeurs par défaut des props */

MessageForm.defaultProps = {
    onSendMsg: () => { } /* noop */
}

/* Définir le typage des props */

MessageForm.propTypes = {
    onSendMsg: propTypes.func
}
export default MessageForm;