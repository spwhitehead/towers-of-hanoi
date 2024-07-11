import {useDroppable} from '@dnd-kit/core';
import Disk from "../Disk/Disk";
import React from "react";
import styles from "./Tower.module.css"
export default function Tower({ towerId, disks }) {
    const {isOver, setNodeRef} = useDroppable({
        id: towerId,
      });
    
    const style = {
        transform: isOver ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.3s ease',
      };

    return (
        <div  ref={setNodeRef} style={style} className={styles.tower}>
            {disks.slice().reverse().map((disk, i) =>
                <Disk key={disk.id} diskSrc={disk.image} id={disk.id} isTopDisk={i === 0} size={disk.size}/>
            )}
        </div>
    );
}