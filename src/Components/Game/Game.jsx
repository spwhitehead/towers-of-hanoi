import React, { useState } from "react";
import Tower from "../Tower/Tower";
import { disks } from "../../assets/discs";
import styles from "./Game.module.css";


export default function Game() {

    const [t1, setT1] = useState(disks);
    const [t2, setT2] = useState([]);
    const [t3, setT3] = useState([]);

    return (
        <div className={styles.game}>
            <Tower disks={t1} />
            <Tower disks={t2} />
            <Tower disks={t3} />
        </div>
    );
}