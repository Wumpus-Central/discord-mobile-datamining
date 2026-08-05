// _runtime/05725_useCardAnimation.js
import noop from "noop";
import { noop } from "05715_noop.js";


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