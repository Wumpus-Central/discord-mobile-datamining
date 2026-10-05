// _runtime/metro/00782__.js
let c3, c4, closure_2;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const debounce = function debounce(arg0, arg1, maxWait) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  function invokeFunc() {
    if (undefined !== c3) {
      const _clearTimeout = clearTimeout;
      clearTimeout(c3);
    }
    if (undefined !== c4) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(c4);
    }
    c4 = undefined;
    c3 = undefined;
    const tmp7 = closure_0();
    closure_2 = tmp7;
    return tmp7;
  }
  maxWait = undefined;
  if (maxWait != null) {
    maxWait = maxWait.maxWait;
  }
  let num = 0;
  if (maxWait) {
    const _Math = Math;
    num = Math.max(maxWait.maxWait, arg1);
  }
  let setTimeoutImpl;
  if (maxWait != null) {
    setTimeoutImpl = maxWait.setTimeoutImpl;
  }
  if (!setTimeoutImpl) {
    setTimeoutImpl = setTimeout;
  }
  function debounced() {
    const tmp = c3;
    if (tmp) {
      const _clearTimeout = clearTimeout;
      clearTimeout(c3);
    }
    c3 = setTimeoutImpl(invokeFunc, closure_1);
    const tmp8 = num && undefined === c4;
    if (tmp8) {
      c4 = setTimeoutImpl(invokeFunc, num);
    }
    return closure_2;
  }
  debounced.cancel = function cancelTimers() {
    if (undefined !== c3) {
      const _clearTimeout = clearTimeout;
      clearTimeout(c3);
    }
    if (undefined !== c4) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(c4);
    }
    c4 = undefined;
    c3 = undefined;
  };
  debounced.flush = function flush() {
    if (undefined === c3) {
      let tmp3;
      if (undefined === c4) {
        tmp3 = closure_2;
      }
      return tmp3;
    }
    if (undefined !== c3) {
      const _clearTimeout = clearTimeout;
      clearTimeout(c3);
    }
    if (undefined !== c4) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(c4);
    }
    c4 = undefined;
    c3 = undefined;
    const tmp10 = closure_0();
    closure_2 = tmp10;
    tmp3 = tmp10;
  };
  return debounced;
};
