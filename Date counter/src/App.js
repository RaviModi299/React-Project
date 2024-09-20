import { useState } from "react";

export default function App() {
    return (
        <div className="App">
            {/* <Counter /> */}
            <ScrollCounter />
        </div>
    );
}

// function Counter() {
//     const [count, setCount] = useState(0);
//     const [step, setStep] = useState(1);

//     const date = new Date("feb 02 2025");
//     date.setDate(date.getDate() + count);

//     function minusStep() {
//         setStep((s) => s - 1);
//     }

//     function plusStep() {
//         setStep((s) => s + 1);
//     }

//     function onMinus() {
//         setCount((c) => c - step);
//     }
//     function onPlus() {
//         setCount(count + step);
//     }

//     return (
//         <>
//             <div className="steps-wrapper">
//                 {/* <input type="range" min="0" max="10" /> */}
//                 <button type="button" onClick={minusStep}>
//                     -
//                 </button>
//                 <span>Step: {step}</span>
//                 <button type="button" onClick={plusStep}>
//                     +
//                 </button>
//             </div>
//             <div className="count-wrapper">
//                 <button type="button" onClick={onMinus}>
//                     -
//                 </button>
//                 <span>Count: {count}</span>
//                 <button type="button" onClick={onPlus}>
//                     +
//                 </button>
//             </div>
//             <p>
//                 <span>
//                     {count === 0
//                         ? "Today is "
//                         : count > 0
//                         ? `${count} days from today is `
//                         : `${Math.abs(count)} days ago was `}
//                 </span>
//                 <span>{date.toDateString()}</span>
//             </p>
//         </>
//     );
// }

function ScrollCounter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    function handleReset() {
        setCount(0);
        setStep(1);
    }

    const date = new Date("feb 02 2025");
    date.setDate(date.getDate() + count);

    function onMinus() {
        setCount((c) => c - step);
    }
    function onPlus() {
        setCount(count + step);
    }

    return (
        <>
            <div className="steps-wrapper">
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={step}
                    onChange={(e) => setStep(Number(e.target.value))}
                />
                <span>Step: {step}</span>
            </div>
            <div className="count-wrapper">
                <button type="button" onClick={onMinus}>
                    -
                </button>
                {/* <span>Count: {count}</span> */}
                <input
                    type="text"
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                />
                <button type="button" onClick={onPlus}>
                    +
                </button>
            </div>
            <p>
                <span>
                    {count === 0
                        ? "Today is "
                        : count > 0
                        ? `${count} days from today is `
                        : `${Math.abs(count)} days ago was `}
                </span>
                <span>{date.toDateString()}</span>
            </p>
            {count !== 0 || step !== 1 ? (
                <div>
                    <button onClick={handleReset}>Reset</button>
                </div>
            ) : null}
        </>
    );
}
