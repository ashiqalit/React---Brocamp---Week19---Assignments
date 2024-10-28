import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function Form() {
    const [error, setError] = useState(null)
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus();
    },[])

    const handleSubmit = (event) => {
        event.preventDefault();
        const value = event.target.test.value;

        const hasNumbers = /\d/;
        if (hasNumbers.test(value)) {
            setError("Numbers not allowed")
            inputRef.current.focus();
            return;
        }

        setError(null)
        console.log(value)
        event.target.reset();
        inputRef.current.focus();
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="test">
                <b>Enter name:</b>&nbsp;
                <input
                    type="text"
                    name="test"
                    id="test"
                    ref={inputRef}
                />
            </label>
            <button>
                Submit
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    )
}