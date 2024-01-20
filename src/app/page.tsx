export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2 className="text-4xl font-semibold">Traffic light example</h2>
      <div className="pt-20">
        <div className="flex bg-black p-10 rounded-xl border-4 border-neutral-600">
          <div className="traffic-light">
            <div className="h-40 w-40 rounded-full animate-red-loop"></div>
          </div>

          <div className="traffic-light ml-4">
            <div className="h-40 w-40 rounded-full animate-yellow-loop"></div>
          </div>

          <div className="traffic-light ml-4">
            <div className="h-40 w-40 rounded-full animate-green-loop"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
