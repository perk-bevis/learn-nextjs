import { notFound, redirect } from "next/navigation";
// Dynamic Routes

export default async function productRewiew( {params} : {
    params: Promise<{ productId: string; reviewId: string}>
}) {
    const {productId , reviewId} = await params
    if(parseInt(reviewId) > 1000){
        // notFound();
        redirect("/products")
    }
    return (
        <h1>product {productId} to {reviewId} </h1>
    )
}