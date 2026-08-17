// _runtime/07856_callFrameToStackFrame.js
import createStackParser from "createStackParser" /* 7741 */;
import addNonEnumerableProperty from "addNonEnumerableProperty" /* 7744 */;

require = arg1;
const dependencyMap = arg6;
arg5.callFrameToStackFrame = function callFrameToStackFrame(location, str) {
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
  let obj = addNonEnumerableProperty;
  obj = { filename: replaced, module: arg2(replaced), function: location.functionName || createStackParser.UNKNOWN_FUNCTION, colno: sum, lineno: sum1, in_app: null };
  let filenameIsInAppResult;
  if (replaced) {
    filenameIsInAppResult = tmp4(7854).filenameIsInApp(replaced);
    const tmp4Result = tmp4(7854);
  }
  obj[5] = filenameIsInAppResult;
  return obj.dropUndefinedKeys(obj);
};
arg5.watchdogTimer = function watchdogTimer(arg0, arg1, arg2, arg3) {
  closure_0 = arg1;
  closure_1 = arg2;
  closure_2 = arg3;
  closure_3 = arg0();
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