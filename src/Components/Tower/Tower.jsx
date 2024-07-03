import Disk from "../Disk/Disk";
import React from "react";
import styles from "./Tower.module.css";
import towerImage from "../../assets/cone.png";

export default function Tower({disks}) {
    return (
        <div className={styles.tower}>
            <img src={towerImage} alt="tower" />
            {disks.slice().reverse().map((disk) =>
                <Disk key={disk.id} diskSrc={disk.image} id={disk.id} />
            )}
            {/* <img src="/src/assets/cone.png" alt="tower" /> */}
        </div>
    );
}