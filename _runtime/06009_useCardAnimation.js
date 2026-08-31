// === Module 6009: useCardAnimation ===

// Module 6009 (useCardAnimation)
import CardAnimationContext from "CardAnimationContext" /* 6003 */;
import closure_2 from "noop" /* 19 */;

require = arg1;

export const useCardAnimation = function useCardAnimation() {
  const context = React.useContext(CardAnimationContext.CardAnimationContext);
  if (undefined === context) {
    const _Error = Error;
    error = new Error("Couldn't find values for card animation. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};