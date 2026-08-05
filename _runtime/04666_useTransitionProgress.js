// _runtime/04666_useTransitionProgress.js
import noop from "noop";


export default function useTransitionProgress() {
  const context = React.useContext(require("04645_noop.js"));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};