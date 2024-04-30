import React from 'react'

const userspage = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // recupero un json de la red
    const users: User[] = await response.json();

    interface User {
        id: number;
        name: string;
    }

    return (
        <div>
            <h1>UsersPage</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id} > {user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default userspage
