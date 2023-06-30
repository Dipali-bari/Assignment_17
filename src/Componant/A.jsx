import B from './B';
import { useState } from 'react';
import mycontext from './myContext';


function A(){
    const [state , setState] = useState("Geeks");

    return (
        <div>
            <h2>A componant</h2>
            <button onClick={()=>{setState("Geekster")}}>Change Data</button>
          
            <hr></hr>
            <mycontext.Provider value = {state}>
                <B/>
            </mycontext.Provider>
            
        </div>
    );
}

export default A;