import HotelBlock from "./HotelBlock";
// import AdvancedHotelBlock from "./HotelBlock";

async function getData() {
  const response = await fetch("https://snowtooth-hotel-api.fly.dev");
  return response.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Hotels Info
        </h1>
        {/* <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">{JSON.stringify(data)}</div> */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {data.map((hotel) => (
            <HotelBlock
              id={hotel.id}
              key={hotel.id}
              name={hotel.name}
              capacity={hotel.capacity}
            />
          ))}
        </div>
        {/* <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {data.map((hotel) => (
            <AdvancedHotelBlock key={hotel.id} hotel={hotel} />
          ))}
        </div> */}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
