import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    console.log(user)
    
    if(!user || !user.username || !user.password) return <div>Please Login With valid userId and password</div>
    
    return <div>Welcome {user.username}</div>
}

export default Profile
