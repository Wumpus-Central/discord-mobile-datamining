// _runtime/14444_useReanimatedTransitionProgress.js
import noopDefault from "14442_noop.js";
import closure_2 from "00019_noop.js";

export default function useReanimatedTransitionProgress() {
  const context = React.useContext(noopDefault);
  if (undefined === context) {
    const _Error = Error;
    error = new Error(
      "Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?",
    );
    throw error;
  } else {
    return context;
  }
}
