// === Module 46: isEnabled ===

// Module 46 (isEnabled)
const global = arg0;
let c1 = 8192;
let c2 = 0;
arg5.isEnabled = function isEnabled() {
  if (global.nativeTraceIsTracing) {
    let nativeTraceIsTracingResult = obj.nativeTraceIsTracing(c1);
  } else {
    const _Boolean = Boolean;
    nativeTraceIsTracingResult = Boolean(obj.__RCTProfileIsProfiling);
  }
  return nativeTraceIsTracingResult;
};
arg5.setEnabled = function setEnabled(arg0) {

};
arg5.beginEvent = function beginEvent(fn) {
  if (global.nativeTraceIsTracing) {
    let nativeTraceIsTracingResult = obj.nativeTraceIsTracing(c1);
  } else {
    const _Boolean = Boolean;
    nativeTraceIsTracingResult = Boolean(obj.__RCTProfileIsProfiling);
  }
  if (nativeTraceIsTracingResult) {
    let tmp5 = fn;
    if (typeof fn === "function") {
      tmp5 = fn();
    }
    const result = obj.nativeTraceBeginSection(c1, tmp5, arg1);
  }
};
arg5.endEvent = function endEvent(arg0) {
  if (global.nativeTraceIsTracing) {
    let nativeTraceIsTracingResult = obj.nativeTraceIsTracing(c1);
  } else {
    const _Boolean = Boolean;
    nativeTraceIsTracingResult = Boolean(obj.__RCTProfileIsProfiling);
  }
  if (nativeTraceIsTracingResult) {
    const result = obj.nativeTraceEndSection(c1, arg0);
  }
};
arg5.beginAsyncEvent = function beginAsyncEvent(fn) {
  if (global.nativeTraceIsTracing) {
    let nativeTraceIsTracingResult = obj.nativeTraceIsTracing(c1);
  } else {
    const _Boolean = Boolean;
    nativeTraceIsTracingResult = Boolean(obj.__RCTProfileIsProfiling);
  }
  if (nativeTraceIsTracingResult) {
    closure_2 = closure_2 + 1;
    let tmp7 = fn;
    if (typeof fn === "function") {
      tmp7 = fn();
    }
    const result = obj.nativeTraceBeginAsyncSection(c1, tmp7, tmp, arg1);
  }
  return closure_2;
};
arg5.endAsyncEvent = function endAsyncEvent(fn, arg1) {
  if (global.nativeTraceIsTracing) {
    let nativeTraceIsTracingResult = obj.nativeTraceIsTracing(c1);
  } else {
    const _Boolean = Boolean;
    nativeTraceIsTracingResult = Boolean(obj.__RCTProfileIsProfiling);
  }
  if (nativeTraceIsTracingResult) {
    let tmp5 = fn;
    if (typeof fn === "function") {
      tmp5 = fn();
    }
    const result = obj.nativeTraceEndAsyncSection(c1, tmp5, arg1, arg2);
  }
};
arg5.counterEvent = function counterEvent(pending_js_to_native_queue, length) {
  if (global.nativeTraceIsTracing) {
    let nativeTraceIsTracingResult = obj.nativeTraceIsTracing(c1);
  } else {
    const _Boolean = Boolean;
    nativeTraceIsTracingResult = Boolean(obj.__RCTProfileIsProfiling);
  }
  if (nativeTraceIsTracingResult) {
    let tmp5 = pending_js_to_native_queue;
    if (typeof pending_js_to_native_queue === "function") {
      tmp5 = pending_js_to_native_queue();
    }
    if (obj.nativeTraceCounter) {
      obj.nativeTraceCounter(c1, tmp5, length);
    }
  }
};