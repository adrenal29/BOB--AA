import React, { useState } from 'react'
import GraphWork from './Graph';
import '../css/dashboard.css'
import { Line } from 'rc-progress'
import 'react-responsive-modal/styles.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Graph from './Graph';
function Account(props) {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [limit,setLimit]=useState(5000)
  const close=()=>{
    setOpen(false)
  }
  return (
    <>
      <h2 className='welcome'>Hi, {props.userData[0].Profile.Holders.Holder[0].name} welcome to <span>BOB </span> world PFM</h2>
      <div className='account'>
        <div className='genInfo'>

          <div className='balanceCard'>
            <pre> <span className='bal'>Balance</span>                                 <span className='type'>   {props.userData[0].Summary.type}</span> </pre>
            <h2>{props.userData[0].Summary.currentBalance} Rs</h2>
          </div>

          <div className='withdrawl'>
            <h3>Daily cash withdrawl limit</h3>
            <pre><h3>Daily Limit          {limit}</h3></pre>
            <pre><h3>Withdrawn            3000</h3></pre>
            <pre><h3>BALANCE              {limit-3000}</h3></pre>
            <Line percent={(3000/limit)*100} strokeWidth={2} strokeColor="#f39576fa" className='progress' />
            <br></br>
            <button onClick={onOpenModal}>Set Limit</button>
            <Modal open={open} onClose={onCloseModal} center>
              <h2>Simple centered modal</h2>
               <input placeholder='Enter limit for your daily expense' className='dailyLimit' onChange={(e) => setLimit(e.target.value)}></input>
               <button className='limitBtn' onClick={close}>Set Now</button>
            </Modal>
          </div>
         
        </div>
        <div className='graph'>
            <GraphWork />
          </div>
      </div>
    </>
  )
}

export default Account