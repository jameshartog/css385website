import React from "react";
//import {Link} from "react-router-dom";
import styles from './Home.module.css';

const Documents = () => {
    return (
        <div>
            <h1 className={styles.Header}>Documents:</h1>
            <h1 className={styles.Paragraph}>
                <a href="https://github.com/DillonJEvans/css385-final">Playtesting reports</a><br></br>
                <a href="https://docs.google.com/presentation/d/1U2zkSV2nDC1JP-TbS_zPJwfv5MmySwf_NmOUhaPV8L4/edit?usp=sharing">Postmortem Presentation</a><br></br>
                <a href="https://docs.google.com/presentation/d/1VssOT86Ikx1DNmzjEZCNR-DNagDRZXnBTbTeSGE0BpA/edit?usp=sharing">Presentation</a><br></br>
                <a href="https://github.com/DillonJEvans/css385-final">Team Reflection</a><br></br>
            </h1>
        </div>
    );
};

export default Documents;