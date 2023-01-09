import React from 'react'
import LoadingSpin from "react-loading-spin";
import '../css/dashboard.css'
function Loading() {
   
    return (
        <div className="load">
        <LoadingSpin
        primaryColor="#fe6634fa"
        secondaryColor='whitesmoke'
        />
    </div>
    )
}

export default Loading