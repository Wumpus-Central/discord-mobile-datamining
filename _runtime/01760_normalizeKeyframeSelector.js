// _runtime/01760_normalizeKeyframeSelector.js
import _mod1668 from "metro/01668__.js";
import normalizeDelay from "01773_normalizeDelay.js";
import _slicedToArray from "metro/00032__.js";

const require = globalThis.__r;

require = arg1;
function normalizeKeyframeSelector(str) {
  if (typeof str === "string") {
    const parts = str.split(",");
    let mapped = parts.map((item) => item.trim());
  } else {
    mapped = [str];
  }
  return mapped.map((item) => {
    const offsetOfResult = require("metro/01761__.js").offsetOf(item);
    if (null === offsetOfResult) {
      const _Error2 = Error;
      const _HermesInternal2 = HermesInternal;
      const error = new Error("[Reanimated] " + obj.invalidOffsetType(item));
      throw error;
    } else {
      if (offsetOfResult >= 0) {
        if (offsetOfResult <= 1) {
          return offsetOfResult;
        }
      }
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error1 = new Error("[Reanimated] " + obj.invalidOffsetRange(item));
      throw error1;
    }
    obj = require("metro/01761__.js");
  });
}
function processProps(offset, props, arg2, has) {
  const entries = Object.entries(props);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    obj = _mod1668;
    if (obj.isDefined(tmp7)) {
      if (typeof tmp7 === "object") {
        if (has.has(tmp6)) {
          let tmp18 = arg2[tmp6];
          if (tmp18 != null) {
            let tmp15Result = tmp15(offset, tmp16, tmp18, has);
          } else {
            let _Array = Array;
            let tmp20 = Array.isArray(tmp7) ? [] : {};
            arg2[tmp6] = tmp20;
          }
        }
      }
      let arr = arg2[tmp6];
      if (arr == null) {
        items = [];
        arg2[tmp6] = items;
        arr = items;
      }
      let obj2 = { offset, value: tmp7 };
      let arr2 = arr.push(obj2);
    }
    continue;
  }
  tmp2 = entries[Symbol.iterator]();
}
const ERROR_MESSAGES = {
  invalidOffsetType(item) {
    return 'Invalid keyframe selector "' + item + '". Only numbers, percentages, "from", and "to" are supported.';
  },
  invalidOffsetRange(item) {
    return (
      'Invalid keyframe selector "' + item + '". Expected a number between 0 and 1 or a percentage between 0% and 100%.'
    );
  },
};

export { ERROR_MESSAGES };
export { normalizeKeyframeSelector };
export function processKeyframes(arg0, arg1) {
  closure_0 = arg1;
  const entries = Object.entries(arg0);
  const sorted = entries
    .flatMap((item) => {
      const iter = item[Symbol.iterator]();
      if (iter !== undefined) {
        iter.next();
      }
      let tmp3 = tmp2;
      if (iter === undefined) {
        let tmp6 = tmp3;
        const animationTimingFunction = nextResult1.animationTimingFunction;
        const merged = Object.assign(nextResult1, Object.assign({ animationTimingFunction: 0 }));
        while (true) {
          if (tmp6) {
            break;
          } else {
            iter.return();
            break;
          }
          throw tmp9;
        }
      } else {
        tmp6 = tmp5;
        if (iter !== undefined) {
          nextResult1 = iter.next();
          tmp3 = tmp5;
        }
      }
      nextResult1 = {};
    })
    .sort((offset, offset2) => offset.offset - offset2.offset);
  return sorted.reduce((arr, item) => {
    if (arr[arr.length - 1]) {
      if (tmp.offset === item.offset) {
        const props = {};
        const merged = Object.assign(tmp.props);
        const merged1 = Object.assign(item.props);
        tmp.props = props;
        tmp.timingFunction = item.timingFunction;
      }
      return arr;
    }
    arr = arr.push(item);
  }, []);
}
export function normalizeAnimationKeyframes(cssRules, compoundComponentName) {
  const propsBuilder = require("metro/01668__.js").getPropsBuilder(compoundComponentName);
  obj = require("metro/01668__.js");
  _require = require("metro/01668__.js").getSeparatelyInterpolatedNestedProperties(compoundComponentName);
  obj3 = {};
  const obj4 = {};
  closure_129_0 = propsBuilder;
  const entries = Object.entries(cssRules);
  const obj2 = require("metro/01668__.js");
  const sorted = entries
    .flatMap((item) => {
      const iter = item[Symbol.iterator]();
      if (iter !== undefined) {
        iter.next();
      }
      let tmp3 = tmp2;
      if (iter === undefined) {
        let tmp6 = tmp3;
        const animationTimingFunction = nextResult1.animationTimingFunction;
        const merged = Object.assign(nextResult1, Object.assign({ animationTimingFunction: 0 }));
        while (true) {
          if (tmp6) {
            break;
          } else {
            iter.return();
            break;
          }
          throw tmp9;
        }
      } else {
        tmp6 = tmp5;
        if (iter !== undefined) {
          nextResult1 = iter.next();
          tmp3 = tmp5;
        }
      }
      nextResult1 = {};
    })
    .sort((offset, offset2) => offset.offset - offset2.offset);
  const reduced = sorted.reduce((arr, item) => {
    if (arr[arr.length - 1]) {
      if (tmp.offset === item.offset) {
        const props = {};
        const merged = Object.assign(tmp.props);
        const merged1 = Object.assign(item.props);
        tmp.props = props;
        tmp.timingFunction = item.timingFunction;
      }
      return arr;
    }
    arr = arr.push(item);
  }, []);
  const item = reduced.forEach((props) => {
    ({ offset, timingFunction } = props);
    processProps(offset, props.props, obj3, closure_0);
    let tmp2 = timingFunction;
    if (timingFunction) {
      tmp2 = offset < 1;
    }
    if (tmp2) {
      obj4[offset] = normalizeDelay.normalizeTimingFunction(timingFunction);
    }
  });
  return { propKeyframes: obj3, keyframeTimingFunctions: obj4 };
}
