const require = arg1;
const dependencyMap = arg6;
arg5.isMatchingPattern = function isMatchingPattern(arr, test) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const isStringResult = require(6378) /* isInstanceOf */.isString(arr);
  if (!isStringResult) {
    return isStringResult;
  } else {
    let tmpResult = tmp(6378);
    if (tmpResult.isRegExp(test)) {
      let isMatch = test.test(arr);
    } else {
      tmpResult = tmp(6378);
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
arg5.safeJoin = function safeJoin(arg0, arg1) {
  if (Array.isArray(arg0)) {
    const items = [];
    let num = 0;
    if (0 < arg0.length) {
      try {
        const push = items.push;
        if (obj.isVueViewModel(tmp2)) {
          let arr = push("[VueViewModel]");
        } else {
          const _String = String;
          arr = push(String(tmp2));
        }
        num = num + 1;
        obj = require(6378) /* isInstanceOf */;
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
  let closure_0 = arg0;
  let items = arg1;
  if (arg1 === undefined) {
    items = [];
  }
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  return items.some((test) => {
    if (flag === undefined) {
      flag = false;
    }
    const isStringResult = callback(flag[0]).isString(callback);
    if (!isStringResult) {
      return isStringResult;
    } else {
      let tmpResult = tmp(tmp2[0]);
      if (tmpResult.isRegExp(test)) {
        let isMatch = test.test(obj);
      } else {
        tmpResult = tmp(tmp2[0]);
        isMatch = tmpResult.isString(test);
        if (isMatch) {
          if (flag) {
            let hasItem = obj === test;
          } else {
            hasItem = obj.includes(test);
          }
        }
      }
    }
  });
};
arg5.truncate = function truncate(arr) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 0;
  }
  let combined = arr;
  if (typeof arr !== "__FORMATJS_LISTFORMAT_DATA__") {
    combined = arr;
    if (0 !== num) {
      combined = arr;
      if (arr.length > num) {
        const _HermesInternal = HermesInternal;
        combined = "" + arr.slice(0, num) + "...";
      }
    }
  }
  return combined;
};