import React, { useEffect, useState } from 'react'
import '../css/dashboard.css'
import Loading from './Loading';
import Navbar from './Navbar';
import Account from '../components/Account.js'

function Dashboard() {
    const [account, setAccount] = useState([
    ])
    const referenceId = window.sessionStorage.getItem("referenceId");
    const trackingId = window.sessionStorage.getItem("trackingId");
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        const status = async function () {
            const result = await fetch(`https://hackathon.pirimidtech.com/hackathon/consent/status?trackingId=${trackingId}&referenceId=${referenceId}`, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    "API_KEY": "6595c813313aa97c6f56ce70bc"
                }
            })
            const data = await result.json();
            console.log(data)
            console.log(data.dataDetails[0].sessionId)
            window.sessionStorage.setItem('id', data.dataDetails[0].sessionId)
            if (data.status === "COMPLETED") {
                const id = window.sessionStorage.getItem('id');
                const info = await fetch(`https://hackathon.pirimidtech.com/hackathon/consent/data/fetch?trackingId=${trackingId}&referenceId=${referenceId}&sessionId=${id}`, {
                    method: "GET",
                    headers: {
                        "content-type": "application/json",
                        "API_KEY": "6595c813313aa97c6f56ce70bc"
                    }
                })
                const userData = await info.json();
                window.sessionStorage.setItem("userData", userData)
                window.sessionStorage.setItem("userTransaction", userData[0].Transactions)
                setAccount(userData)
                console.log(userData)
                setLoader(false)

            }
        }
        status();
    }, [])



    return (
        <>
            <Navbar />
            {loader ? <Loading /> : account.length && <Account userData={account} />}
        </>
    )

}

export default Dashboard