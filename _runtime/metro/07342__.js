// === Module 7342: ? ===

// Module 7342
import CardAnimationContext from "CardAnimationContext" /* 7336 */;
import noop from "module_19" /* 19 */;

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