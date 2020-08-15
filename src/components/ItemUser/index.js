import React from 'react'
import './index.css'



function ItemUser({name,email,address,}){



    


    return(
        <div id="user">
            <span id="item1">Name: {name}</span>
            <span id="item2">Email: {email}</span>
            <span id="item3">City: {address}</span>
        </div>
    )
}

export default ItemUser;