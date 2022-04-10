import react from "react";
import "./../components/Button.css"
import "./../components/Container"
import axios from "axios";
import { resolvePath } from "react-router-dom";
function Button(props){
    return(
        <div className="buttonQ">
            <button className="insideButton" onClick={props.t}>Generate Quote.</button>
        </div>
    );
}
export default Button;