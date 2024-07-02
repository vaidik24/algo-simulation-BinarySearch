import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const ArrayInput = ({ onStart, array, target }) => {
  const [inputArray, setInputArray] = useState(array.join(","));
  const [inputTarget, setInputTarget] = useState(target);

  useEffect(() => {
    setInputArray(array.join(","));
    setInputTarget(target);
  }, [array, target]);

  const handleStart = () => {
    const arrayParsed = inputArray.split(",").map(Number);
    onStart(arrayParsed, Number(inputTarget));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between w-full">
      <motion.h1
        className="text-4xl font-extrabold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        Binary Search Simulator
      </motion.h1>
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Setup Binary Search
        </h2>
        <div className="mb-4">
          <label
            htmlFor="array-input"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Array (comma-separated)
          </label>
          <motion.input
            id="array-input"
            type="text"
            placeholder="e.g., 1,3,5,7,9"
            value={inputArray}
            onChange={(e) => setInputArray(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            whileFocus={{ scale: 1.02 }}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="target-input"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Target Number
          </label>
          <motion.input
            id="target-input"
            type="number"
            placeholder="e.g., 5"
            value={inputTarget}
            onChange={(e) => setInputTarget(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            whileFocus={{ scale: 1.02 }}
          />
        </div>
      </div>
      <motion.button
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-1000 transform"
        onClick={handleStart}
      >
        Start Binary Search
      </motion.button>
    </div>
  );
};

ArrayInput.propTypes = {
  onStart: PropTypes.func.isRequired,
  array: PropTypes.arrayOf(PropTypes.number),
  target: PropTypes.number,
};

export default ArrayInput;
