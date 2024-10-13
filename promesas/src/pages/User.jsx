import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchUser();
    }
    , [id]);

    const fetchUser = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/users/${id}`);
            const data = await response.json();
            setUser(data);
        }
        catch (error) {
            console.error(error);
        }
    }

    const { name, email, phone, website } = user;

    return (
        <div>
            <h1>Usuario</h1>
            <p>Nombre: {name}</p>
            <p>Teléfono: {phone}</p>
            <p>Email: {email}</p>
            <p>Web: {website}</p>
        </div>
    );
}

export default User;