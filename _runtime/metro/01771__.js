// _runtime/metro/01771__.js
import _mod1758 from "01758__.js";
import _mod1761 from "01761__.js";

require = arg1;
const dependencyMap = arg6;
const ERROR_MESSAGES = {
  invalidDelay(animationDelay) {
    return 'Invalid delay "' + animationDelay + '". Expected a number, "ms", or "s".';
  },
  invalidDuration(animationDuration) {
    return 'Invalid duration "' + animationDuration + '". Expected a number, "ms", or "s".';
  },
  negativeDuration(animationDuration) {
    return 'Duration cannot be negative, received "' + animationDuration + '".';
  },
  invalidPredefinedTimingFunction(ease) {
    const VALID_PREDEFINED_TIMING_FUNCTIONS = _mod1761.VALID_PREDEFINED_TIMING_FUNCTIONS;
    return (
      'Invalid predefined timing function "' +
      ease +
      '". Supported values are: ' +
      VALID_PREDEFINED_TIMING_FUNCTIONS.join(", ") +
      "."
    );
  },
  invalidParametrizedTimingFunction(ease) {
    let str;
    if (ease != null) {
      str = ease.toString();
    }
    return 'Invalid parametrized timing function "' + str + '".';
  },
};

export { ERROR_MESSAGES };
export function normalizeDelay() {
  let num = animationDelay;
  if (animationDelay === undefined) {
    num = 0;
  }
  const obj = _mod1758;
  const normalizeTimeUnitResult = obj.normalizeTimeUnit(num);
  if (null === normalizeTimeUnitResult) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[Reanimated] " + obj.invalidDelay(num));
    throw error;
  } else {
    return normalizeTimeUnitResult;
  }
}
export function normalizeDuration() {
  let num = animationDuration;
  if (animationDuration === undefined) {
    num = 0;
  }
  const obj = _mod1758;
  const normalizeTimeUnitResult = obj.normalizeTimeUnit(num);
  if (null === normalizeTimeUnitResult) {
    const _Error2 = Error;
    const _HermesInternal2 = HermesInternal;
    const error = new Error("[Reanimated] " + obj.invalidDuration(num));
    throw error;
  } else if (normalizeTimeUnitResult < 0) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error1 = new Error("[Reanimated] " + obj.negativeDuration(num));
    throw error1;
  } else {
    return normalizeTimeUnitResult;
  }
}
export function normalizeTimingFunction() {
  let str = animationTimingFunction;
  if (animationTimingFunction === undefined) {
    str = "ease";
  }
  if (typeof str === "string") {
    const obj = _mod1758;
    if (obj.isPredefinedTimingFunction(str)) {
      return str;
    } else {
      const _Error2 = Error;
      const _HermesInternal2 = HermesInternal;
      const error = new Error("[Reanimated] " + obj.invalidPredefinedTimingFunction(str));
      throw error;
    }
  } else {
    if (str.normalize) {
      if (typeof str.normalize === "function") {
        return str.normalize();
      }
    }
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error1 = new Error("[Reanimated] " + obj.invalidParametrizedTimingFunction(str));
    throw error1;
  }
}
