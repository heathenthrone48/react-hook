import React, { useState } from 'react';
import L2Tree from '../L2/L2Tree';
import './L1Tree.css';

const L1Tree = () => {

    const [names, setNames] = useState(['ashiN', 'Nancy']);

    const flipPosition = () => {
        setNames(prevNames => {
            if( prevNames[0]==='ashiN')
            prevNames = ['Nancy', 'ashiN'];
            else
            prevNames = [ 'ashiN','Nancy'];
            return prevNames
        })
    }
    return (
        <div>
            <h1>"Im the Root of this, L1 Tree"</h1>
            <h3>My childrens are Listed below</h3>

                { names.map((nam) => (
                        <L2Tree key={Math.random()} nam={nam}/>
                )
                )}

            <button className="button buttoneff1" onClick={flipPosition}>Flip</button>
        </div>
    )
}

export default L1Tree;