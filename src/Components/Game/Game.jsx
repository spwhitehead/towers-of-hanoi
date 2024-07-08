import React, { useState } from "react";
import {DndContext} from '@dnd-kit/core';
import Tower from "../Tower/Tower";
import { disks } from "../../assets/discs";
import styles from "./Game.module.css";


export default function Game() {
    const [parent, setParent] = useState(null);
    const [towerState, setTowerState] = useState({
        t1: [...disks],
        t2: [],
        t3: [],
    });
    function handleDragEnd({over}) {
        setParent(over ? over.id : null);
        //towerState.t1 = [disks[0], disks[1], disks[2]];
        //towerState.t2 = [disks[3]];

        setTowerState({
            t1: [disks[0], disks[1], disks[2]],
            t2: [disks[3]],
            t3: [],
        });
    }
      
    return (
        <main className={styles.game}>
            <DndContext onDragEnd={handleDragEnd}>
                <Tower towerId={"t1"} disks={towerState.t1} />
                <Tower towerId={"t2"} disks={towerState.t2} />
                <Tower towerId={"t3"} disks={towerState.t3} />
            </DndContext>
        </main>
    );
}