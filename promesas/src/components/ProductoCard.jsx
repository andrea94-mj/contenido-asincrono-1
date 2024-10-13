

const ProductoCard = ({title, price, description, category, image, rating}) => {
    const {rate, count} = rating;

    return (
        <div>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>{description}</p>
            <p>Precio: {price} €</p>
            <p>Categoría: {category}</p>
            <p>Clasificación: {rate} ({count} comentarios)</p>
        </div>
    );
}

export default ProductoCard;