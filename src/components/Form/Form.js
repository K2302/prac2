import React, { useState } from "react";
import "./form.css";
import { submitRecord } from "../../store/interactions";
import { useDispatch, useSelector } from "react-redux";
const Form = () => {
  const provider = useSelector((state) => state.provider.connection);
  const medical = useSelector((state) => state.medical.contract);
  const account=useSelector((state)=>state.provider.account);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    submitRecord(
      name,
      age,
      gender,
      bloodType,
      allergies,
      diagnosis,
      treatment,
      provider,
      medical,
      dispatch
    );
    setName(0);
    setAge(0);
    setGender(0);
    setBloodType(0);
    setAllergies(0);
    setDiagnosis(0);
    setTreatment(0);
  };
  const [name, setName] = useState(0);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState(0);
  const [bloodType, setBloodType] = useState(0);
  const [allergies, setAllergies] = useState(0);
  const [diagnosis, setDiagnosis] = useState(0);
  const [treatment, setTreatment] = useState(0);

  return (
    <div className="login-container">
      <h1></h1>
    {account?( <form onSubmit={submitHandler}>
        <h1>Education Fund Details</h1>

        <label htmlFor="name">Project Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name === 0 ? "" : name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Type the fund details"
        />

        <label htmlFor="age">Amount Allocated (In Crore)</label>
        <input
          type="number"
          id="age"
          name="age"
          required
          placeholder="Please Type the amount"
          value={age === 0 ? "" : age}
          onChange={(e) => setAge(e.target.value)}
        /> 
        <label htmlFor="status">Current Status</label>
        <select
          id="status"
          name="status"
          required
          onChange={(e) => setGender(e.target.value)}
          value={gender === 0 ? "" : gender}
        >
         
          <option value="Will be disbursed">Will be disbursed</option>
          <option value="Partially disbursed">Partially disbursed</option>
          <option value="Fully disbursed">Fully disbursed</option>
        </select>
        <label htmlFor="address">Fund type:</label>
        <select
          type="text"
          id="name"
          name="name"
          required
          placeholder="Admission Fees"
          value={bloodType === 0 ? "" : bloodType}
          onChange={(e) => setBloodType(e.target.value)}
        >
          <option value="">Select Type</option>
          <option value="Admission Fees">Admission Fees</option>
          <option value="Hostel Fees">Hostel Fees</option>
          <option value="For Books">For Books</option>
          <option value="Others">Others</option>
        </select>
  
        <label htmlFor="address">Institute Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="NIT Silchar"
          value={allergies === 0 ? "" : allergies}
          onChange={(e) => setAllergies(e.target.value)}
        />
        <label htmlFor="address">Project Details </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="For Admission Fees"
          value={diagnosis === 0 ? "" : diagnosis}
          onChange={(e) => setDiagnosis(e.target.value)}
        />


        <input type="submit" value="Submit" />
      </form>):(
        <h1>Connect the account</h1>
      )}
     
    </div>
  );
};

export default Form;
