
import React from 'react'
import { useState, useEffect } from 'react';
import './index.css';

export default function UseEffect() {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                if (!res.ok) {
                    throw new Error("API Failed");
                }
                return res.json();
            })
            .then((data) => {
                setUser(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container">

            <h2>UseEffect API</h2>
            <h3>User Details</h3>

            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h2 className="error">{error}</h2>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Website</th>
                        </tr>
                    </thead>

                    <tbody>
                        {user.map((person) => {
                            return (
                                <tr key={person.id}>
                                    <td>{person.id}</td>
                                    <td>{person.name}</td>
                                    <td>{person.username}</td>
                                    <td>{person.email}</td>
                                    <td>{person.phone}</td>
                                    <td>{person.website}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}

        </div>
    );
}
