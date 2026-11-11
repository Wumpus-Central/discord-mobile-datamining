// _runtime/07501_conditional.js
import _mod17 from "metro/00017__.js";

({ add: closure_0, multiply: closure_1 } = _mod17.Animated);

export function conditional(closing, progress, progress2) {
  return React(
    duration(closing, progress),
    duration(closing.interpolate({ inputRange: [0, 1], outputRange: [1, 0] }), progress2),
  );
}
