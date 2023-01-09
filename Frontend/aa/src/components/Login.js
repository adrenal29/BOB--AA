import React, { useState, useEffect } from 'react'
import '../css/login.css'
import Logo from '../images/BOB.png'
function Login() {
    const [phone, setPhone] = useState('')

    const login = async () => {

        const result = await fetch("https://hackathon.pirimidtech.com/hackathon/init/redirection", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "API_KEY": "6595c813313aa97c6f56ce70bc"
            },
            body: JSON.stringify({
                vuaId: phone + "@dashboard-aa-uat",
                templateType: "ONETIME",
                trackingId: "f35761ac-4a18-11e8-96ff-0277a9fbfed",
                redirectionUrl: "http://localhost:3000/dashboard"
            })
        })
        const data = await result.json();
        console.log(data)
        if (data.status == "INITIATED") {
            sessionStorage.setItem("referenceId", data.referenceId);
            sessionStorage.setItem("trackingId", data.trackingId);
            window.location.replace(data.redirectionUrl);
        }
    }
    return (
        <>
            <div className='loginCard'>
                <img src={Logo}></img>
                <h2>Login to BOB pfm with your KYC number</h2>
                <input type="tel" placeholder="+8960******" onChange={(e) => setPhone(e.target.value)} value={phone}></input>
                <button onClick={login}>Connect Now</button>
            </div>
        </>
    )
}

export default Login