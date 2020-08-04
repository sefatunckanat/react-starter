import React, { useContext, useState, useEffect, memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../hooks/Store";

const Child = memo(() => {
    console.log("Ben child !");
    return <div>1</div>;
});

function About() {
    var [state, dispatch] = useContext(Context);
    var [click, setClick] = useState(0);
    var history = useHistory();


    return (
        <div>
            <h1>About</h1>
            <div>Note: {
                state.note
            }</div>

            <button onClick={
                () => {
                    console.log(history)
                    history.go(-(history.length - 1))
                }
            }>Go Home</button>

            <button onClick={
                () => {
                    setClick(click + 1);
                }
            }>
                Click {click} </button>
            <hr />
            <Child />

            <Link to='/'>Go Home</Link>
        </div>
    );
}

export default About;
