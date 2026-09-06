// === Module 857: callFrameToStackFrame ===

// Module 857 (callFrameToStackFrame)
import _mod698 from "module_698" /* 698 */;
import filenameIsInApp from "filenameIsInApp" /* 856 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

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
  const obj = { filename: replaced, module: fn(replaced), function: null, colno: null, lineno: null, in_app: null };
  let UNKNOWN_FUNCTION = location.functionName;
  if (!UNKNOWN_FUNCTION) {
    UNKNOWN_FUNCTION = _mod698.UNKNOWN_FUNCTION;
  }
  obj.function = UNKNOWN_FUNCTION;
  obj.colno = sum;
  obj.lineno = sum1;
  let filenameIsInAppResult;
  if (replaced) {
    filenameIsInAppResult = filenameIsInApp.filenameIsInApp(replaced);
  }
  obj.in_app = filenameIsInAppResult;
  return obj;
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