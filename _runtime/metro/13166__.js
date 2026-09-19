// === Module 13166: ? ===

// Module 13166
import stackParserFromStackParserOptions from "stackParserFromStackParserOptions" /* 13051 */;
import _mod13054 from "module_13054" /* 13054 */;
import _mod13164 from "module_13164" /* 13164 */;

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
  const obj = _mod13054;
  obj2.function = location.functionName || stackParserFromStackParserOptions.UNKNOWN_FUNCTION;
  obj2.colno = sum;
  obj2.lineno = sum1;
  let filenameIsInAppResult;
  if (replaced) {
    filenameIsInAppResult = _mod13164.filenameIsInApp(replaced);
    const tmp4Result = _mod13164;
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