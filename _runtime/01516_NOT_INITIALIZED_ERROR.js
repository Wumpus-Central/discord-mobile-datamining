// === Module 1516: NOT_INITIALIZED_ERROR ===

// Module 1516 (NOT_INITIALIZED_ERROR)
let _require, closure_0, dependencyMap;

let c2 = "The 'navigation' object hasn't been initialized yet. This might happen if you don't have a navigator mounted, or if the navigator hasn't finished mounting. See https://reactnavigation.org/docs/navigating-without-navigation-prop#handling-initialization for more details.";

export const NOT_INITIALIZED_ERROR = "The 'navigation' object hasn't been initialized yet. This might happen if you don't have a navigator mounted, or if the navigator hasn't finished mounting. See https://reactnavigation.org/docs/navigating-without-navigation-prop#handling-initialization for more details.";
export const createNavigationContainerRef = function createNavigationContainerRef() {
  let _null;
  let items = [...keys(closure_0(c1[0]).CommonActions), "addListener", "removeListener", "resetRoot", "dispatch", "isFocused", "canGoBack", "getRootState", "getState", "getParent", "getCurrentRoute", "getCurrentOptions"];
  const sum = tmp + 1;
  const sum1 = sum + 1;
  const sum2 = sum1 + 1;
  const sum3 = sum2 + 1;
  const sum4 = sum3 + 1;
  const sum5 = sum4 + 1;
  const sum6 = sum5 + 1;
  const sum7 = sum6 + 1;
  _require = {};
  dependencyMap = null;
  function removeListener(arg0, arg1) {

  }
  const obj = {
    isReady() {
      const isReadyResult = null != _null && _null.isReady();
      return isReadyResult;
    }
  };
  Object.defineProperty(obj, "current", {
    get: () => c1,
    set: (arg0) => {
      closure_0 = arg0;
      let c1 = arg0;
      if (null != arg0) {
        const _Object = Object;
        const entries = Object.entries(closure_0);
        let item = entries.forEach((item) => {
          let arr;
          [, arr] = item;
          item = arr.forEach((item) => {
            closure_0.addListener(closure_1_0, item);
          });
        });
      }
    }
  });
  const merged = Object.assign(items.reduce((acc, item) => {
    acc[item] = () => {
      let tmp18;
      let tmp19;
      const items = [...arguments];
      let first;
      let closure_1;
      if ("removeListener" === item) {
        [tmp18, tmp19] = items;
        if (typeof removeListener === "function") {
          item = tmp19;
          if (item[tmp18]) {
            const arr4 = item[tmp18];
            item[tmp18] = arr4.filter((item) => item !== closure_0);
          }
          if (c1 != null) {
            c1.removeListener(tmp18, tmp19);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else if (null != c1) {
        const items1 = [];
        HermesBuiltin.arraySpread(items1, items, 0);
        return HermesBuiltin.apply(c1[item], items1, c1);
      } else if ("addListener" === item) {
        first = items[0];
        closure_1 = tmp7;
        item[first] = item[first] || [];
        const arr2 = item[first];
        let arr = arr2.push(tmp7);
        return () => {
          if (typeof closure_2_2 === "function") {
            closure_0 = closure_1;
            if (item[first]) {
              const arr = item[first];
              item[first] = arr.filter((item) => item !== closure_0);
            }
            if (closure_2_1 != null) {
              closure_2_1.removeListener(first, closure_1);
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        };
      } else {
        const _console = console;
        console.error(c2);
      }
    };
    return acc;
  }, {}));
  return obj;
};