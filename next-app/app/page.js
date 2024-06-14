'use client'

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">This is Next JS Component</h1>
      <button
        onClick={() => router.push('/reactComp')}
        className="bg-blue-600 w-48 h-10 rounded"
      >View React Component</button>
    </main>
  );
}
