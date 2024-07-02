import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Visualization = ({ array, left, right, mid, target, found }) => {
  const isGrid = array.length > 12;

  return (
    <div className="mt-3 flex flex-col items-center">
      <div className={`flex ${isGrid ? "flex-wrap justify-center" : ""}`}>
        {array.map((num, index) => (
          <motion.div
            key={index}
            className={`relative ${isGrid ? " m-0.5" : "mx-0"}`}
            animate={{
              scale:
                index === mid || index === left || index === right ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className={`inline-block ${
                isGrid ? "w-8 h-8" : "w-6 h-6"
              } flex items-center justify-center border-2 rounded-md ${
                index === mid
                  ? "bg-red-200 border-red-400"
                  : index === left || index === right
                  ? "bg-green-200 border-green-400"
                  : index > left && index < right
                  ? "bg-blue-100 border-blue-300"
                  : "border-gray-300"
              }`}
            >
              {num}
            </motion.span>
            {(index === left || index === right || index === mid) && (
              <motion.div
                className="absolute -top-4 transform -translate-x-1/2 flex"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {index === left && (
                  <span className="text-xs font-semibold text-green-600 mr-1">
                    L
                  </span>
                )}
                {index === right && (
                  <span className="text-xs font-semibold text-green-600 mr-1">
                    R
                  </span>
                )}
                {index === mid && (
                  <span className="text-xs font-semibold text-red-600">M</span>
                )}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
      {found !== null && (
        <motion.div
          className="mt-2 text-lg font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {!found && mid == -1
            ? "Target not found in the array"
            : mid == -1
            ? console.log("found: ", found)
            : found
            ? `Target ${target} found at index ${mid}`
            : ""}
          {right < 0 ||
          right >= array.length ||
          left < 0 ||
          left >= array.length
            ? "Array out of bounds. Element does not exist in array."
            : ""}
        </motion.div>
      )}
    </div>
  );
};

Visualization.propTypes = {
  array: PropTypes.arrayOf(PropTypes.number).isRequired,
  left: PropTypes.number,
  right: PropTypes.number,
  mid: PropTypes.number,
  target: PropTypes.number,
  found: PropTypes.bool,
};

export default Visualization;
