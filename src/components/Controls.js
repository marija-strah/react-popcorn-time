import "./Controls.css";

function Controls(props) {
    return (
        <div className="Controls">
            <h2>Controls:</h2>
            <button onClick={()=>{props.callbackTopRated(8)}}>Min rating 8</button>
            <button onClick={()=>{props.callbackTopRated(9)}}>Min rating 9</button>
        </div>
    );
}


export default Controls;