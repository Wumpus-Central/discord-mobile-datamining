// === Module 868: callFrameToStackFrame ===

// Module 868 (callFrameToStackFrame)
import UNKNOWN_FUNCTION2 from "UNKNOWN_FUNCTION" /* 709 */;
import filenameIsInApp from "filenameIsInApp" /* 867 */;

let navigation;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const callFrameToStackFrame = function callFrameToStackFrame(location, str, fn) {
  let UNKNOWN_FUNCTION;
  let filenameIsInAppResult;
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
  const obj = { filename: replaced, module: fn(replaced), function: UNKNOWN_FUNCTION, colno: sum, lineno: sum1, in_app: filenameIsInAppResult };
  UNKNOWN_FUNCTION = location.functionName || UNKNOWN_FUNCTION2.UNKNOWN_FUNCTION;
  filenameIsInAppResult = undefined;
  if (replaced) {
    const obj2 = filenameIsInApp;
    filenameIsInAppResult = obj2.filenameIsInApp(replaced);
  }
  return obj;
};
export const watchdogTimer = function watchdogTimer(fn, arg1, arg2, arg3) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  let closure_2 = arg3;
  navigation = fn();
  let c4 = false;
  let c5 = true;
  const timerId = setInterval(() => {
    const timeMs = navigation.getTimeMs();
    const tmp2 = false === c4 && timeMs > closure_0 + closure_1;
    if (tmp2) {
      c4 = true;
      if (c5) {
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
      c5 = arg0;
    }
  };
};