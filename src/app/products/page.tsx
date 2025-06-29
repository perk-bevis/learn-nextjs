import Link from "next/link"

export default function ProductList(){
    const productId = 100;
    return (
        <>
        <Link href={"/"}>Home</Link>
        <h1>product list</h1>
        <h2>
            <Link href={`/products/${productId}`}>product {productId}</Link>
        </h2>
        <h3>product 2</h3>
        <h4>product 3</h4>
        </>
    )
}