// _runtime/13736_useReanimatedTransitionProgress.js
import noop from "noop";


export default function useReanimatedTransitionProgress() {
  const context = React.useContext(require("13734_noop.js"));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};