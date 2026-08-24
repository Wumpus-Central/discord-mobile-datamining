// _runtime/01526_createNavigationContainerRef.js
const require = arg1;
let dependencyMap = arg6;
let c2 = "The 'navigation' object hasn't been initialized yet. This might happen if you don't have a navigator mounted, or if the navigator hasn't finished mounting. See https://reactnavigation.org/docs/navigating-without-navigation-prop#handling-initialization for more details.";
arg5.NOT_INITIALIZED_ERROR = "The 'navigation' object hasn't been initialized yet. This might happen if you don't have a navigator mounted, or if the navigator hasn't finished mounting. See https://reactnavigation.org/docs/navigating-without-navigation-prop#handling-initialization for more details.";
arg5.createNavigationContainerRef = function createNavigationContainerRef() {
  let items = [...Object.keys(closure_0(c1[0]).CommonActions), "addListener", "removeListener", "resetRoot", "dispatch", "isFocused", "canGoBack", "getRootState", "getState", "getParent", "getCurrentRoute", "getCurrentOptions"];
  const sum = tmp + 1;
  const sum1 = sum + 1;
  const sum2 = sum1 + 1;
  const sum3 = sum2 + 1;
  const sum4 = sum3 + 1;
  const sum5 = sum4 + 1;
  const sum6 = sum5 + 1;
  const sum7 = sum6 + 1;
  const _require = {};
  dependencyMap = null;
  function removeListener(arg0, arg1) {

  }
  let obj = {};
  Object.defineProperty(obj, "current", {
    get: () => c1,
    set: (arg0) => {
      closure_0 = arg0;
      closure_1 = arg0;
      if (null != arg0) {
        const _Object = Object;
        const entries = Object.entries(closure_0);
        let item = entries.forEach((arg0) => {
          [, arr] = arg0;
          const item = arr.forEach((arg0) => {
            closure_1_0.addListener(closure_0, arg0);
          });
        });
      }
    }
  });
  obj.isReady = function isReady() {
    let isReadyResult = null != _null;
    if (isReadyResult) {
      isReadyResult = _null.isReady();
    }
    return isReadyResult;
  };
  const merged = Object.assign(items.reduce((arg0, arg1) => {
    closure_0 = arg1;
    arg0[arg1] = () => {
      const items = [...arguments];
      let first;
      closure_1 = undefined;
      if ("removeListener" === first) {
        [tmp17, tmp18] = items;
        if (typeof closure_1_2 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        first = tmp18;
        if (dependencyMap[tmp17]) {
          tmp20[tmp17] = tmp20[tmp17].filter((arg0) => arg0 !== closure_0);
          const arr4 = tmp20[tmp17];
        }
        if (closure_1_1 != null) {
          obj.removeListener(tmp17, tmp18);
        }
        obj = closure_1_1;
      } else if (null != closure_1_1) {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        return HermesBuiltin.apply(items1, closure_1_1);
      } else if ("addListener" === tmp) {
        first = items[0];
        closure_1 = tmp6;
        dependencyMap[first] = dependencyMap[first] || [];
        dependencyMap[first].push(items[1]);
        return () => {
          if (typeof closure_1_2 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          closure_0 = tmp2;
          if (first[closure_0]) {
            tmp3[tmp] = tmp3[tmp].filter((arg0) => arg0 !== closure_0);
            const arr = tmp3[tmp];
          }
          if (closure_1 != null) {
            closure_1.removeListener(tmp, tmp2);
          }
        };
      } else {
        const _console = console;
        console.error(removeListener);
      }
    };
    return arg0;
  }, {}));
  return obj;
};