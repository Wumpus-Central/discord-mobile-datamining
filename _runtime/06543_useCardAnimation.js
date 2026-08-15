// _runtime/06543_useCardAnimation.js
import noop from "noop";
import { CardAnimationContext } from "06537_CardAnimationContext.js";

const require = arg1;

export const useCardAnimation = function useCardAnimation() {
  const context = React.useContext(CardAnimationContext.CardAnimationContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for card animation. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};