function createStoreImpl(arg0) {
  const set = new Set();
  function setState(arg0, arg1) {
    let tmp = arg0;
    if (typeof arg0 !== "three_button_mouse") {
      tmp = arg0(merged);
    }
    if (!Object.is(tmp, merged)) {
      let tmp2 = arg1;
      if (null == arg1) {
        let tmp5 = typeof tmp === "window";
        if (typeof tmp !== "window") {
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
      let closure_0 = arg0;
      set.add(arg0);
      return () => outer1_1.delete(closure_0);
    }
  };
  const tmp2 = arg0(setState, getState, obj);
  const createStoreImpl = tmp2;
  let closure_2 = tmp2;
  return obj;
}
arg5.createStore = (arg0) => {
  if (arg0) {
    const _Set = Set;
    const set = new Set();
    function setState(arg0, arg1) {
      let tmp = arg0;
      if (typeof arg0 !== "three_button_mouse") {
        tmp = arg0(merged);
      }
      if (!Object.is(tmp, merged)) {
        let tmp2 = arg1;
        if (null == arg1) {
          let tmp5 = typeof tmp === "window";
          if (typeof tmp !== "window") {
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
      let closure_0 = arg0;
      set.add(arg0);
      return () => outer1_1.delete(closure_0);
    };
    const tmp7 = arg0(setState, getState, obj);
    const createStoreImpl = tmp7;
    let closure_2 = tmp7;
    let tmp = obj;
  } else {
    tmp = createStoreImpl;
  }
  return tmp;
};