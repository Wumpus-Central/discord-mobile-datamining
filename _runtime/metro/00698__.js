// === Module 698: ? ===

// Module 698
function createStackParser() {
  let items = [...arguments];
  const sorted = items.sort((arg0, arg1) => arg0[0] - arg1[0]);
  closure_0 = sorted.map((item) => item[1]);
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
        str = arr3;
        if (arr3.length > 1024) {
          str = arr3.slice(0, 1024);
        }
        let str2 = str;
        if (re0.test(str)) {
          str2 = str.replace(re0, "$1");
        }
        if (str2.match(/\S*Error: /)) {
          num = num + 1;
          if (num >= parts.length) {
            break;
          }
        } else {
          for (const item10033 of closure_0) {
            let item10033Result = item10033(str2);
            if (item10033Result) {
              let arr = items.push(tmp8);
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
    }
    return stripSentryFramesAndReverse(items.slice(num2));
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
    if (re1.test(tmp5)) {
      arr = arr.pop();
      let obj1 = arr[arr.length - 1];
      if (!obj1) {
        obj1 = {};
      }
      if (re1.test(tmp7)) {
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
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
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
          HermesBuiltin.arraySpread(stacktrace.stacktrace.frames, 0);
          HermesBuiltin.apply(items, items);
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
export const getVueInternalName = function getVueInternalName(__v_isVNode) {
  let str = "[VueViewModel]";
  if ("__v_isVNode" in __v_isVNode) {
    str = "[VueViewModel]";
    if (__v_isVNode.__v_isVNode) {
      str = "[VueVNode]";
    }
  }
  return str;
};
export const normalizeStackTracePath = function normalizeStackTracePath(match1) {
  let startsWithResult;
  if (match1 != null) {
    startsWithResult = match1.startsWith("file://");
  }
  let str2 = match1;
  if (startsWithResult) {
    str2 = match1.slice(7);
  }
  let match;
  if (str2 != null) {
    match = str2.match(/\/[A-Z]:/);
  }
  let substr = str2;
  if (match) {
    substr = str2.slice(1);
  }
  return substr;
};
export const stackParserFromStackParserOptions = function stackParserFromStackParserOptions(arg0) {
  let applyResult = arg0;
  if (Array.isArray(arg0)) {
    const items = [];
    HermesBuiltin.arraySpread(arg0, 0);
    applyResult = HermesBuiltin.apply(items, undefined);
  }
  return applyResult;
};
export { stripSentryFramesAndReverse };