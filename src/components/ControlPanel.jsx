import PropTypes from "prop-types";

const ControlPanel = ({ onStep }) => {
  return (
    <div className="mt-4">
      <button
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-1000 transform"
        onClick={onStep}
      >
        Step
      </button>
    </div>
  );
};

ControlPanel.propTypes = {
  onStep: PropTypes.func.isRequired,
};

export default ControlPanel;
