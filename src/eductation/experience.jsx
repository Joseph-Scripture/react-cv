import React, { useState } from 'react';

function Experience({ company, setCompany, workStart, setWorkStart, workEnd, setWorkEnd, role, setRole }) {

    const [isEditing, setIsEditing] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    if (isEditing) {
        return (
            <div className='experience education'>
                <form onSubmit={handleSubmit}>
                    <h2>Experience</h2>
                    <label htmlFor="company">Company</label>
                    <input
                        type="text"
                        name="company"
                        id="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Google"
                    />
                    <label htmlFor="role">Role</label>
                    <input
                        type="text"
                        name="role"
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        placeholder="Software Engineer"
                    />
                    <label htmlFor="workstart">Start Date</label>
                    <input
                        type="date"
                        name="workstart"
                        id="workstart"
                        value={workStart}
                        onChange={(e) => setWorkStart(e.target.value)}
                    />
                    <label htmlFor="workend">End Date</label>
                    <input
                        type="date"
                        name="workend"
                        id="workend" 
                        value={workEnd}
                        onChange={(e) => setWorkEnd(e.target.value)} 
                    />
                    <button type="submit" className="save-button">Save</button>
                </form>
            </div>
        );
    }

    return (
        <div className="experience-display">
            <h2>Experience</h2>
            <p><strong>Company:</strong> {company}</p>
            <p><strong>Role:</strong> {role}</p>
            <p><strong>Dates:</strong> {workStart} to {workEnd}</p>
            <button onClick={() => setIsEditing(true)} className="edit-button">Edit</button>
        </div>
    );
}

export default Experience;