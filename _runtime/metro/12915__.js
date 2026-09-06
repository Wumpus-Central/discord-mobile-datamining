// _runtime/metro/12915__.js
import stackParserFromStackParserOptions from "../12800_stackParserFromStackParserOptions.js";
import _mod12803 from "12803__.js";
import _mod12913 from "12913__.js";

require = arg1;
const dependencyMap = arg6;

export const callFrameToStackFrame = function callFrameToStackFrame(location, str, fn) {
  let replaced;
  if (str) {
    replaced = str.replace(/^file:\/\//, "");
  }
  let sum;
  if (location.location.columnNumber) {
    sum = location.location.columnNumber + 1;
  }
  let sum1;
  if (location.location.lineNumber) {
    sum1 = location.location.lineNumber + 1;
  }
  const obj = {
    filename: replaced,
    module: fn(replaced),
    function: location.functionName || stackParserFromStackParserOptions.UNKNOWN_FUNCTION,
    colno: sum,
    lineno: sum1,
    in_app: null,
  };
  let filenameIsInAppResult;
  if (replaced) {
    filenameIsInAppResult = _mod12913.filenameIsInApp(replaced);
    const tmp4Result = _mod12913;
  }
  obj.in_app = filenameIsInAppResult;
  return obj.dropUndefinedKeys(obj);
};
export const watchdogTimer = function watchdogTimer(fn, arg1, arg2, arg3) {
  closure_0 = arg1;
  closure_1 = arg2;
  closure_2 = arg3;
  const navigation = fn();
  c4 = false;
  closure_5 = true;
  const timerId = setInterval(() => {
    const timeMs = navigation.getTimeMs();
    let tmp2 = false === c4;
    if (tmp2) {
      tmp2 = timeMs > closure_0 + closure_1;
    }
    if (tmp2) {
      c4 = true;
      if (closure_5) {
        closure_2();
      }
    }
    if (timeMs < closure_0 + closure_1) {
      c4 = false;
    }
  }, 20);
  return {
    poll() {
      navigation.reset();
    },
    enabled(arg0) {
      closure_5 = arg0;
    },
  };
};
