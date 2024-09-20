import { useState } from "react";

export default function Form({ onAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();

        if (!description) return;

        const newItem = {
            description,
            quantity,
            packed: false,
            id: Date.now(),
        };
        console.log(newItem);

        onAddItems(newItem);

        setDescription("");
        setQuantity(1);
    }
    // const numbers = [];
    // for (let i = 1; i <= 20; i++) {
    //     numbers.push(i);
    // }
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
            >
                {/* {numbers.map((nums) => (
                    <option key={nums} value={nums}>
                        {nums}
                    </option>
                ))} */}
                {Array.from({ length: 20 }, (_, index) => index + 1).map(
                    (num) => (
                        <option key={num} value={num}>
                            {num}
                        </option>
                    )
                )}
            </select>
            <input
                type="text"
                name="item"
                placeholder="Item..."
                value={description}
                onChange={(e) => setDescription(String(e.target.value))}
            />

            <button>Add</button>
        </form>
    );
}
