// _runtime/13932_useReanimatedTransitionProgress.js
import noop from "noop";
import { noop } from "13930_noop.js";


export default function useReanimatedTransitionProgress() {
  const context = React.useContext(noop);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};