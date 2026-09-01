// _runtime/12338_createStackParser.js
function createStackParser() {
  let items = [...arguments];
  closure_0 = undefined;
  const sorted = items.sort((arg0, arg1) => arg0[0] - arg1[0]);
  closure_0 = sorted.map((arg0) => arg0[1]);
  return (str) => {
    let num = arg1;
    if (arg1 === undefined) {
      num = 0;
    }
    let num2 = arg2;
    if (arg2 === undefined) {
      num2 = 0;
    }
    const items = [];
    const parts = str.split("\n");
    if (num < parts.length) {
      while (true) {
        let arr3 = parts[num];
        let tmp = num;
        if (arr3.length <= 1024) {
          let tmp10 = regex;
          str = arr3;
          if (regex.test(arr3)) {
            str = arr3.replace(tmp10, "$1");
          }
          let tmp2 = str;
          if (!str.match(/\S*Error: /)) {
            let tmp3 = regex;
            let tmp4 = regex;
            for (const item10026 of closure_0) {
              let item10026Result = item10026(str);
              if (item10026Result) {
                let tmp7 = item10026Result;
                let arr = items.push(tmp6);
                let tmp9 = obj;
                obj.return();
                break;
              }
              continue;
            }
            if (items.length >= 50 + num2) {
              break;
            }
          }
          break;
        }
        num = num + 1;
        if (num >= parts.length) {
          break;
        }
      }
    }
    return closure_1_3(items.slice(num2));
  };
}
function stripSentryFramesAndReverse(arg0) {
  if (arg0.length) {
    const _Array = Array;
    let arr = Array.from(arg0);
    let obj = /sentryWrapped/;
    obj = arr[arr.length - 1];
    if (!obj) {
      obj = {};
    }
    if (obj.test(tmp2)) {
      arr = arr.pop();
    }
    const reversed = arr.reverse();
    obj = arr[arr.length - 1];
    if (!obj) {
      obj = {};
    }
    if (regex.test(tmp5)) {
      arr = arr.pop();
      obj1 = arr[arr.length - 1];
      if (!obj1) {
        obj1 = {};
      }
      if (regex.test(tmp7)) {
        arr.pop();
      }
      tmp7 = obj1.function || "";
    }
    const substr = arr.slice(0, 50);
    return substr.map((filename) => {
      const obj = {};
      const merged = Object.assign(filename);
      filename = filename.filename;
      if (!filename) {
        filename = arr[arr.length - 1] || {}.filename;
        const tmp3 = arr[arr.length - 1] || {};
      }
      obj.filename = filename;
      obj.function = filename.function || "?";
      return obj;
    });
  } else {
    return [];
  }
}
const re0 = /\(error: (.*)\)/;
const re1 = /captureMessage|captureException/;
let c4 = "<anonymous>";
arg5.UNKNOWN_FUNCTION = "?";
arg5.createStackParser = createStackParser;
arg5.getFramesFromEvent = function getFramesFromEvent(exception) {
  exception = exception.exception;
  if (exception) {
    let items = [];
    try {
      const values = exception.values;
      const item = values.forEach((stacktrace) => {
        if (stacktrace.stacktrace.frames) {
          const push = items.push;
          items = [];
          HermesBuiltin.arraySpread(stacktrace.stacktrace.frames, 0);
          HermesBuiltin.apply(items, items);
        }
      });
      return items;
    } catch (err) {
    }
  }
};
arg5.getFunctionName = function getFunctionName(fn) {
  try {
    let name = fn;
    if (fn) {
      name = typeof fn === "function";
    }
    if (name) {
      name = fn.name;
    }
    if (!name) {
      name = c4;
    }
    return name;
  } catch (err) {
    return c4;
  }
};
arg5.stackParserFromStackParserOptions = function stackParserFromStackParserOptions(arg0) {
  let applyResult = arg0;
  if (Array.isArray(arg0)) {
    const items = [];
    HermesBuiltin.arraySpread(arg0, 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
};
arg5.stripSentryFramesAndReverse = stripSentryFramesAndReverse;