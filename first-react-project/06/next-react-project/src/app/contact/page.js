export default function Page() {
  return (
    <div className="grid grid-rows items-center justify-items-center min-h-screen">
      <main className="flex flex-col gap-8 row-start-2 items-center lg:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Contact Us
        </h1>
        <form className="flex flex-col gap-4 w-full">
          <label htmlFor="name" className="flex flex-col gap-1">
            <span className="text-sm font-bold">Name</span>
            <input
              type="text"
              name="name"
              id="name"
              className="p-2 border border-gray-300 rounded"
              required
            />
          </label>
          <label htmlFor="email" className="flex flex-col gap-1">
            <span className="text-sm font-bold">Email</span>
            <input
              type="email"
              name="email"
              id="email"
              className="p-2 border border-gray-300 rounded"
              required
            />
          </label>
          <label htmlFor="message" className="flex flex-col gap-1">
            <span className="text-sm font-bold">Message</span>
            <textarea
              name="message"
              id="message"
              className="p-2 border border-gray-300 rounded"
              row="4"
              required
            />
          </label>
          <button type="submit" className="bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600">
            Send
          </button>
        </form>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
