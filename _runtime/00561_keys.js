// === Module 561: keys ===

// Module 561 (keys)
function createStoreImpl(arg0) {
  const set = new Set();
  function setState(fn) {
    let tmp = fn;
    if (typeof fn === "function") {
      tmp = fn(merged);
    }
    if (!Object.is(tmp, merged)) {
      let tmp2 = arg1;
      if (null == arg1) {
        let tmp5 = typeof tmp !== "object";
        if (typeof tmp === "object") {
          tmp5 = null === tmp;
        }
        tmp2 = tmp5;
      }
      merged = tmp;
      if (!tmp2) {
        const _Object = Object;
        merged = Object.assign({}, merged, tmp);
      }
      const item = set.forEach((arg0) => arg0(merged, merged));
    }
  }
  function getState() {
    return closure_0;
  }
  const obj = {
    setState,
    getState,
    getInitialState() {
      return closure_2;
    },
    subscribe(arg0) {
      closure_0 = arg0;
      set.add(arg0);
      return () => closure_1_1.delete(closure_0);
    }
  };
  const tmp2 = arg0(setState, getState, obj);
  closure_0 = tmp2;
  closure_2 = tmp2;
  return obj;
}
arg5.createStore = (arg0) => {
  if (arg0) {
    const _Set = Set;
    const set = new Set();
    function setState(fn) {
      let tmp = fn;
      if (typeof fn === "function") {
        tmp = fn(merged);
      }
      if (!Object.is(tmp, merged)) {
        let tmp2 = arg1;
        if (null == arg1) {
          let tmp5 = typeof tmp !== "object";
          if (typeof tmp === "object") {
            tmp5 = null === tmp;
          }
          tmp2 = tmp5;
        }
        merged = tmp;
        if (!tmp2) {
          const _Object = Object;
          merged = Object.assign({}, merged, tmp);
        }
        const item = set.forEach((arg0) => arg0(merged, merged));
      }
    }
    function getState() {
      return closure_0;
    }
    const obj = { setState: null, getState: null, getInitialState: null, subscribe: null };
    obj[0] = setState;
    obj[1] = getState;
    obj[2] = function getInitialState() {
      return closure_2;
    };
    obj[3] = function subscribe(arg0) {
      closure_0 = arg0;
      set.add(arg0);
      return () => closure_1_1.delete(closure_0);
    };
    const tmp7 = arg0(setState, getState, obj);
    closure_0 = tmp7;
    closure_2 = tmp7;
    let tmp = obj;
  } else {
    tmp = closure_0;
  }
  return tmp;
};