// === Module 561: ? ===

// Module 561
function createStoreImpl(fn) {
  const set = new Set();
  function setState(fn, arg1) {
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
      const item = set.forEach((fn) => fn(closure_0, merged));
    }
  }
  function getState() {
    return closure_0;
  }
  const store = {
    setState,
    getState,
    getInitialState() {
      return closure_2;
    },
    subscribe(arg0) {
      closure_0 = arg0;
      set.add(arg0);
      return () => set.delete(closure_0);
    }
  };
  const tmp2 = fn(setState, getState, store);
  closure_0 = tmp2;
  closure_2 = tmp2;
  return store;
}

export const createStore = (fn) => {
  if (fn) {
    const _Set = Set;
    const set = new Set();
    function setState(fn, arg1) {
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
        const item = set.forEach((fn) => fn(closure_0, merged));
      }
    }
    function getState() {
      return closure_0;
    }
    const store = {
      setState,
      getState,
      getInitialState() {
          return closure_2;
        },
      subscribe(arg0) {
          closure_0 = arg0;
          set.add(arg0);
          return () => set.delete(closure_0);
        }
    };
    const tmp7 = fn(setState, getState, store);
    closure_0 = tmp7;
    closure_2 = tmp7;
    let tmp = store;
  } else {
    tmp = createStoreImpl;
  }
  return tmp;
};