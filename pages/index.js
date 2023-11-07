import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h2>Hello World</h2>
      <Link href="/posts/first-post">link</Link>
    </div>
  );
}
