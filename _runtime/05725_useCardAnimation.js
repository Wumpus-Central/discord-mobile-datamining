// _runtime/05725_useCardAnimation.js
import noop from "noop";


export default function useCardAnimation() {
  const context = React.useContext(require("05715_noop.js"));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for card animation. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};