import React from "react";
//import {Link} from "react-router-dom";
import styles from './Home.module.css';

const Documents = () => {
    return (
        <div>
            <h1 className={styles.Header}>Documents:</h1>
            <h1 className={styles.Paragraph}>
                <a href="https://github.com/DillonJEvans/css385-final">Playtesting reports</a><br></br>
                <a href="https://github.com/DillonJEvans/css385-final">Postmortem Presentation</a><br></br>
                <a href="https://github.com/DillonJEvans/css385-final">Presentation</a><br></br>
                <a href="https://github.com/DillonJEvans/css385-final">Team Reflection</a><br></br>
            </h1>
        </div>
    );
};

export default Documents;