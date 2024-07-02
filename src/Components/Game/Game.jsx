import React, { useState } from "react";
import Tower from "../Tower/Tower";
import d1 from "../../assets/block1.png"
import d2 from "../../assets/block2.png"
import d3 from "../../assets/block3.png"
import d4 from "../../assets/block4.png"
import d5 from "../../assets/block5.png"
import d6 from "../../assets/block6.png"
import d7 from "../../assets/block7.png"
import styles from "./Game.module.css";

export default function Game() {
    const [t1, setT1] = useState([d1, d2, d3, d4, d5, d6, d7]);
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





        // <section className="game" id="game">
        //     <h2>Welcome to the game</h2>
        //     <div className="container">
        //         <Tower />
        //         <Disk />
        //         <Disk1 />
        //         <Disk2 />
        //         <Disk3 />
        //         <Disk4 />
        //         <Disk5 />
        //         <Disk6 />
        //         <Disk7 />
        //     </div>
        // </section>