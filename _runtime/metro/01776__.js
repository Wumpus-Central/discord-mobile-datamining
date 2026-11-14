// === Module 1776: ? ===

// Module 1776
import _mod1668 from "module_1668" /* 1668 */;
import _mod1761 from "module_1761" /* 1761 */;
import normalizeDelay from "normalizeDelay" /* 1773 */;
import VALID_ANIMATION_DIRECTIONS2 from "VALID_ANIMATION_DIRECTIONS" /* 1777 */;

require = arg1;
const dependencyMap = arg6;
const ERROR_MESSAGES = {
  invalidAnimationDirection(animationDirection) {
    return "Invalid animation direction \"" + animationDirection + "\".";
  },
  invalidIterationCount(animationIterationCount) {
    return "Invalid iteration count \"" + animationIterationCount + "\". Expected a number or \"infinite\".";
  },
  negativeIterationCount(animationIterationCount) {
    return "Iteration count cannot be negative, received \"" + animationIterationCount + "\".";
  },
  invalidFillMode(animationFillMode) {
    return "Invalid fill mode \"" + animationFillMode + "\".";
  },
  invalidPlayState(animationPlayState) {
    return "Invalid play state \"" + animationPlayState + "\".";
  }
};

export { ERROR_MESSAGES };
export function normalizeDirection() {
  let str = animationDirection;
  if (animationDirection === undefined) {
    str = "normal";
  }
  const VALID_ANIMATION_DIRECTIONS = VALID_ANIMATION_DIRECTIONS2.VALID_ANIMATION_DIRECTIONS;
  if (VALID_ANIMATION_DIRECTIONS.has(str)) {
    return str;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[Reanimated] " + obj.invalidAnimationDirection(str));
    throw error;
  }
}
export function normalizeIterationCount() {
  let num = animationIterationCount;
  if (animationIterationCount === undefined) {
    num = 1;
  }
  if ("infinite" !== num) {
    if (num !== Infinity) {
      const obj = _mod1668;
      if (obj.isNumber(num)) {
        if (num < 0) {
          const _Error2 = Error;
          const _HermesInternal2 = HermesInternal;
          const error = new Error("[Reanimated] " + obj.negativeIterationCount(num));
          throw error;
        } else {
          return num;
        }
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error1 = new Error("[Reanimated] " + obj.invalidIterationCount(num));
        throw error1;
      }
    }
  }
  return -1;
}
export function normalizeFillMode() {
  let str = animationFillMode;
  if (animationFillMode === undefined) {
    str = "none";
  }
  const VALID_FILL_MODES = VALID_ANIMATION_DIRECTIONS2.VALID_FILL_MODES;
  if (VALID_FILL_MODES.has(str)) {
    return str;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[Reanimated] " + obj.invalidFillMode(str));
    throw error;
  }
}
export function normalizePlayState() {
  let str = animationPlayState;
  if (animationPlayState === undefined) {
    str = "running";
  }
  const VALID_PLAY_STATES = VALID_ANIMATION_DIRECTIONS2.VALID_PLAY_STATES;
  if (VALID_PLAY_STATES.has(str)) {
    return str;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("[Reanimated] " + obj.invalidPlayState(str));
    throw error;
  }
}
export function normalizeSingleCSSAnimationSettings(animationName) {
  ({ animationIterationCount, animationDirection, animationFillMode, animationPlayState } = animationName);
  const obj = { duration: normalizeDelay.normalizeDuration(animationDuration), timingFunction: null, delay: null, iterationCount: null, direction: null, fillMode: null, playState: null };
  ({ animationDuration, animationTimingFunction, animationDelay } = animationName);
  obj.timingFunction = normalizeDelay.normalizeTimingFunction(animationTimingFunction);
  obj.delay = normalizeDelay.normalizeDelay(animationDelay);
  if (animationIterationCount === undefined) {
    animationIterationCount = 1;
  }
  let num = -1;
  if ("infinite" !== animationIterationCount) {
    num = -1;
    if (animationIterationCount !== Infinity) {
      if (tmpResult.isNumber(animationIterationCount)) {
        num = animationIterationCount;
        if (animationIterationCount < 0) {
          const _Error2 = Error;
          const _HermesInternal2 = HermesInternal;
          const error = new Error("[Reanimated] " + obj.negativeIterationCount(animationIterationCount));
          throw error;
        }
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error1 = new Error("[Reanimated] " + obj.invalidIterationCount(animationIterationCount));
        throw error1;
      }
      tmpResult = _mod1668;
    }
  }
  obj.iterationCount = num;
  if (animationDirection === undefined) {
    animationDirection = "normal";
  }
  const VALID_ANIMATION_DIRECTIONS = VALID_ANIMATION_DIRECTIONS2.VALID_ANIMATION_DIRECTIONS;
  if (VALID_ANIMATION_DIRECTIONS.has(animationDirection)) {
    obj.direction = animationDirection;
    if (animationFillMode === undefined) {
      animationFillMode = "none";
    }
    const VALID_FILL_MODES = VALID_ANIMATION_DIRECTIONS2.VALID_FILL_MODES;
    if (VALID_FILL_MODES.has(animationFillMode)) {
      obj.fillMode = animationFillMode;
      if (animationPlayState === undefined) {
        animationPlayState = "running";
      }
      const VALID_PLAY_STATES = VALID_ANIMATION_DIRECTIONS2.VALID_PLAY_STATES;
      if (VALID_PLAY_STATES.has(animationPlayState)) {
        obj.playState = animationPlayState;
        return obj;
      } else {
        const _Error5 = Error;
        const _HermesInternal5 = HermesInternal;
        const error2 = new Error("[Reanimated] " + obj.invalidPlayState(animationPlayState));
        throw error2;
      }
    } else {
      const _Error4 = Error;
      const _HermesInternal4 = HermesInternal;
      const error3 = new Error("[Reanimated] " + obj.invalidFillMode(animationFillMode));
      throw error3;
    }
  } else {
    const _Error3 = Error;
    const _HermesInternal3 = HermesInternal;
    const error4 = new Error("[Reanimated] " + obj.invalidAnimationDirection(animationDirection));
    throw error4;
  }
}
export function getAnimationSettingsUpdates(normalizedSettings, normalizedSettings2) {
  const obj = {};
  if (normalizedSettings.duration !== normalizedSettings2.duration) {
    obj.duration = normalizedSettings2.duration;
  }
  let tmp = normalizedSettings.timingFunction === normalizedSettings2.timingFunction;
  if (!tmp) {
    const timingFunction = normalizedSettings.timingFunction;
    let deepEqualResult = typeof timingFunction === "object";
    if (typeof timingFunction === "object") {
      deepEqualResult = _mod1761.deepEqual(normalizedSettings.timingFunction, normalizedSettings2.timingFunction);
    }
    tmp = deepEqualResult;
  }
  if (!tmp) {
    obj.timingFunction = normalizedSettings2.timingFunction;
  }
  if (normalizedSettings.delay !== normalizedSettings2.delay) {
    obj.delay = normalizedSettings2.delay;
  }
  if (normalizedSettings.iterationCount !== normalizedSettings2.iterationCount) {
    obj.iterationCount = normalizedSettings2.iterationCount;
  }
  if (normalizedSettings.direction !== normalizedSettings2.direction) {
    obj.direction = normalizedSettings2.direction;
  }
  if (normalizedSettings.fillMode !== normalizedSettings2.fillMode) {
    obj.fillMode = normalizedSettings2.fillMode;
  }
  if (normalizedSettings.playState !== normalizedSettings2.playState) {
    obj.playState = normalizedSettings2.playState;
  }
  return obj;
}