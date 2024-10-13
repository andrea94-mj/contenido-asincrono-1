import { useParams } from 'react-router-dom';

const Producto = () => {
    const [producto, setProducto] = useState(null);
    const [error, setError] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        obtenerProducto();
    }, [id]);

    const obtenerProducto = async () => {
        try {
            const respuesta = await fetch(`https://fakestoreapi.com/products/${id}`);
            if (!respuesta.ok) throw new Error('No se pudo cargar el producto');
            const datos = await respuesta.json();
            setProducto(datos);
        } catch (err) {
            setError(err.message);
    };

    if (cargando) {
        return <p>Cargando detalles del producto...</p>;
    }


    return (
        <div className="detalle-producto">
            <h1>{producto.title}</h1>
            <img src={producto.image} alt={producto.title} className="imagen-producto" />
            <p>{producto.description}</p>
            <p>Precio: ${producto.price}</p>
            <p>Categoría: {producto.category}</p>
        </div>
    );
}
}
export default Producto