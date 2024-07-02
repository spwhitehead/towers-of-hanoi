import Disk from "../Disk/Disk";
import React from "react";
import styles from "./Tower.module.css";
import towerImage from "../../assets/cone.png";

export default function Tower({disks}) {
    return (
        <div className="tower">
            <img src={towerImage} alt="tower" />
            {disks.slice().reverse().map((disk, index) =>
                <Disk key={index} diskSrc={disk} />
            )}
            {/* <img src="/src/assets/cone.png" alt="tower" /> */}
        </div>
    );
}