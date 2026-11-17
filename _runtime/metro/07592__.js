// === Module 7592: ? ===

// Module 7592
import CardAnimationContext from "CardAnimationContext" /* 7586 */;
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