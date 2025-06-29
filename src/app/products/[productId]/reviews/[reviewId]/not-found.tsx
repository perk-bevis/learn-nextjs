"use client";
// hook dùng để lấy đường dẫn URL hiện tại.
import { usePathname } from "next/navigation"

export default function NotFound(){
   const pathname = usePathname();
   const productId = pathname.split("/")[2];
   const reviewId = pathname.split("/")[4];
   return (
    <div>
        <h2>page not found {productId} and {reviewId}</h2>
    </div>
   )
}