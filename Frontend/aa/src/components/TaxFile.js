import React,{useState} from 'react'
import Navbar from './Navbar'
import '../css/budget.css'
import RangePicker from "react-range-picker";
function TaxFile() {
    const onDateChanges = (date, date2) => {
        console.log(" date is ",date,date2);
      }
      const [startDate,setStart]=useState('../../..')
      const [endDate,setEnd]=useState('../../..')
      const [email,setEmail]=useState("xyz@comapnay.in")

  return (
    <div>
        <Navbar/>
        <h2 className='headTax'>Select date to share data with your employer</h2>
        <div className='date'>
        <RangePicker onDateSelected={onDateChanges} className="datePick"/>
        </div>
        <div className='emailPanel'>
        <h3 >Enter your employers email</h3>
        <input placeholder='xyz@company.in'></input>
        </div>
        <div className='submitToast'>
        <pre>Sharing your salary inforamtion from {startDate} to {endDate} to {email}</pre>
        <button className='taxBtn'>Share Now</button>
        </div>
    </div>
  )
}

export default TaxFile