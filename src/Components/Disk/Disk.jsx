import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';
import React from "react";
import styles from "./Disk.module.css";
export default function Disk({ diskSrc, id, isTopDisk }) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: id,
        disabled: !isTopDisk,
      });
      const style = {
        transform: CSS.Translate.toString(transform),
      };

    const inlineStyles = {
        backgroundImage: "url({ diskSrc })",
    };
    
    return (
        <div className={styles.disk} style = { inlineStyles } >
            <img 
                className={styles[`${id}`]}
                src={diskSrc}
                alt="disk"
                ref={setNodeRef} 
                style={style}
                draggable={isTopDisk}
                {...listeners}
                {...attributes}/>
        </div>
    );
}