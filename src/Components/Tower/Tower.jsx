import Disk from "../Disk/Disk";
import React from "react";
import styles from "./Tower.module.css";
import towerImage from "../../assets/cone.png";

export default function Tower({disks}) {
    return (
        <div className={styles.tower}>
            {disks.slice().reverse().map((disk) =>
                <Disk key={disk.id} diskSrc={disk.image} id={disk.id} />
            )}
        </div>
    );
}