// === Module 832: isMatchingPattern ===

// Module 832 (isMatchingPattern)
import isInstanceOf from "isInstanceOf" /* 827 */;
import createStackParser from "createStackParser" /* 833 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.isMatchingPattern = function isMatchingPattern(arr, test) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const isStringResult = isInstanceOf.isString(arr);
  if (!isStringResult) {
    return isStringResult;
  } else {
    let tmpResult = isInstanceOf;
    if (tmpResult.isRegExp(test)) {
      let isMatch = test.test(arr);
    } else {
      tmpResult = isInstanceOf;
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
arg5.safeJoin = function safeJoin(__v_isVNode) {
  if (Array.isArray(__v_isVNode)) {
    const items = [];
    let num = 0;
    if (0 < __v_isVNode.length) {
      try {
        const push = items.push;
        if (obj.isVueViewModel(tmp2)) {
          let arr = push(createStackParser.getVueInternalName(tmp2));
          const tmp4Result = createStackParser;
        } else {
          const _String = String;
          arr = push(String(tmp2));
        }
        num = num + 1;
        obj = isInstanceOf;
      } catch (err) {
        arr.push(tmp);
      }
    }
    return items.join(arg1);
  } else {
    return "";
  }
};
arg5.snipLine = function snipLine(arr) {
  if (arr.length <= 150) {
    return arr;
  } else {
    let tmp = arg1;
    if (arg1 > length) {
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
arg5.stringMatchesSomePattern = function stringMatchesSomePattern(arg0) {
  closure_0 = arg0;
  let items = arg1;
  if (arg1 === undefined) {
    items = [];
  }
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  return items.some((item, index) => {
    const isStringResult = callback(flag[0]).isString(callback);
    if (!isStringResult) {
      return isStringResult;
    } else {
      let tmpResult = callback(tmp2[0]);
      if (tmpResult.isRegExp(item)) {
        let isMatch = item.test(callback);
      } else {
        tmpResult = callback(tmp2[0]);
        isMatch = tmpResult.isString(item);
        if (isMatch) {
          if (flag) {
            let hasItem = callback === item;
          } else {
            hasItem = callback.includes(item);
          }
        }
      }
    }
    const obj2 = callback(flag[0]);
  });
};
arg5.truncate = function truncate(str) {
  let num = arg1;
  if (arg1 === undefined) {
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