// === Module 6998: ? ===

// Module 6998
import CardAnimationContext from "CardAnimationContext" /* 6992 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useCardAnimation = function useCardAnimation() {
  const context = noop.useContext(CardAnimationContext.CardAnimationContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for card animation. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};