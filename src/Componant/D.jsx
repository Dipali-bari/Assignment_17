import mycontext from "./myContext";
import { useContext } from "react";

function D(){
    let hello = useContext(mycontext);
    return (
        <div>
            <h2>D componant</h2>
            <p>{hello}</p>
        </div>
    );
}

export default D;