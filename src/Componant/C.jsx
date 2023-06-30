import D from './D';
import mycontext from './myContext';
import { useContext } from 'react';
function C(){
    let hello = useContext(mycontext);
    return (
        <div>
            <h2>C componant</h2>
            <p>{hello}</p>
            <hr/>
            <D />
        </div>
    );
}

export default C;