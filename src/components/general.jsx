import { useState } from "react";
import '../styles/general.css'

// function Updater(props){

// }


export default function GeneralInfoForm() {
    // State for each input field
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    // Handlers to update state when the user types
    const handleFullNameChange = (e) => setFullName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);

    return (
        <div className="container">
            {/* Full Name Input - Spans full width */}
            <div className="form-group full-width">
                <label htmlFor="fullName">Full Name</label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={fullName}
                    onChange={handleFullNameChange}
                    placeholder="John Doe"
                />
            </div>

            {/* Email Input - Spans full width */}
            <div className="form-group full-width">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="john.doe@example.com"
                />
            </div>

            {/* Phone Number Input - Spans full width */}
            <div className="form-group full-width">
                <label htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="(123) 456-7890"
                />
            </div>
        </div>
    );
}
