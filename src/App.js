import { useState } from "react";
import Feedback from "./components/Feedback";

import History from "./components/history";

function App({ name, age }) {
    
    const [counter, setCounter] = useState(0)

    setTimeout(() => setCounter(counter + 1), 1000);

    console.log(`Rendering ${counter}...`);
    
    const handlePlus = () => {
        setCounter(counter + 1)
    }
    return (
            <div class ="bg-blue-900 h-screen">
            <h2>Hello {name}, you are {age} years old.</h2>
            <h2>{counter}</h2>
            <button onClick={handlePlus}>plus</button>
            <button onClick={handlePlus}>plus</button> 

            calling the other class
            <Feedback/> 

            <History/>
            </div>
        );   
}
export default App;
