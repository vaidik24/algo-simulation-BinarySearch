import PropTypes from "prop-types";

const ControlPanel = ({ onStep }) => {
  return (
    <div className="mt-4 flex items-center justify-center">
      <button
        className="w-fit bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-1000 transform"
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
