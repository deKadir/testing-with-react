import React from 'react';

const Application = () => {
  return (
    <form>
      <h1>Job Application Form</h1>
      <h2>Section 1</h2>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Fullname" value="Kadir" onChange={() => {}} />
      </div>

      <div>
        <label htmlFor="bio">Bio</label>
        <textarea id="bio" name="bio" />
      </div>

      <div>
        <label htmlFor="job-location">Job location</label>
        <select id="job-location">
          <option value="">Select a country</option>
          <option value="US">United States</option>
          <option value="GB">United Kingdom</option>
          <option value="CA">Canada</option>
          <option value="IN">India</option>
          <option value="AU">Avustralia</option>
        </select>
      </div>
      <div>
        <label>
          <input type="checkbox" id="terms" />I agree the terms and conditions
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Application;
