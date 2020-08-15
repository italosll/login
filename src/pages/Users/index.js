import React, { useState, useEffect } from 'react'
import './index.css'
import logo from '../../assets/images/moyyn.png'
import ItemUser from '../../components/ItemUser'
import api from '../../services/api';

function Users_list(){

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        api.get('users').then(async(response) =>{
            const total = await response.data;
            setUsers(total);
        })
    },[]);

    return( 
        <div className="body">
            <header id="navigation-bar">
                    <img src={logo} alt="Logo" className="logo"/>
                    <div id="top-nav-container">
                        <a href="#home">Home</a>
                        <a href="#news">News</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                    </div>
                </header>

                <main>

                    {
                        users.map((user,i) =>{
                            return(
                                <ItemUser 
                                    key={i}
                                    name={user.name}
                                    email={user.email}
                                    address={user.address.city}
                                />
                            )
                        })
                    }
                </main>
        </div>
    )
}

export default Users_list;