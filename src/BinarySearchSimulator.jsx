import { useState } from "react";
import axios from "axios";
import ArrayInput from "./components/ArrayInput";
import Visualization from "./components/Visualization";
import ControlPanel from "./components/ControlPanel";
import { motion } from "framer-motion";
import "./index.css";

const BinarySearchSimulator = () => {
  const backend_url = "https://algo-simulation-backend.onrender.com/";
  const [array, setArray] = useState([]);
  const [target, setTarget] = useState(null);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [mid, setMid] = useState(null);
  const [found, setFound] = useState(false);
  const [error, setError] = useState("");
  const [started, setStarted] = useState(false);

  // useEffect(() => {
  //   setRight(array.length - 1);
  //   setMid(Math.floor((left + (array.length - 1)) / 2));
  // }, [array, left]);

  const isArraySorted = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  };

  const startSearch = async (array, target) => {
    if (!isArraySorted(array)) {
      setError("The array must be sorted for binary search.");
      return;
    }

    try {
      const response = await axios.post(`${backend_url}start`, {
        array,
        target,
      });
      const { left, right, mid, found } = response.data;
      setArray(array);
      setTarget(target);
      setLeft(left);
      setRight(right);
      setMid(mid);
      setFound(found);
      setError("");
      setStarted(true);
    } catch (error) {
      console.error("Error starting search:", error);
    }
  };

  const stepSearch = async () => {
    try {
      const response = await axios.post(`${backend_url}step`, {});
      const { left, right, mid, found } = response.data;
      setLeft(left);
      setRight(right);
      setMid(mid);
      setFound(found);
    } catch (error) {
      console.error("Error stepping search:", error);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-custom-bg bg-cover bg-center bg-opacity-5">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      {error && (
        <motion.div
          className="text-red-500 mb-4 p-3 bg-red-100 rounded-md shadow z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {error}
        </motion.div>
      )}

      <div className="w-full max-w-4xl z-10">
        <motion.div
          className="w-full mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ArrayInput onStart={startSearch} array={array} target={target} />
        </motion.div>
        {started && (
          <motion.div
            className="w-full bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Visualization
              array={array}
              left={left}
              right={right}
              mid={mid}
              target={target}
              found={found}
            />
            <ControlPanel onStep={stepSearch} />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BinarySearchSimulator;
