import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function OrderSummary() {
    const navigate = useNavigate();
  return (
      <>
      <div>OrderCompleted</div>
      <button onClick={() => navigate(-1)}>Back</button>
      </>
    
  )
}
