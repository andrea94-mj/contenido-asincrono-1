import { useState, useEffect } from "react";
import ProductoCard from "../components/ProductoCard";
import '../css/StoreApi.css';

const StoreApi = () => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        obtenerProductos();
    }, []);

    const obtenerProductos = async () => {
        try {
            const respuesta = await fetch('https://fakestoreapi.com/products');
            if (!respuesta.ok) throw new Error('Error al cargar los productos');
            const datos = await respuesta.json();
            setProductos(datos);
        } catch (err) {
            setError(err.message);
        } finally {
            setCargando(false);
        }
    }

    if (cargando) {
        return <p>Cargando productos...</p>;
    }

    if (error) {
        return <p>Ocurrió un error: {error}</p>;
    }

    return (
        <div className="tienda-container">
            <h1>Tienda virtual</h1>
            <p>Explora nuestros productos:</p>
            <div className="productos-lista">
                {productos.length === 0 ? (
                    <p>No hay productos disponibles</p>
                ) : (
                    productos.map((producto) => (
                        <ProductoCard key={producto.id} {...producto} />
                    ))
                )}
            </div>
        </div>
    );
}

export default StoreApi;