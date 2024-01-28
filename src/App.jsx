import { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-500"
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-500"
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-500"
          >
            Blue
          </button>
          <button
          onClick={()=> setColor("Yellow")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-300'
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
