// _runtime/06050_useCardAnimation.js
import CardAnimationContext from "06044_CardAnimationContext.js";
import closure_2 from "00019_noop.js";

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
