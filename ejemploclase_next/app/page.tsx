import Link from "@/node_modules/next/link";

export default function Home() {
  return (
    <div>
      <h1>Hola IAW</h1>
      <Link href="/users"> Usuarios</Link>
    </div>
  );
}
