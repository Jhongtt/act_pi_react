import Image from "next/image";
import Link from "next/link";

export default function CarCard({ id, marca, modelo, precio, imagen }) {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-md hover:shadow-lg transition">
      <Image 
        src="/Carro1.jpg"
        alt={`${marca} ${modelo}`} 
        width={300} 
        height={200} 
        className="rounded-lg object-cover" 
      />
       <Image 
        src="/Carro2.jpg"
        alt={`${marca} ${modelo}`} 
        width={300} 
        height={200} 
        className="rounded-lg object-cover" 
      />
       <Image 
        src="/Carro3.jpg"
        alt={`${marca} ${modelo}`} 
        width={300} 
        height={200} 
        className="rounded-lg object-cover" 
      />
      <h2 className="text-xl font-bold mt-2">{marca} {modelo}</h2>
      <p className="text-gray-700">Precio: ${precio}</p>
      <Link href={`/autos/${id}`} className="text-blue-500 hover:underline">
        Ver más
      </Link>
    </div>
  );
}