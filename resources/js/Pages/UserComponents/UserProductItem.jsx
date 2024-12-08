import PrimaryButton from '@/Components/PrimaryButton';

const UserProductItem = ({ product, onAddToCart }) => {
    // Ensure price is treated as a number
    const price = Number(product.price);

    return (
        <div className="border p-4 rounded shadow text-center">
            <h2 className="text-lg font-bold">{product.product_name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-blue-500 font-semibold">${price.toFixed(2)}</p>
            <p className="text-sm">
                Availability:{" "}
                <span className={product.available_quantity > 0 ? "text-green-500" : "text-red-500"}>
                    {product.available_quantity > 0 ? "Available" : "Unavailable"}
                </span>
            </p>
            {product.available_quantity > 0 && (
                <div className="d-flex justify-content-center mt-3">
                    <PrimaryButton onClick={() => onAddToCart(product)}>
                        Add to Cart
                    </PrimaryButton>
                </div>
            )}
        </div>
    );
};

export default UserProductItem;
