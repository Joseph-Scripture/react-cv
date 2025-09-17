import React, { useState } from "react";

function GeneralInfo({ name, setName, email, setEmail, description, location, setLocation, contact, setContact, setDescription }) {
    
    const [isEditing, setIsEditing] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setIsEditing(false); 
    };

    if (isEditing) {
        return (
            <div className="info">
                <form onSubmit={handleSubmit}>
                    <h2>General Information</h2>
                    <label htmlFor="name">Full Name</label>
                    <input 
                        type="text" 
                        id="name"
                        placeholder="Jane Doe"
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email"
                        placeholder="jane.doe@example.com"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <label htmlFor="location">Address</label>
                    <input 
                        type="text" 
                        id="location"
                        placeholder="Bamenda, Cameroon"
                        value={location} 
                        onChange={(e) => setLocation(e.target.value)} 
                    />
                    <label htmlFor="contact">Phone Number</label>
                    <input 
                        type="tel"
                        id="contact"
                        placeholder="(+237) 6XX-XX-XX-XX"
                        value={contact} 
                        onChange={(e) => setContact(e.target.value)} 
                    />
                    <label htmlFor="description">About Me</label>
                    <textarea 
                        id="description" 
                        placeholder="A brief professional summary..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button type="submit" className="save-button">Save</button>
                </form>
            </div>
        );
    }

    return (
        <div className="info-display">
            <h2>General Information</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Address:</strong> {location}</p>
            <p><strong>Phone:</strong> {contact}</p>
            <p><strong>About Me:</strong> {description}</p>
            <button onClick={() => setIsEditing(true)} className="edit-button">Edit</button>
        </div>
    );
}

export default GeneralInfo;