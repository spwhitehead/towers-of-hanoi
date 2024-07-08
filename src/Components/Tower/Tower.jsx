import {useDroppable} from '@dnd-kit/core';
import Disk from "../Disk/Disk";
import React from "react";
import styles from "./Tower.module.css"
export default function Tower({ towerId, disks }) {
    const {isOver, setNodeRef} = useDroppable({
        id: towerId,
      });
    
    const style = {
        opacity: isOver ? 1 : 0.5,
      };

    return (
        <div  ref={setNodeRef} style={style} className={styles.tower}>
            {disks.slice().reverse().map((disk) =>
                <Disk key={disk.id} diskSrc={disk.image} id={disk.id} />
            )}
        </div>
    );
}