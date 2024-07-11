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

    function handleDragEnd({ active, over }) {
        setParent(over ? over.id : null);

        const newT1 = towerState.t1.filter((disk => disk.id !== active.id));
        const newT2 = towerState.t2.filter((disk => disk.id !== active.id));
        const newT3 = towerState.t3.filter((disk => disk.id !== active.id));

        // Get the disk
        let activeDisk = disks.find(disk => disk.id === active.id)

        // Get disks from target tower (the "over" tower)
        const targetDisks = towerState[over.id];
        if (targetDisks.length > 0) {
            // Get the last disk in the target tower
            const lastDisk = targetDisks[targetDisks.length - 1];
            
            // Check if the active disk is larger than the last disk
            // If it is, display an alert
            if (activeDisk.size > lastDisk.size) {
                return alert("You can't place a larger disk on a smaller disk");
            };

            if (activeDisk.size <= lastDisk.size) {
                if (over.id === "t1") newT1.push(activeDisk);
                else if (over.id === "t2") newT2.push(activeDisk);
                else if (over.id === "t3") newT3.push(activeDisk);
            }
        } else {
            if (over.id === "t1") newT1.push(activeDisk);
            else if (over.id === "t2") newT2.push(activeDisk);
            else if (over.id === "t3") newT3.push(activeDisk);
        }
        setTowerState({
            t1: newT1,
            t2: newT2,
            t3: newT3,
        });
    // Check if t1 & t2 are empty AND t3 is an array with 7 elements
        if (newT1.length === 0 && newT2.length === 0 && newT3.length === disks.length) {
           return alert("You won!");
        }
    };

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