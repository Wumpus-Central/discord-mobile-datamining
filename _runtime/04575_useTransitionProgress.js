// === Module 4575: useTransitionProgress ===

// Module 4575 (useTransitionProgress)
import noop from "noop";


export default function useTransitionProgress() {
  const context = React.useContext(importDefault(4554));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};