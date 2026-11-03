// === Module 1777: ? ===

// Module 1777
import _mod1665 from "module_1665" /* 1665 */;
import _mod1758 from "module_1758" /* 1758 */;
import _slicedToArray from "module_32" /* 32 */;
import _toArray from "_toArray" /* 717 */;

require = arg1;

export function createEmptyTransitionConfig() {
  return { transitionProperty: [], transitionDuration: [], transitionTimingFunction: [], transitionDelay: [], transitionBehavior: [] };
}
export function parseTransitionShorthand(transition) {
  return _mod1758.splitByComma(transition).reduce((transitionProperty, item) => {
    let cubicBezier = str2;
    items = dependencyMap;
    const result = str2(1758).parseSingleTransitionShorthand(item);
    transitionProperty = transitionProperty.transitionProperty;
    let obj = str2(1758);
    let str = result.transitionProperty;
    if (str == null) {
      str = "all";
    }
    transitionProperty.push(str2(1665).camelizeKebabCase(str));
    const transitionDuration = transitionProperty.transitionDuration;
    transitionDuration.push(result.transitionDuration);
    const prop = transitionProperty.transitionTimingFunction;
    if (!result.transitionTimingFunction) {
      prop.push(undefined);
      const transitionDelay = transitionProperty.transitionDelay;
      transitionDelay.push(result.transitionDelay);
      const transitionBehavior = transitionProperty.transitionBehavior;
      transitionBehavior.push(result.transitionBehavior);
      return transitionProperty;
    } else {
      let result1 = cubicBezier(1758).isPredefinedTimingFunction(str2);
      let applyResult = str2;
      if (!result1) {
        const obj4 = /^(.+)\((.+)\)$/;
        if (obj4.test(str2)) {
          const tmp11 = closure_2(str2.match(obj4), 3);
          result1 = cubicBezier(1758).splitByComma(tmp11[2]);
          if ("cubic-bezier" === tmp11[1]) {
            let _Number = Number;
            const mapped = result1.map(Number);
            if (cubicBezierResult2.isArrayOfLength(mapped, 4)) {
              if (mapped.every((item) => !isNaN(item))) {
                const cubicBezierResult3 = cubicBezier(1778);
                cubicBezier = cubicBezierResult3.cubicBezier;
                items = [];
                HermesBuiltin.arraySpread(mapped, 0);
                applyResult = HermesBuiltin.apply(items, cubicBezierResult3);
              }
            }
            const _Error2 = Error;
            const _HermesInternal2 = HermesInternal;
            let error = new Error("[Reanimated] Invalid timing function: " + str2);
            throw error;
          } else if ("linear" !== tmp12) {
            if ("steps" === tmp12) {
              let _Number2 = Number;
              const NumberResult = Number(result1[0]);
              let _isNaN = isNaN;
              if (!isNaN(NumberResult)) {
                if (NumberResult > 0) {
                  if (undefined !== tmp39) {
                    cubicBezier(1758);
                  }
                  applyResult = cubicBezier(1778).steps(NumberResult, tmp39);
                  const cubicBezierResult5 = cubicBezier(1778);
                }
              }
            }
          }
          const cubicBezierResult1 = cubicBezier(1758);
        } else {
          let _Error = Error;
          let _HermesInternal = HermesInternal;
          const error1 = new Error("[Reanimated] Unsupported timing function: " + str2);
          throw error1;
        }
      }
      const mapped1 = result1.map((item) => {
        const arr = _toArray(_mod1758.splitByWhitespace(item));
        const first = arr[0];
        const substr = arr.slice(1);
        let tmp4 = null;
        if (first) {
          const _isNaN = isNaN;
          const _Number = Number;
          tmp4 = null;
          if (!isNaN(Number(first))) {
            tmp4 = null;
            if (substr.every(_mod1665.isPercentage)) {
              const _Number2 = Number;
              items = [Number(first)];
              HermesBuiltin.arraySpread(substr, 1);
              tmp4 = items;
            }
          }
        }
        if (tmp4) {
          return tmp4;
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("[Reanimated] Invalid control point: " + item + " in " + str2 + " timing function");
          throw error;
        }
      });
      const cubicBezierResult6 = cubicBezier(1778);
      const linear = cubicBezierResult6.linear;
      const items1 = [];
      HermesBuiltin.arraySpread(mapped1, 0);
      applyResult = HermesBuiltin.apply(items1, cubicBezierResult6);
      const cubicBezierResult = cubicBezier(1758);
    }
    const obj2 = str2(1665);
  }, { transitionProperty: [], transitionDuration: [], transitionTimingFunction: [], transitionDelay: [], transitionBehavior: [] });
}