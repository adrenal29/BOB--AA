import React ,{useState,useEffect}from 'react'
import Navbar from '../components/Navbar'
import salaryPic from '../images/salary.png'
import emiPic from '../images/emi.png'
import medicalPic from '../images/medical.png'
import car from '../images/Car.png'
import '../css/analytics.css'
function Analytics () {
    const [analytics, setAnalytics] = useState([
    ])
    const referenceId = window.sessionStorage.getItem("referenceId");
    const trackingId = window.sessionStorage.getItem("trackingId");
    const [loader, setLoader] = useState(true);
    const [salary,setSalary]=useState(0);
    const [emi,setEmi]=useState(0);
    const [medical,setMedical]=useState(0);
    const [esop,setEsop]=useState(0);
    const [utility,setUtility]=useState(0);
    const [petrol,setPetrol]=useState(0);

  
    useEffect(() => {
      const setIt=()=>{
        setSalary(window.sessionStorage.getItem("salary"));
        setEmi(window.sessionStorage.getItem("emi"));
        setMedical(window.sessionStorage.getItem("medical"));
        setEsop(window.sessionStorage.getItem("esop"));
        setPetrol(window.sessionStorage.getItem("petrol"));
        setUtility(window.sessionStorage.getItem("utility"));

      }
      setIt()
    }, [])
    return (
        <div>
            <Navbar />
            <div className='bill'>
                <div>
                    <img src={salaryPic}></img>
                    <span></span>
                    <h3>Salary <br></br> {salary}</h3>
                </div>
                <div>
                    <img src={emiPic}></img>
                    <h3>EMI <br></br> {emi}</h3>
                </div>
                <div>
                    <img src={medicalPic}></img>
                    <h3>Medical <br></br> 15000</h3>
                </div>
                <div>
                <img src={emiPic}></img>
                    <h3>ESOPs <br></br> {esop}</h3>
                </div>
                <div>
                <img src={salaryPic}></img>
                    <h3>Utility <br></br> {utility}</h3>
                </div>
                <div>
                <img src={car}></img>
                    <h3>Petrol and Gas<br></br> {petrol}</h3>
                </div>
            </div>
        </div>
    )
}

export default Analytics;