// === Module 14035: useReanimatedTransitionProgress ===

// Module 14035 (useReanimatedTransitionProgress)
import noopDefault from "noop" /* 14033 */;
import closure_2 from "noop" /* 19 */;


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