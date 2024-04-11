import React, { useEffect, useState } from 'react';
import "../header.css";
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Récupérer le nom d'utilisateur depuis le localStorage lors du chargement du composant
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('id'); 
        navigate('/');
    };

    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/">Shopping</a></li>
                    <li><a href="/about">About us</a></li>
                    <li><a href="/contact">Contact</a></li>
                    {username && <li>Welcome {username}</li>} {/* Afficher le nom d'utilisateur s'il existe */}
                    <li id='list-button'><button onClick={handleLogout} id='disconnect'>Disconnect</button></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;