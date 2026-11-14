// === Module 1779: ? ===

// Module 1779
import normalizeDelay from "normalizeDelay" /* 1773 */;
import _mod1785 from "module_1785" /* 1785 */;
import _slicedToArray from "module_32" /* 32 */;

require = arg1;
const ERROR_MESSAGES = {
  invalidTransitionProperty(transitionProperty1) {
    return "Invalid transition property \"" + JSON.stringify(transitionProperty1) + "\"";
  }
};

export { ERROR_MESSAGES };
export function normalizeCSSTransitionProperties(prevTransitionProperties) {
  let tmp = (function getExpandedConfigProperties(transition) {
    let tmp = transition;
    obj = closure_0(dependencyMap[1]);
    if (transition.transition) {
      const result = obj.parseTransitionShorthand(tmp.transition);
    } else {
      const emptyTransitionConfig = obj.createEmptyTransitionConfig();
    }
    const entries = Object.entries(tmp);
    tmp = entries;
    entries[Symbol.iterator]();
  })(prevTransitionProperties);
  const transitionProperty1 = tmp.transitionProperty;
  closure_0 = undefined;
  if (transitionProperty1.length) {
    closure_0 = tmp5;
    if (transitionProperty1.some((item) => "none" === item !== closure_0)) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("[Reanimated] " + settings.invalidTransitionProperty(transitionProperty1));
      throw error;
    } else {
      let someResult = !tmp5;
    }
  } else {
    const _Object = Object;
    const values = Object.values(tmp2);
    someResult = values.some((item) => item.length);
  }
  if (someResult) {
    ({ transitionProperty, transitionDuration, transitionTimingFunction, transitionDelay, transitionBehavior } = tmp);
    const _Set = Set;
    const set = new Set();
    const _Set2 = Set;
    const set1 = new Set();
    if (!transitionProperty.length) {
      transitionProperty.push("all");
    }
    settings = {};
    let diff = transitionProperty.length - 1;
    let flag = false;
    if (0 <= diff) {
      while (true) {
        let tmp15 = transitionProperty[diff];
        if (!set1.has(tmp15)) {
          let addResult = set1.add(tmp15);
          let obj5 = normalizeDelay;
          let normalizeDurationResult = obj5.normalizeDuration(transitionDuration[diff % transitionDuration.length]);
          let obj6 = normalizeDelay;
          let normalizeDelayResult = obj6.normalizeDelay(transitionDelay[diff % transitionDelay.length]);
          if (normalizeDurationResult + normalizeDelayResult > 0) {
            let tmp18Result = normalizeDelay;
            let result = tmp18Result.normalizeTimingFunction(transitionTimingFunction[diff % transitionTimingFunction.length]);
            let tmp18Result2 = _mod1785;
            let obj2 = { duration: normalizeDurationResult, timingFunction: result, delay: normalizeDelayResult, allowDiscrete: tmp18Result2.normalizeTransitionBehavior(transitionBehavior[diff % transitionBehavior.length]) };
            settings[tmp15] = obj2;
            flag = true;
            if ("all" === tmp15) {
              break;
            } else {
              let addResult1 = set.add(tmp15);
            }
          }
          break;
        }
        diff = diff - 1;
        flag = false;
        if (0 > diff) {
          break;
        }
      }
    }
    if (flag) {
      const obj3 = { specificProperties: "Array", settings };
      let tmp24 = obj3;
    } else {
      tmp24 = null;
      if (set.size) {
        const obj4 = { specificProperties: set, settings };
        tmp24 = obj4;
      }
    }
    return tmp24;
  } else {
    return null;
  }
}