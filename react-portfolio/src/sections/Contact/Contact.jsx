import React from "react";
import styles from "./ContactStyles.module.css";

function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "38db6f74-49f1-4d06-811d-078541161741");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <section id="Contact" className={styles.container}>
            <h1 className="sectionTitle">Contact</h1>
            <form onSubmit={onSubmit}>
                <div className="formGroup">
                    <label htmlFor="name" hidden>
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        id="name"
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="email" hidden>
                        Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        id="email"
                        required
                    />
                </div>
                <div className="formGroup">
                    <label htmlFor="message" hidden>
                        Message
                    </label>
                    <textarea
                        name="message"
                        placeholder="Message"
                        id="message"
                        required
                    />
                </div>
                <input type="submit" className="hover btn" value="submit" />
            </form>
        </section>
    );
}

export default Contact;
