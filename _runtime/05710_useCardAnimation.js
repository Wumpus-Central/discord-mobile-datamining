// _runtime/05710_useCardAnimation.js
import noop from "noop";
import { noop } from "05700_noop.js";


export default function useCardAnimation() {
  const context = React.useContext(noop);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for card animation. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};