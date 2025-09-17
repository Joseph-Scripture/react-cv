import { useState } from 'react';
// import GeneralInfo from './GeneralInfo'; 
import GeneralInfo from './eductation/generalinfo'
import EducationComponent from './eductation/education';
import Experience from './eductation/experience'
import './App.css';


function App() {
  // State for General Info
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState(''); 
  const [description, setDescription] = useState('');

  // State for Education Info
  const [school, setSchool] = useState('');
  const [program, setProgram] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // State for working Experience

  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [workStart, setWorkStart] = useState('');
  const [workEnd, setWorkEnd] = useState('');


  return (
    <>
      <h1>CV Builder</h1>
      <div className="container">
        {/* Input Side */}
        <div className="input-section">
          <GeneralInfo 
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            location={location}
            setLocation={setLocation}
            contact={contact}
            setContact={setContact}
            description={description}
            setDescription={setDescription}
          />
          <EducationComponent
            school={school}
            setSchool={setSchool}
            program={program}
            setProgram={setProgram}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
          <Experience 
            company = {company}
            setCompany = {setCompany}
            workStart = {workStart}
            workEnd = {workEnd}
            role = {role}
            setRole = {setRole}
            setWorkStart = {setWorkStart}
            setWorkEnd = {setWorkEnd}
          
          
          />
        </div>

        {/* Preview Side */}
        <div className="display-area">
          <h2>CV Preview</h2>
          <div className="preview-section" >
            <h3>{name || "Your Name"}</h3>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Contact:</strong> {contact}</p>
            <p>{description}</p>
          </div>
          <div className="preview-section">
            <h3>Education</h3>
            <p><strong>School:</strong> {school}</p>
            <p><strong>Program:</strong> {program}</p>
            <p><strong>Dates:</strong> {startDate} to {endDate}</p>
          </div>
          <div className = 'preview-section'>
            <h3>Working Experience </h3>
            <p><strong>Company</strong>    :{company}</p>
            <p><strong>role</strong>: {role}</p>
            {/* <p><strong>workstart</strong>{company}</p> */}
            <span>{workStart} to {workEnd}</span>


          </div>
        </div>
      </div>
    </>
  );
}

export default App;