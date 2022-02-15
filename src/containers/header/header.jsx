import style from "./header.module.css";
import moment from "moment";
import "moment/locale/fr";

const Header = () => {

    const today = moment().format("DD MMMM");
    return (

        /* Ecriture en JSX, même si ça ressemble à du HTML  */

        <header className={style.header}>
            <p>Rappel RéactJS</p>
            <p className={style.date}>{today}</p>
        </header>


    )
}

export default Header;