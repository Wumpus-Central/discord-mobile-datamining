// _runtime/04683_useTransitionProgress.js
import noop from "noop";
import { noop } from "04662_noop.js";


export default function useTransitionProgress() {
  const context = React.useContext(noop);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};