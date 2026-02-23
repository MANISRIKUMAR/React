function Product({product}){
    return (
        <div className="bg-white rounded-x1 shadow-md hover:shadow-2xl transition duration-300 p-5">
<img
src={product.image}
alt={product.name}
className="w-full h-52 object-cover rounded-lg mb-4"
/>

        <p className="text-xl font-semibold">
       Brand: {product.name}</p>

       <p className="text-gray-600 text-sm my-3">
        {product.description}
       </p>
    
    <p className="text-lg font-bold text-indigo-600">
        ${product.price}
    </p>
        </div>
    )
}
export default Product