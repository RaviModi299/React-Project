import { useState } from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

function App() {
    //const arr = useState(1); // usestate always return array object
    //console.log(arr);
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);
    // const [test, setTest] = useState({ name: "Ravi" });

    function handlePrevious() {
        if (step > 1) setStep((s) => s - 1); // one way declare
    }

    function handleNext() {
        if (step < 3) setStep(step + 1); // another way declare
        // setTest({ name: "Modi" });
    }

    return (
        <>
            <button className="close" onClick={() => setIsOpen(!isOpen)}>
                &times;
            </button>
            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? "active" : ""}>1</div>
                        <div className={step >= 2 ? "active" : ""}>2</div>
                        <div className={step >= 3 ? "active" : ""}>3</div>
                    </div>
                    <p className="message">
                        Step {step}: {messages[step - 1]}
                        {/* {test.name} */}
                    </p>
                    <div className="buttons">
                        <Button
                            bgColor={"#7950f2"}
                            textColor={"#fff"}
                            onClick={handlePrevious}
                        >
                            <span>👈</span>Previous
                        </Button>
                        <Button
                            bgColor={"#7950f2"}
                            textColor={"#fff"}
                            onClick={handleNext}
                        >
                            Next<span>👉</span>
                        </Button>
                        {/* <button
                            style={{
                                backgroundColor: "#7950f2",
                                color: "#fff",
                            }}
                            onClick={handlePrevious}
                        >
                            Previous
                        </button> 
                        <button
                            style={{
                                backgroundColor: "#7950f2",
                                color: "#fff",
                            }}
                            onClick={handleNext}
                        >
                            Next
                        </button>*/}
                    </div>
                </div>
            )}
        </>
    );
}

function Button({ bgColor, textColor, onClick, children }) {
    return (
        <button
            style={{ backgroundColor: bgColor, color: textColor }}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default App;
