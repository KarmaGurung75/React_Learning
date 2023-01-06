import { useState } from "react";
import Result from "./Result";

const Feedback = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const goodBtn = () => {
        setGood (good + 1)
    }
    const neutralBtn = () => {
        setNeutral (neutral + 1)
    }
    const badBtn = () => {
        setBad (bad + 1)
    }

   
    return (
        <>
        <h2> Give Feedback</h2>
            <button onClick={goodBtn }> Good</button>
            <button onClick={neutralBtn}> Neutral</button>
            <button onClick={badBtn}> Bad</button>

            <Result good={good} neutral={ neutral} bad= {bad} />
            </>

    )
}

export default Feedback;