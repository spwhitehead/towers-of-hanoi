import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';
import React from "react";
import styles from "./Disk.module.css";
export default function Disk({ diskSrc, id }) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: id,
      });
      const style = {
        // Outputs `translate3d(x, y, 0)`
        transform: CSS.Translate.toString(transform),
      };

    const inlineStyles = {
        backgroundImage: "url({ diskSrc })",
    };
    
    return (
        <div className={styles.disk} style = { inlineStyles } >
            <img className={styles[`${id}`]} src={diskSrc} alt="disk" ref={setNodeRef} style={style} {...listeners} {...attributes}/>
        </div>
    );
}


// export default function Disk1() { return (
//         <div>
//             <h1>Disk 1</h1>
//             <img src="/src/assets/block1.png" alt="block1" />
//         </div>
//     );
// }
// export default function Disk2() { return (
//         <div>
//             <h1>Disk 2</h1>
//             <img src="/src/assets/block2.png" alt="block2" />
//         </div>
//     );
// }
// export default function Disk3() { return (
//         <div>
//             <h1>Disk 3</h1>
//             <img src="/src/assets/block3.png" alt="block3" />
//         </div>
//     );
// }
// export default function Disk4() { return (
//         <div>
//             <h1>Disk 4</h1>
//             <img src="/src/assets/block4.png" alt="block4" />
//         </div>
//     );
// }
// export default function Disk5() { return (
//         <div>
//             <h1>Disk 5</h1>
//             <img src="/src/assets/block5.png" alt="block5" />
//         </div>
//     );
// }
// export default function Disk6() { return (
//         <div>
//             <h1>Disk 6</h1>
//             <img src="/src/assets/block6.png" alt="block6" />
//         </div>
//     );
// }
// export default function Disk7() { return (
//         <div>
//             <h1>Disk 7</h1>
//             <img src="/src/assets/block7.png" alt="block7" />
//         </div>
//     );
// }