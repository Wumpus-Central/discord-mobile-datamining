// _runtime/metro/00708__.js
import _mod703 from "00703__.js";
import UNKNOWN_FUNCTION from "../00709_UNKNOWN_FUNCTION.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const isMatchingPattern = function isMatchingPattern(arr, test) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const obj = _mod703;
  let isStringResult = obj.isString(arr);
  if (isStringResult) {
    let isMatch;
    const tmpResult = _mod703;
    if (tmpResult.isRegExp(test)) {
      isMatch = test.test(arr);
    } else {
      const tmpResult2 = _mod703;
      isMatch = tmpResult2.isString(test);
      if (isMatch) {
        let hasItem;
        if (flag) {
          hasItem = arr === test;
        } else {
          hasItem = arr.includes(test);
        }
        isMatch = hasItem;
      }
    }
    isStringResult = isMatch;
  }
  return isStringResult;
};
export const safeJoin = function safeJoin(__v_isVNode, arg1) {
  if (Array.isArray(__v_isVNode)) {
    const items = [];
    let num = 0;
    if (0 < __v_isVNode.length) {
      try {
        const push = items.push;
        const obj = _mod703;
        if (obj.isVueViewModel(__v_isVNode[num])) {
          const tmp3Result = UNKNOWN_FUNCTION;
          push(tmp3Result.getVueInternalName(__v_isVNode[num]));
        } else {
          const _String = String;
          push(String(__v_isVNode[num]));
        }
      } catch (err) {
        items.push("[value cannot be serialized]");
      }
      num = num + 1;
    }
    return items.join(arg1);
  } else {
    return "";
  }
};
export const snipLine = function snipLine(arr, arg1) {
  if (arr.length <= 150) {
    return arr;
  } else {
    let tmp = arg1;
    if (arg1 > arr.length) {
      tmp = length;
    }
    const _Math = Math;
    let num3 = Math.max(tmp - 60, 0);
    if (num3 < 5) {
      num3 = 0;
    }
    const _Math2 = Math;
    let bound = Math.min(num3 + 140, length);
    if (bound > arr.length - 5) {
      bound = length;
    }
    if (bound === arr.length) {
      const _Math3 = Math;
      num3 = Math.max(bound - 140, 0);
    }
    const substr = arr.slice(num3, bound);
    let combined = substr;
    if (num3 > 0) {
      const _HermesInternal = HermesInternal;
      combined = "'{snip} " + substr;
    }
    let text = combined;
    if (bound < arr.length) {
      text = `${tmp6} {snip}`;
    }
    return text;
  }
};
export const stringMatchesSomePattern = function stringMatchesSomePattern(transaction) {
  let items = allowUrls;
  if (allowUrls === undefined) {
    items = [];
  }
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  return items.some((test) => {
    const obj2 = _mod703;
    let isStringResult = obj2.isString(transaction);
    if (isStringResult) {
      let isMatch;
      const tmpResult = _mod703;
      if (tmpResult.isRegExp(test)) {
        isMatch = test.test(transaction);
      } else {
        const tmpResult2 = _mod703;
        isMatch = tmpResult2.isString(test);
        if (isMatch) {
          let hasItem;
          if (flag) {
            hasItem = transaction === test;
          } else {
            hasItem = transaction.includes(test);
          }
          isMatch = hasItem;
        }
      }
      isStringResult = isMatch;
    }
    return isStringResult;
  });
};
export const truncate = function truncate(message) {
  let num = maxValueLength;
  if (maxValueLength === undefined) {
    num = 0;
  }
  let combined = message;
  if (typeof message === "string") {
    combined = message;
    if (0 !== num) {
      combined = message;
      if (message.length > num) {
        const _HermesInternal = HermesInternal;
        combined = "" + message.slice(0, num) + "...";
      }
    }
  }
  return combined;
};
