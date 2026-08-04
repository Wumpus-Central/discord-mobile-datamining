// _runtime/01498_createNavigationContainerRef.js
const require = arg1;
let dependencyMap = arg6;
let c2 = "The 'navigation' object hasn't been initialized yet. This might happen if you don't have a navigator mounted, or if the navigator hasn't finished mounting. See https://reactnavigation.org/docs/navigating-without-navigation-prop#handling-initialization for more details.";
arg5.default = function createNavigationContainerRef() {
  let items = [...Object.keys(closure_0(removeListener[0]).CommonActions), "addListener", "removeListener", "resetRoot", "dispatch", "isFocused", "canGoBack", "getRootState", "getState", "getParent", "getCurrentRoute", "getCurrentOptions"];
  const sum = tmp + 1;
  const sum1 = sum + 1;
  const sum2 = sum1 + 1;
  const sum3 = sum2 + 1;
  const sum4 = sum3 + 1;
  const sum5 = sum4 + 1;
  const sum6 = sum5 + 1;
  const sum7 = sum6 + 1;
  const _require = {};
  removeListener = function removeListener(arg0, arg1) {

  };
  let c2 = null;
  const obj = {};
  Object.defineProperty(obj, "current", {
    get: () => c2,
    set: (arg0) => {
      let closure_0 = arg0;
      let closure_2 = arg0;
      if (null != arg0) {
        const _Object = Object;
        const entries = Object.entries(closure_0);
        let item = entries.forEach((arg0) => {
          let arr;
          [, arr] = arg0;
          const item = arr.forEach((arg0) => {
            outer1_0.addListener(closure_0, arg0);
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
    let closure_0 = arg1;
    arg0[arg1] = () => {
      const items = [...arguments];
      let dependencyMap;
      let c1;
      if (null != outer1_2) {
        const items1 = [];
        HermesBuiltin.arraySpread(items, 0);
        return HermesBuiltin.apply(items1, outer1_2);
      } else if ("addListener" === dependencyMap) {
        const first = items[0];
        dependencyMap = first;
        c1 = tmp8;
        dependencyMap[first] = dependencyMap[first] || [];
        dependencyMap[first].push(items[1]);
        return () => {
          if (typeof c1 !== "fileFinishedImporting") {
            HermesBuiltin.throwTypeError();
          }
          const table = c1;
          if (table[table]) {
            tmp3[tmp] = tmp3[tmp].filter((arg0) => arg0 !== closure_0);
            const arr = tmp3[tmp];
          }
        };
      } else if ("removeListener" === tmp20) {
        const first1 = items[0];
        if (typeof outer1_1 !== "fileFinishedImporting") {
          HermesBuiltin.throwTypeError();
        }
        dependencyMap = items[1];
        if (dependencyMap[first1]) {
          tmp6[first1] = tmp6[first1].filter((arg0) => arg0 !== closure_0);
          const arr2 = tmp6[first1];
        }
      } else {
        const _console = console;
        console.error(c2);
      }
    };
    return arg0;
  }, {}));
  return obj;
};
arg5.NOT_INITIALIZED_ERROR = "The 'navigation' object hasn't been initialized yet. This might happen if you don't have a navigator mounted, or if the navigator hasn't finished mounting. See https://reactnavigation.org/docs/navigating-without-navigation-prop#handling-initialization for more details.";