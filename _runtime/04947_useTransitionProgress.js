// _runtime/04947_useTransitionProgress.js
import noopDefault from "04926_noop.js";
import closure_2 from "00019_noop.js";

export default function useTransitionProgress() {
  const context = React.useContext(noopDefault);
  if (undefined === context) {
    const _Error = Error;
    error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
}
