import React from "react";

function EducationComponent({ school, startDate, endDate, program, setSchool, setEndDate, setStartDate, setProgram }) {

    return (
        <div className="education">
            <h2>Education</h2>
            <label htmlFor="school">School</label>
            <input 
                type="text"
                id="school"
                placeholder="University of Knowledge"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
            />
            <label htmlFor="program">Program</label>
            <input 
                type="text" 
                id="program"
                placeholder="B.Sc. in Computer Science"
                value={program}
                onChange={(e) => setProgram(e.target.value)}
            />
            <label htmlFor="start-date">Start Date</label>
            <input 
                type="date"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            <label htmlFor="end-date">End Date</label>
            <input 
                type="date"
                id="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />
        </div>
    );
}

export default EducationComponent;