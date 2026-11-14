// === Module 1785: ? ===

// Module 1785
import VALID_TRANSITION_BEHAVIORS2 from "VALID_TRANSITION_BEHAVIORS" /* 1786 */;

require = arg1;
const dependencyMap = arg6;
const ERROR_MESSAGES = {
  invalidTransitionBehavior(normal) {
    return "Invalid transition behavior \"" + normal + "\".";
  }
};

export { ERROR_MESSAGES };
export function normalizeTransitionBehavior() {
  let str = transitionBehavior;
  if (transitionBehavior === undefined) {
    str = "normal";
  }
  const VALID_TRANSITION_BEHAVIORS = VALID_TRANSITION_BEHAVIORS2.VALID_TRANSITION_BEHAVIORS;
  if (VALID_TRANSITION_BEHAVIORS.includes(str)) {
    return "allow-discrete" === str;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[Reanimated] " + obj.invalidTransitionBehavior(str));
    throw error;
  }
}