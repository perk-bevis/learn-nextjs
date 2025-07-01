import { Metadata } from "next"

export const metadata: Metadata = {
    // title: "blog"
    title: {
        absolute: "blog",
    }
}

export default async function Blog(){
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve("done")
        },2000)
    })
    return (
        <h1>My blog</h1>
    )
}