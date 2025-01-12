async function getData() {
  const response = await fetch('https://snowtooth-api-rest.fly.dev');
  return response.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">Lift Status Info</h1>
        {/* <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">{JSON.stringify(data)}</div> */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">Name</th>
                <th className="text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((lift) => (
                <tr key={lift.id}>
                  <td>{lift.name}</td>
                  <td>{lift.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
