import style from "./message-list.module.css";
import propTypes from "prop-types";

const MessageList = (props) => {

    /* .map : récupère chaque élément du tableau et le transforme */
    const messageJSX = props.incomingMessages.map(
        obj => <li key={obj.id}>{obj.msg}</li>
    );

    return (
        <>
            <div>
                <ul className={style.ul}>
                    {messageJSX}
                </ul>
            </div>
        </>


    )
};

MessageList.defaultProps = {

    incomingMessages: []
};

MessageList.propTypes = {
    incomingMessages: propTypes.arrayOf(
        /* Exact: il doit avoir la propriété exacte spécifiée */
        propTypes.exact({
            msg: propTypes.string,
            id: propTypes.string.isRequired
        }))
};

export default MessageList;