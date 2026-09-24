// === Module 13263: ? ===

// Module 13263
import stackParserFromStackParserOptions from "stackParserFromStackParserOptions" /* 13148 */;
import _mod13151 from "module_13151" /* 13151 */;
import _mod13261 from "module_13261" /* 13261 */;

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
  const obj2 = { filename: replaced, module: fn(replaced), function: null, colno: null, lineno: null, in_app: null };
  const obj = _mod13151;
  obj2.function = location.functionName || stackParserFromStackParserOptions.UNKNOWN_FUNCTION;
  obj2.colno = sum;
  obj2.lineno = sum1;
  let filenameIsInAppResult;
  if (replaced) {
    filenameIsInAppResult = _mod13261.filenameIsInApp(replaced);
    const tmp4Result = _mod13261;
  }
  obj2.in_app = filenameIsInAppResult;
  return obj.dropUndefinedKeys(obj2);
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
    }
  };
};