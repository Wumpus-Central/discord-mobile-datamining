// _runtime/07018_conditional.js
import _mod17 from "metro/00017__.js";

({ add: closure_0, multiply: closure_1 } = _mod17.Animated);

export const conditional = function conditional(closing, progress, progress2) {
  return React(
    framebus(closing, progress),
    framebus(closing.interpolate({ inputRange: [0, 1], outputRange: [1, 0] }), progress2),
  );
};
