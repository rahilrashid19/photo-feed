import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome To Photo Feed Application</h1>
      <Link href="/photo-feed">
        <button className="bg-blue-600 border border-blue-800 p-3 m-2 cursor-pointer rounded-md hover:bg-blue-500">
          Photo Feed
        </button>
      </Link>
    </main>
  );
}
