"use client";
import Image from "next/image";

export default function HotelBlock({ id, name, capacity }) {
  const imageLoader = ({ src }) => {
    return `./hotels/${src}.jpeg`;
  };
  return (
    <div className="flex flex-col gap-2 p-4 border border-gray-200 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p>Capacity: {capacity}</p>
      <Image src={id} width={300} height={200} loader={imageLoader} alt={name} />
    </div>
  );
}

// export default function AdvancedHotelBlock({ hotel }) {
//   return (
//     <div className="flex flex-col gap-2 p-4 border border-gray-200 rounded-lg shadow-sm">
//       <h2 className="text-xl font-semibold">{hotel.name}</h2>
//       <p>{hotel.description}</p>
//       <div className="flex gap-2">
//         <span className="text-sm font-semibold">Price:</span>
//         <span>{hotel.price}</span>
//       </div>
//       <div className="flex gap-2">
//         <span className="text-sm font-semibold">Rating:</span>
//         <span>{hotel.rating}</span>
//       </div>
//     </div>
//   );
// }
