// === Module 992: callFrameToStackFrame ===

// Module 992 (callFrameToStackFrame)
import createStackParser from "createStackParser" /* 833 */;
import filenameIsInApp from "filenameIsInApp" /* 991 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.callFrameToStackFrame = function callFrameToStackFrame(location, str, fn) {
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
  const obj = { filename: replaced, module: fn(replaced), function: null, colno: null, lineno: null, in_app: null };
  let UNKNOWN_FUNCTION = location.functionName;
  if (!UNKNOWN_FUNCTION) {
    UNKNOWN_FUNCTION = createStackParser.UNKNOWN_FUNCTION;
  }
  obj[2] = UNKNOWN_FUNCTION;
  obj[3] = sum;
  obj[4] = sum1;
  let filenameIsInAppResult;
  if (replaced) {
    filenameIsInAppResult = filenameIsInApp.filenameIsInApp(replaced);
  }
  obj[5] = filenameIsInAppResult;
  return obj;
};
arg5.watchdogTimer = function watchdogTimer(fn) {
  closure_0 = arg1;
  closure_1 = arg2;
  closure_2 = arg3;
  closure_3 = fn();
  c4 = false;
  c5 = true;
  const timerId = setInterval(() => {
    const timeMs = navigation.getTimeMs();
    let tmp2 = false === c4;
    if (tmp2) {
      tmp2 = timeMs > closure_0 + closure_1;
    }
    if (tmp2) {
      c4 = true;
      if (c5) {
        callback();
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
    }
  };
};