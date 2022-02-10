import React from "react";


import offBulb from './images/OFFbulb.jpg';
import onBulb from './images/ONbulb.jpg';


const Bulb = () => {
    const [Bulb, setBulb] = useState(offBulb);
    const [isText, setText] = useState('ON');

    const myFunc = () => {
        if (Bulb === offBulb) {
            setBulb(onBulb);
            setText('OFF');
        } else {
            setBulb(offBulb);
            setText('ON');
        }
    }
    return (
        <div>
            <img src={Bulb} alt="bulb" />
            <button style={{ width: '10%', padding: '20px', cursor: 'pointer' }} onClick={myFunc}>{isText}</button>
        </div>
    );
};

export default Bulb;