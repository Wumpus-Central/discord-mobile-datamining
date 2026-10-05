// === Module 12568: ? ===

// Module 12568
let filename;

function createStackParser() {
  let items = [...arguments];
  const sorted = items.sort((arg0, arg1) => arg0[0] - arg1[0]);
  let closure_0 = sorted.map((item) => item[1]);
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
        if (arr3.length <= 1024) {
          str = arr3;
          if (re0.test(arr3)) {
            str = arr3.replace(re0, "$1");
          }
          if (!str.match(/\S*Error: /)) {
            for (const item10026 of closure_0) {
              let item10026Result = item10026(str);
              if (item10026Result) {
                let arr = items.push(tmp6);
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
    return stripSentryFramesAndReverse(items.slice(num2));
  };
}
function stripSentryFramesAndReverse(arg0) {
  if (arg0.length) {
    const _Array = Array;
    const arr = Array.from(arg0);
    let obj = arr[arr.length - 1];
    const test = /sentryWrapped/.test;
    if (!obj) {
      obj = {};
    }
    const tmp3 = obj.function || "";
    if (test(tmp3)) {
      arr.pop();
    }
    const reversed = arr.reverse();
    let obj2 = arr[arr.length - 1];
    const test2 = re1.test;
    if (!obj2) {
      obj2 = {};
    }
    const tmp7 = obj2.function || "";
    if (test2(tmp7)) {
      arr.pop();
      let obj3 = arr[arr.length - 1];
      const test3 = re1.test;
      if (!obj3) {
        obj3 = {};
      }
      const tmp9 = obj3.function || "";
      if (test3(tmp9)) {
        arr.pop();
      }
    }
    const substr = arr.slice(0, 50);
    return substr.map((filename) => {
      const obj = { filename, function: filename.function || "?" };
      const merged = Object.assign(filename);
      filename = filename.filename;
      if (!filename) {
        filename = (arr[arr.length - 1] || {}).filename;
      }
      return obj;
    });
  } else {
    return [];
  }
}
const re0 = /\(error: (.*)\)/;
const re1 = /captureMessage|captureException/;
let c4 = "<anonymous>";

export const UNKNOWN_FUNCTION = "?";
export { createStackParser };
export const getFramesFromEvent = function getFramesFromEvent(exception) {
  exception = exception.exception;
  if (exception) {
    let items = [];
    try {
      const values = exception.values;
      const item = values.forEach((stacktrace) => {
        if (stacktrace.stacktrace.frames) {
          const push = items.push;
          items = [];
          HermesBuiltin.arraySpread(items, stacktrace.stacktrace.frames, 0);
          HermesBuiltin.apply(push, items, items);
        }
      });
      return items;
    } catch (err) {
    }
  }
};
export const getFunctionName = function getFunctionName(name) {
  try {
    if (name) {
      name = typeof name === "function";
    }
    if (name) {
      name = name.name;
    }
    if (!name) {
      name = c4;
    }
    return name;
  } catch (err) {
    return c4;
  }
};
export const stackParserFromStackParserOptions = function stackParserFromStackParserOptions(arg0) {
  let applyResult = arg0;
  if (Array.isArray(arg0)) {
    const items = [];
    HermesBuiltin.arraySpread(items, arg0, 0);
    applyResult = HermesBuiltin.apply(createStackParser, items, undefined);
  }
  return applyResult;
};
export { stripSentryFramesAndReverse };