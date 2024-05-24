import React from "react";
//import {Link} from "react-router-dom";
import styles from './Home.module.css';

const Documents = () => {
    return (
        <div>
            <h1 className={styles.Header}>Documents:</h1>
            <h1 className={styles.Paragraph}>
                Playtesting reports <br></br>
                Postmortem Presentation <br></br>
                Game Presentation <br></br>
                Team Reflection <br></br>
            </h1>
        </div>
    );
};

export default Documents;