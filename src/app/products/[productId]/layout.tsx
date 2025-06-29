// chứa bộ cục đặc biệt chỉ dành cho [productId]
export default function productLayout({
    children,
} : {
    children: React.ReactNode
}){
    return (
        <>
        {children}
        <h2>Feature Product</h2>
        </>
    )
}