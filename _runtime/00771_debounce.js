// _runtime/00771_debounce.js
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.debounce = function debounce(arg0, arg1, maxWait) {
  closure_0 = arg0;
  closure_1 = arg1;
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
    const tmp7 = callback();
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
    if (closure_3) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_3);
    }
    closure_3 = setTimeoutImpl(invokeFunc, closure_1);
    let tmp7 = num;
    if (num) {
      tmp7 = undefined === closure_4;
    }
    if (tmp7) {
      closure_4 = setTimeoutImpl(invokeFunc, num);
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
      if (undefined === c4) {
        let tmp3 = closure_2;
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
    const tmp10 = callback();
    closure_2 = tmp10;
    tmp3 = tmp10;
  };
  return debounced;
};
