import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    birthDate: '',
    email: '',
    phoneNumber: '',
    gender: '',
    startTime: '',
    endTime: '',
    jobPosition: '',
    team: '',
    designation: '',
    billableHours: '',
    isBillable: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted:', formData);
      setErrors({});
      alert('Your Form is Submitted Successfully');
  
      setFormData({
        firstName: '',
        middleName: '',
        lastName: '',
        birthDate: '',
        email: '',
        phoneNumber: '',
        gender: '',
        startTime: '',
        endTime: '',
        jobPosition: '',
        team: '',
        designation: '',
        billableHours: '',
        isBillable: false,
      });
    }
  };
  
  

  const validateForm = (data) => {
    const errors = {};
    if (!data.firstName) errors.firstName = 'First Name is required';
    if (!data.lastName) errors.lastName = 'Last Name is required';
    if (!data.birthDate) errors.birthDate = 'Date is required';
    if (!data.email) errors.email = 'Email is required';
    if (!data.phoneNumber) errors.phoneNumber = 'Phone Number is required';
    if (!data.gender) errors.gender = 'Gender is required';
    if (!data.startTime) errors.startTime = 'Start Time is required';
    if (!data.endTime) errors.endTime = 'End Time is required';
    if (!data.jobPosition) errors.jobPosition = 'Job Position is required';
    if (!data.team) errors.team = 'Required';
    if (!data.designation) errors.designation = 'Required';
    if (!data.billableHours || isNaN(data.billableHours)) errors.billableHours = 'Billable Hours is required and must be a positive number';
    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Employee Form</h2>

      <div className='row1'>
        <div>
          <label>First Name</label>
          <input 
            type="text" 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
            className={errors.firstName ? 'error' : ''} 
          />
          {errors.firstName && <span>{errors.firstName}</span>}
        </div>

        <div>
          <label>Middle Name</label>
          <input 
            type="text" 
            name="middleName" 
            value={formData.middleName} 
            onChange={handleChange} 
          />
        </div>

        <div>
          <label>Last Name</label>
          <input 
            type="text" 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange} 
            className={errors.lastName ? 'error' : ''} 
          />
          {errors.lastName && <span>{errors.lastName}</span>}
        </div>
      </div>

      <div className='row2'>
        <div>
          <label>Birth Date</label>
          <input 
            type="date" 
            name="birthDate" 
            value={formData.birthDate} 
            onChange={handleChange} 
            className={errors.birthDate ? 'error' : ''} 
          />
          {errors.birthDate && <span>{errors.birthDate}</span>}
        </div>

        <div>
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className={errors.email ? 'error' : ''} 
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div>
          <label>Phone Number</label>
          <input 
            type="tel" 
            name="phoneNumber" 
            value={formData.phoneNumber} 
            onChange={handleChange} 
            className={errors.phoneNumber ? 'error' : ''} 
          />
          {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
        </div>
      </div>

      <div className='row3'>
        <div>
          <label>Select Gender</label>
          <select 
            name="gender" 
            value={formData.gender} 
            onChange={handleChange} 
            className={errors.gender ? 'error' : ''} 
          >
            <option value="">Choose Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span>{errors.gender}</span>}
        </div>

        <div>
          <label>Start Time</label>
          <input 
            type="time" 
            name="startTime" 
            value={formData.startTime} 
            onChange={handleChange} 
            className={errors.startTime ? 'error' : ''} 
          />
          {errors.startTime && <span>{errors.startTime}</span>}
        </div>

        <div>
          <label>End Time</label>
          <input 
            type="time" 
            name="endTime" 
            value={formData.endTime} 
            onChange={handleChange} 
            className={errors.endTime ? 'error' : ''} 
          />
          {errors.endTime && <span>{errors.endTime}</span>}
        </div>
      </div>

      <div className='row4'>
        <div>
          <label>Job Position</label>
          <input 
            type="text" 
            name="jobPosition" 
            value={formData.jobPosition} 
            onChange={handleChange} 
            className={errors.jobPosition ? 'error' : ''} 
          />
          {errors.jobPosition && <span>{errors.jobPosition}</span>}
        </div>

        <div>
          <label>Select Teams</label>
          <select 
            name="team" 
            value={formData.team} 
            onChange={handleChange} 
            className={errors.team ? 'error' : ''} 
          >
            <option value="">Select...</option>
            <option value="team1">Team 1</option>
            <option value="team2">Team 2</option>
          </select>
          {errors.team && <span>{errors.team}</span>}
        </div>

        <div>
          <label>Select Designation</label>
          <select 
            name="designation" 
            value={formData.designation} 
            onChange={handleChange} 
            className={errors.designation ? 'error' : ''} 
          >
            <option value="">Select...</option>
            <option value="designation1">Project Manager</option>
            <option value="designation2">Team Leader</option>
            <option value="designation1">Technical Lead</option>
            <option value="designation2">Computer support Specialist</option>
          </select>
          {errors.designation && <span>{errors.designation}</span>}
        </div>
      </div>

    <div className='row5'>
      <div>
          <label>Billable Hours</label>
          <input 
            type="number" 
            name="billableHours" 
            min="1"
            value={formData.billableHours} 
            onChange={handleChange} 
            className={errors.billableHours ? 'error' : ''} 
          />
          {errors.billableHours && <span>{errors.billableHours}</span>}
        </div>

        <div>
          <label>Is Billable?</label>
          <input 
            type="checkbox" 
            name="isBillable" 
            checked={formData.isBillable} 
            onChange={handleChange} 
          />
        </div>
    </div>

      <button type="submit">Submit</button>
    </form>
  );
};

ReactDOM.render(<EmployeeForm />, document.getElementById('root'));
