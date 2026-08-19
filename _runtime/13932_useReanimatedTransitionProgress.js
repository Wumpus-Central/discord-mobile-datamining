// _runtime/13932_useReanimatedTransitionProgress.js
import noopDefault from "13930_noop.js";
import noop from "00019_noop.js";


export default function useReanimatedTransitionProgress() {
  const context = React.useContext(noopDefault);
  if (undefined === context) {
    const _Error = Error;
    error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};