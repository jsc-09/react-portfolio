import React, { useState } from 'react'
import '../styles/foundation.css'


export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        alert(`Thank you, ${name} for submitting a message.`);
        setName('');
        setEmail('');
        setMessage('');
    };


    return (
        <div >
            <section className='grid-container grid-padding-x'>
            <h4>Contact Joanna</h4>
            <p>Email: <a href="mailto: joanna.s.christian@gmail.com">joanna.s.christian@gmail.com</a></p>
            <p>858-123-4567</p>
            <a href="https://github.com/jsc-09"><img src='./public/images/icons/github.png'/></a> 
            <a href='https://www.linkedin.com/in/joanna-c-2b57b926/'><img src='./public/images/icons/linkedin.png'/></a>
            <a href="./public/documents/J.Christian - Resume - 02.2022.pdf">Resume</a>
            </section>

            <form className="form grid-container grid-padding-x ">
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Email"
                />
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Message"
                />
                <button type="button" className='button hollow primary' onClick={handleFormSubmit}>Submit</button>
            </form>
        </div>
    )
}
