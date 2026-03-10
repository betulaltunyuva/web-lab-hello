function UIkit() {
  return (
    <div className="p-8 space-y-6">

      <h1 className="text-3xl font-bold">UI Kit</h1>

      {/* BUTTONS */}
      <div className="space-x-2">
        <button className="bg-blue-600 text-white px-4 py-2">Primary</button>
        <button className="bg-gray-500 text-white px-4 py-2">Secondary</button>
        <button className="bg-green-600 text-white px-4 py-2">Success</button>
        <button className="bg-red-600 text-white px-4 py-2">Danger</button>
      </div>

      {/* INPUT */}
      <input className="border p-2 w-full" placeholder="Normal input" />
      <input className="border p-2 w-full border-red-500" placeholder="Error input" />

      {/* ALERT */}
      <div className="bg-blue-100 p-2">Info</div>
      <div className="bg-green-100 p-2">Success</div>
      <div className="bg-yellow-100 p-2">Warning</div>
      <div className="bg-red-100 p-2">Error</div>

      {/* CARD */}
      <div className="border p-4">Card 1</div>
      <div className="border p-4 bg-gray-100">Card 2</div>

    </div>
  );
}

export default UIkit;