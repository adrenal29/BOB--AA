import React,{useState} from 'react'
import Navbar from './Navbar'
import { Line } from 'rc-progress'
import car from '../images/Car.png'
import { Modal } from 'react-responsive-modal';
import emi from '../images/emi.png'
import '../css/budget.css'
function Budget() {
    console.log(window.sessionStorage.getItem("id"))
    const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
    return (
        <div className='budget'>
            <Navbar />
            <div className='mainPanel'>
                <div className='score'>
                    <div className='entertainment'>
                        <h3>Your Monthly entertainment score</h3>
                        <div >
                            <Line percent={60} strokeWidth={2} strokeColor="#f39576fa" className='progress' />
                        </div>
                        <pre>Allocated :   2000</pre>
                        <pre>Used :        1200</pre>
                    </div>
                    <div className='utility'>
                        <h3>Your Monthly utility score</h3>
                        <div >
                            <Line percent={75} strokeWidth={2} strokeColor="#f39576fa" className='progress' />
                        </div>
                        <pre>Allocated :   4000</pre>
                        <pre>Used :        3000</pre>
                    </div>
                </div>
                <div className='setDebit'>
                    <h3>Set auto debit for recurring bills by connecting <br></br>with your vendor</h3>
                    <div className='connect'>
                        <div>
                            <h3>Transportation</h3>
                            <img src={car}></img>
                            <button onClick={onOpenModal}>Connect Now</button>
                            <Modal open={open} onClose={onCloseModal} center>
                                <h2>Add Payment Details</h2>
    
                                <h3>Set reciever account number</h3>
                                <input placeholder='XXXX XXXX XXXX' className='modelInput'></input>
                                <h3>Select recurring deposit date</h3>
                                <input type='number' className='modelInput'></input>
                                <br>
                                </br>
                               <button className='modelBtn'>Start Now</button>
                            </Modal>
                        </div>
                        <div>
                            <h3>Water bill</h3>
                            <img src={emi}></img>
                            <button>Connect Now</button>
                        </div>
                        <div>
                            <h3>Electricity Bill</h3>
                            <img src={emi}></img>
                            <button>Connect Now</button>
                        </div>
                        <div>
                            <h3>Other</h3>
                            <img src={car}></img>
                            <button>Connect Now</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Budget