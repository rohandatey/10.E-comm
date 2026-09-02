// import React, { useState } from "react";

// const App = () => {
//   const [score, setScore] = useState(10);
//   return (
//     <div>
//       <h1 className="mx-3 mt-2">{score}</h1>
//       <button
//         onClick={() => setScore(101)}
//         className="px-4 py-3 bg-blue-600 text-white border-2 mx-2 rounded-md mt-3 cursor-pointer">
//         change here
//       </button>
//     </div>
//   );
// };
// export default App;

// -----------------------------------------------------------------

// make a change by useing String part

// import React, { useState } from "react";

// const App = () => {
//   const [changeValue, setChangeValue] = useState(false);
//   return (
//     <div className="px-4 py-2">
//       <h1>{changeValue.toString()}</h1>

//       <button
//         onClick={() => setChangeValue(!changeValue)}
//         className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4">
//         change here
//       </button>
//     </div>
//   );
// };

// export default App;

// -----------------------------------------------------------------

// make a counter with increase dereace reset

import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(100);
  return (
    <div>
      <h1 className="px-4 py-2">{count}</h1>

      <button
        onClick={() => setCount(count + 10)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md mx-3 cursor-pointer">
        increase value
      </button>

      <button
        onClick={() => setCount(count - 10)}
        className="px-4 py-2 bg-red-600 text-white rounded-md mx-3 cursor-pointer">
        decrease value
      </button>

      <button
        onClick={() => setCount(0)}
        className="px-4 py-2 bg-gray-600 text-white rounded-md mx-3 cursor-pointer">
        reset value
      </button>
    </div>
  );
};

export default App;
