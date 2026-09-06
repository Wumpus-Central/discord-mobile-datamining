// _runtime/metro/00697__.js
import _mod692 from "00692__.js";
import _mod698 from "00698__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const isMatchingPattern = function isMatchingPattern(arr, test) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const isStringResult = _mod692.isString(arr);
  if (!isStringResult) {
    return isStringResult;
  } else {
    let tmpResult = _mod692;
    if (tmpResult.isRegExp(test)) {
      let isMatch = test.test(arr);
    } else {
      tmpResult = _mod692;
      isMatch = tmpResult.isString(test);
      if (isMatch) {
        if (flag) {
          let hasItem = arr === test;
        } else {
          hasItem = arr.includes(test);
        }
      }
    }
  }
};
export const safeJoin = function safeJoin(__v_isVNode, arg1) {
  if (Array.isArray(__v_isVNode)) {
    const items = [];
    let num = 0;
    if (0 < __v_isVNode.length) {
      try {
        const push = items.push;
        if (obj.isVueViewModel(tmp2)) {
          let arr = push(_mod698.getVueInternalName(tmp2));
          const tmp4Result = _mod698;
        } else {
          const _String = String;
          arr = push(String(tmp2));
        }
        num = num + 1;
        obj = _mod692;
      } catch (err) {
        arr.push(tmp);
      }
    }
    return items.join(arg1);
  } else {
    return "";
  }
};
export const snipLine = function snipLine(arr, lineno) {
  if (arr.length <= 150) {
    return arr;
  } else {
    let tmp = lineno;
    if (lineno > length) {
      tmp = length;
    }
    const _Math = Math;
    let num3 = Math.max(tmp - 60, 0);
    if (num3 < 5) {
      num3 = 0;
    }
    const _Math2 = Math;
    let bound = Math.min(num3 + 140, length);
    if (bound > length - 5) {
      bound = length;
    }
    if (bound === length) {
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
    if (bound < length) {
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
    const isStringResult = _mod692.isString(transaction);
    if (!isStringResult) {
      return isStringResult;
    } else {
      let tmpResult = _mod692;
      if (tmpResult.isRegExp(test)) {
        let isMatch = test.test(transaction);
      } else {
        tmpResult = _mod692;
        isMatch = tmpResult.isString(test);
        if (isMatch) {
          if (flag) {
            let hasItem = transaction === test;
          } else {
            hasItem = transaction.includes(test);
          }
        }
      }
    }
  });
};
export const truncate = function truncate(str) {
  let num = maxValueLength;
  if (maxValueLength === undefined) {
    num = 0;
  }
  let combined = str;
  if (typeof str === "string") {
    combined = str;
    if (0 !== num) {
      combined = str;
      if (str.length > num) {
        const _HermesInternal = HermesInternal;
        combined = "" + str.slice(0, num) + "...";
      }
    }
  }
  return combined;
};
