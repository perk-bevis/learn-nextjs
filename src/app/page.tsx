import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
     <h1>welcome home</h1>
     <Link href={"/blog"}>Blog</Link>
     <Link href={"/products"}>Products</Link>
     <Link href={"/articles/breaking-news-123?lang=en"}> Read in english</Link>
     <Link href={"/articles/breaking-news-123?lang=fr"}> read in french </Link>
    </>
  )
}
