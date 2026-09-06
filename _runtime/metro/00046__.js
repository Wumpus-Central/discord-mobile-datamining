// _runtime/metro/00046__.js
const global = arg0;
let c1 = 8192;
let closure_2 = 0;

export const isEnabled = function isEnabled() {
  if (global.nativeTraceIsTracing) {
    let nativeTraceIsTracingResult = obj.nativeTraceIsTracing(c1);
  } else {
    const _Boolean = Boolean;
    nativeTraceIsTracingResult = Boolean(obj.__RCTProfileIsProfiling);
  }
  return nativeTraceIsTracingResult;
};
export function setEnabled(arg0) {}
export const beginEvent = function beginEvent(fn, arg1) {
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
export const endEvent = function endEvent(arg0) {
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
export const beginAsyncEvent = function beginAsyncEvent(fn, arg1) {
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
export const endAsyncEvent = function endAsyncEvent(fn, arg1, arg2) {
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
export const counterEvent = function counterEvent(pending_js_to_native_queue, length) {
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
