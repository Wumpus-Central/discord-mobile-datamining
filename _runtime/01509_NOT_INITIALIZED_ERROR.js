// _runtime/01509_NOT_INITIALIZED_ERROR.js
const require = arg1;
let dependencyMap = arg6;
let c2 =
  "The 'navigation' object hasn't been initialized yet. This might happen if you don't have a navigator mounted, or if the navigator hasn't finished mounting. See https://reactnavigation.org/docs/navigating-without-navigation-prop#handling-initialization for more details.";

export const NOT_INITIALIZED_ERROR =
  "The 'navigation' object hasn't been initialized yet. This might happen if you don't have a navigator mounted, or if the navigator hasn't finished mounting. See https://reactnavigation.org/docs/navigating-without-navigation-prop#handling-initialization for more details.";
export const createNavigationContainerRef = function createNavigationContainerRef() {
  let items = [
    ...Object.keys(closure_0(closure_1[0]).CommonActions),
    "addListener",
    "removeListener",
    "resetRoot",
    "dispatch",
    "isFocused",
    "canGoBack",
    "getRootState",
    "getState",
    "getParent",
    "getCurrentRoute",
    "getCurrentOptions",
  ];
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
  function removeListener(arg0, arg1) {}
  let obj = {};
  Object.defineProperty(obj, "current", {
    get: () => closure_1,
    set: (arg0) => {
      closure_0 = arg0;
      closure_1 = arg0;
      if (null != arg0) {
        const _Object = Object;
        const entries = Object.entries(closure_0);
        let item = entries.forEach((item) => {
          [, arr] = item;
          item = arr.forEach((item) => {
            closure_0.addListener(closure_1_0, item);
          });
        });
      }
    },
  });
  obj.isReady = function isReady() {
    let isReadyResult = null != ready;
    if (isReadyResult) {
      isReadyResult = ready.isReady();
    }
    return isReadyResult;
  };
  const merged = Object.assign(
    items.reduce((acc, item) => {
      acc[item] = () => {
        const items = [...arguments];
        let first;
        closure_1 = undefined;
        if ("removeListener" === item) {
          [tmp17, tmp18] = items;
          if (typeof removeListener === "function") {
            first = tmp18;
            if (item[tmp17]) {
              tmp20[tmp17] = tmp20[tmp17].filter((item) => item !== closure_0);
            }
            if (closure_1 != null) {
              obj.removeListener(tmp17, tmp18);
            }
            obj = closure_1;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else if (null != closure_1) {
          const items1 = [];
          HermesBuiltin.arraySpread(items, 0);
          return HermesBuiltin.apply(items1, closure_1);
        } else if ("addListener" === tmp) {
          first = items[0];
          closure_1 = tmp6;
          item[first] = item[first] || [];
          item[first].push(items[1]);
          return () => {
            if (typeof removeListener === "function") {
              closure_0 = tmp2;
              if (closure_0[tmp]) {
                tmp3[tmp] = tmp3[tmp].filter((item) => item !== closure_0);
              }
              if (ready != null) {
                ready.removeListener(tmp, tmp2);
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
    }, {}),
  );
  return obj;
};
