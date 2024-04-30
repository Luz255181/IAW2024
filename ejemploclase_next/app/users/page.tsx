import React from 'react'

const userspage = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // recupero un json de la red
    const users: User[] = await response.json();

    //Creo una interface para saber el tipo de datos que tiene el usuario
    interface User {
        id: number;
        name: string;
    }

    return (
        <div>
            <div>UsersPage</div>
            <p> {new Date().toLocaleTimeString()}</p>
            <ul>
                {users.map((user) => (
                    <li key={user.id} > {user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default userspage
