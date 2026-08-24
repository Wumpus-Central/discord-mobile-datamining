// === Module 14000: useReanimatedTransitionProgress ===

// Module 14000 (useReanimatedTransitionProgress)
import noopDefault from "noop" /* 13998 */;
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