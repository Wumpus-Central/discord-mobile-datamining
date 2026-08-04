// _runtime/05634_useCardAnimation.js
import noop from "noop";


export default function useCardAnimation() {
  const context = React.useContext(importDefault(5624));
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for card animation. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};