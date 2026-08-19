// === Module 13932: useReanimatedTransitionProgress ===

// Module 13932 (useReanimatedTransitionProgress)
import noopDefault from "noop" /* 13930 */;
import noop from "noop" /* 19 */;


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