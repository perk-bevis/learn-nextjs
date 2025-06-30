"use client"
// import { useRouter } from "next/router"
import { useRouter } from "next/navigation"
export default function OrderProduct() {
    const router = useRouter()
    const handleclick = () => {
        console.log("click thành công")
        router.push("/")
    }
    return (
        <div>
            <h1>Order Product</h1>
            <button onClick={handleclick}>place holder</button>
        </div>
    )
}