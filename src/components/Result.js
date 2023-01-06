import { PromiseProvider } from "mongoose";


const Result = (props) => {
    const {good, neutral, bad} = props
    const sum = () => good + neutral + bad;
    const positive = () => (good / sum()) * 100;
     return (
        <>
            <h2>Statistics</h2>
            <p>Good {good}</p>
            <p>Neutral {neutral}</p>
            <p>Bad {bad}</p>
            <h3>sum: {sum()}</h3>
            <h3>Average: {(good - bad) / sum()}</h3>
            <h3>Positive: {positive()} %</h3>
            </>

    )
    
}

export default Result;