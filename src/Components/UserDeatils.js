import React, { useEffect } from 'react'
import {useParams, useSearchParams} from"react-router-dom"

export default function UserDeatils() {
    const {userId} = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    useEffect(()=>{
        setSearchParams({test:"abc"})
    },[])
  return (
    <div>UserDeatils {userId} - {searchParams.get('debug')}</div>
  )
}
