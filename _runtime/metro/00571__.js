// === Module 571: ? ===

// Module 571
let set;

function createStoreImpl(fn) {
  new Set();
  function setState(fn, arg1) {
    let merged;
    let tmp = fn;
    if (typeof fn === "function") {
      tmp = fn(merged);
    }
    if (!Object.is(tmp, merged)) {
      let tmp2 = arg1;
      if (null == arg1) {
        tmp2 = typeof tmp !== "object" || null === tmp;
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
  let closure_0 = tmp2;
  let closure_2 = tmp2;
  return store;
}

export const createStore = function(fn) {
  let tmp2;
  let tmp = fn;
  if (tmp) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
    function setState(fn, arg1) {
      let merged;
      let tmp = fn;
      if (typeof fn === "function") {
        tmp = fn(merged);
      }
      if (!Object.is(tmp, merged)) {
        let tmp2 = arg1;
        if (null == arg1) {
          tmp2 = typeof tmp !== "object" || null === tmp;
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
    const tmp6 = fn(setState, getState, store);
    let closure_0 = tmp6;
    let closure_2 = tmp6;
    tmp2 = store;
  } else {
    tmp2 = createStoreImpl;
  }
  return tmp2;
};