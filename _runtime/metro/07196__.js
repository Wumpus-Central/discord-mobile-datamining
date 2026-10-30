// _runtime/metro/07196__.js
import CardAnimationContext from "../07190_CardAnimationContext.js";
import noop from "00019__.js";

require = arg1;

export function useCardAnimation() {
  const context = noop.useContext(CardAnimationContext.CardAnimationContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for card animation. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
}
