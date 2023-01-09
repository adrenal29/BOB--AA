import React, { useState, useEffect } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import '../css/dashboard.css'
function Graph() {
  const [analytics, setAnalytics] = useState([
  ])
  const referenceId = window.sessionStorage.getItem("referenceId");
  const trackingId = window.sessionStorage.getItem("trackingId");
  const [loader, setLoader] = useState(true);
  const [credit, setCredit] = useState(0);
  const [debit, setDebit] = useState(0);
  const [cdRatio,setcdRatio]=useState(0);
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
      window.sessionStorage.setItem('id', data.dataDetails[0].sessionId)
      if (data.status === "COMPLETED") {
        const id = window.sessionStorage.getItem('id');
        const info = await fetch(`https://hackathon.pirimidtech.com/hackathon/consent/analytics/fetch?trackingId=${trackingId}&referenceId=${referenceId}&sessionId=${id}`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
            "API_KEY": "6595c813313aa97c6f56ce70bc"
          }
        })
        const userAnalytics = await info.json();
        setAnalytics(userAnalytics.analytics)
        console.log(userAnalytics.analytics)
        setCredit(userAnalytics.analytics.overallAnalysis.monthlyAnalytics[0].totalCreditAmount)
        setDebit(userAnalytics.analytics.overallAnalysis.monthlyAnalytics[0].totalDebitAmount)
        setcdRatio(userAnalytics.analytics.overallAnalysis.monthlyAnalytics[0].creditDebitRatio)
        window.sessionStorage.setItem("emi",userAnalytics.analytics.completeCategoryWiseAnalysis.monthlyCategoryWiseAnalysis.EMIs[0].totalDebitAmount)
        window.sessionStorage.setItem("salary",userAnalytics.analytics.completeCategoryWiseAnalysis.monthlyCategoryWiseAnalysis.Salary[0].totalCreditAmount)
       
        window.sessionStorage.setItem("health",userAnalytics.analytics.completeCategoryWiseAnalysis.monthlyCategoryWiseAnalysis['Health Care'][0].totalDebitAmount)
        window.sessionStorage.setItem("esop",userAnalytics.analytics.completeCategoryWiseAnalysis.monthlyCategoryWiseAnalysis['Insurance Premium'][0].totalDebitAmount)
        window.sessionStorage.setItem("petrol",userAnalytics.analytics.completeCategoryWiseAnalysis.monthlyCategoryWiseAnalysis.Transportation[0].totalDebitAmount)
        window.sessionStorage.setItem("utility",userAnalytics.analytics.completeCategoryWiseAnalysis.monthlyCategoryWiseAnalysis.Utilities[0].totalDebitAmount)
      }
    }
    status();
  }, [])

  return (
    <div className='notify'>
      <div>
        <h3>Notification for you</h3>
        <div className='announcements'>
          <p>No new announcemnets for now</p>
        </div>
      </div>
      <h3>Your expense of June 2022</h3>
      <div className='dc'>
      <PieChart className='pieChart'
        data={[
          { title: 'Credit', value: credit, color: '#febba4fa' },
          { title: 'Debit', value: debit, color: 'rgba(39, 110, 243, 0.988)' },

        ]}
      />
      <div className='dcInfo'>
      <span className='blue'>~~</span><h3>Total debit : Rs{debit}</h3>
      <span className='orange'>~~</span> <h3>Total credit : Rs{credit}</h3>
      <br></br>
      <h3> Credit vs Debit Ratio is : <u><i>{cdRatio}</i></u></h3>
      </div>
      
      </div>
    </div>
  )
}

export default Graph