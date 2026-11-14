// === Module 1769: splitByComma ===

// Module 1769 (splitByComma)
import _mod1668 from "module_1668" /* 1668 */;
import smellsLikeTimingFunction from "smellsLikeTimingFunction" /* 1763 */;
import _mod1764 from "module_1764" /* 1764 */;


export const splitByComma = _mod1668.splitByComma;
export const splitByWhitespace = _mod1668.splitByWhitespace;
export (item) => {
  let num = 0;
  if ("from" !== item) {
    if ("to" === item) {
      num = 1;
    } else {
      let parsed = globalThis;
      const _isNaN = isNaN;
      if (isNaN(+item)) {
        const PERCENTAGE_REGEX = _mod1764.PERCENTAGE_REGEX;
        let result = null;
        if (PERCENTAGE_REGEX.test("" + item)) {
          parsed = parsed.parseFloat("" + item);
          result = parsed / 100;
        }
      } else {
        const tmp = +item;
      }
    }
  }
  return num;
}
export function parseSingleTransitionShorthand(item) {
  const obj = {};
  const iter = _mod1668.splitByWhitespace(item)[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if ("all" !== nextResult) {
      if ("normal" !== tmp3) {
        if ("allow-discrete" !== tmp3) {
          let obj3 = smellsLikeTimingFunction;
          if (!obj3.isTimeUnit(tmp3)) {
            if (undefined === obj.transitionTimingFunction) {
              let tmp8Result = smellsLikeTimingFunction;
              if (tmp8Result.smellsLikeTimingFunction(tmp3)) {
                obj.transitionTimingFunction = tmp3;
              }
            }
            if (undefined !== obj.transitionProperty) {
              let tmp17 = globalThis;
              let _Error = Error;
              let _HermesInternal = HermesInternal;
              let str = "[Reanimated] Invalid transition shorthand: ";
              let tmp18 = new.target;
              let tmp19 = new.target;
              let error = new Error("[Reanimated] Invalid transition shorthand: " + item);
              throw error;
            } else {
              obj.transitionProperty = tmp3;
            }
          } else {
            let tmp12 = nextResult;
            if (undefined === obj.transitionDuration) {
              obj.transitionDuration = tmp12;
              continue;
            } else if (undefined === obj.transitionDelay) {
              obj.transitionDelay = tmp12;
              continue;
            }
          }
          continue;
        }
      }
      obj.transitionBehavior = tmp3;
    } else {
      obj.transitionProperty = "all";
    }
    continue;
  }
  return obj;
}
export function normalizeTimeUnit(animationDuration) {
  if (typeof animationDuration === "number") {
    const _Number = Number;
    let tmp5 = null;
    if (Number.isFinite(animationDuration)) {
      tmp5 = animationDuration;
    }
    let parsed = tmp5;
  } else {
    const MILLISECONDS_REGEX = _mod1764.MILLISECONDS_REGEX;
    if (MILLISECONDS_REGEX.test(animationDuration)) {
      const _parseFloat2 = parseFloat;
      parsed = parseFloat(animationDuration);
    } else {
      const SECONDS_REGEX = _mod1764.SECONDS_REGEX;
      parsed = null;
      if (SECONDS_REGEX.test(animationDuration)) {
        const _parseFloat = parseFloat;
        parsed = 1000 * parseFloat(animationDuration);
      }
    }
  }
  return parsed;
}