// === Module 73: getConstants ===

// Module 73 (getConstants)
import defineLazyObjectProperty from "defineLazyObjectProperty" /* 49 */;
import UIManagerDefault from "UIManager" /* 74 */;

require = arg1;
function getConstants() {
  if (!c7) {
    const constants = UIManagerDefault.getConstants();
    c7 = true;
    obj = UIManagerDefault;
  }
  return constants;
}
function getViewManagerConfig(arg0) {
  if (undefined === dependencyMap[arg0]) {
    if (UIManagerDefault.getConstantsForViewManager) {
      try {
        tmp3[arg0] = tmp4(74).getConstantsForViewManager(arg0);
        const tmp4Result = tmp4(74);
      } catch (tmp6) {
        const _console = console;
        console.error("NativeUIManager.getConstantsForViewManager('" + tmp2 + "') threw an exception.", tmp6);
        tmp[tmp2] = null;
      }
    }
    tmp4 = importDefault;
  }
  if (dependencyMap[arg0]) {
    return tmp10;
  } else if (global.nativeCallSyncHook) {
    if (UIManagerDefault.lazilyLoadView) {
      if (!set.has(arg0)) {
        const tmp15 = tmp12(70)(tmp12(74).lazilyLoadView)(arg0);
        obj2.add(arg0);
        if (tmp18) {
          getConstants()[arg0] = tmp15.viewConfig;
          (function lazifyViewManagerConfig(arg0) {
            if (!c7) {
              obj = callback2(74);
              const table = obj.getConstants();
              c7 = true;
            }
            closure_0 = tmp3;
            closure_4[arg0] = table[arg0];
            if (table[arg0].Manager) {
              obj = { get: null };
              obj[0] = function get() {
                const tmp = closure_1_1(closure_1_3[3]).default[closure_0.Manager];
                closure_0 = tmp;
                obj = {};
                if (tmp) {
                  const _Object = Object;
                  const keys = Object.keys(tmp);
                  const item = keys.forEach((arg0) => {
                    if (typeof table[arg0] !== "function") {
                      obj[arg0] = tmp;
                    }
                  });
                }
                return obj;
              };
              callback(49).default(tmp3, "Constants", obj);
              const obj2 = callback(49);
              obj = { get: null };
              obj[0] = function get() {
                const tmp = closure_1_1(closure_1_3[3]).default[closure_0.Manager];
                closure_0 = tmp;
                obj = {};
                c2 = 0;
                if (tmp) {
                  const _Object = Object;
                  const keys = Object.keys(tmp);
                  const item = keys.forEach((arg0) => {
                    if (typeof table[arg0] === "function") {
                      closure_2 = tmp3 + 1;
                      obj[arg0] = +closure_2;
                    }
                  });
                }
                return obj;
              };
              callback(49).default(tmp3, "Commands", obj);
              const obj4 = callback(49);
            }
          })(arg0);
        }
        const tmp12Result = tmp12(70);
        tmp18 = null != tmp15 && null != tmp15.viewConfig;
      }
      obj2 = set;
    }
    return tmp3[arg0];
  } else {
    return tmp10;
  }
}
let closure_4 = {};
const set = new Set();
let arr = {};
let c7 = false;
let obj = {};
const merged = Object.assign(UIManagerDefault);
obj.createView = function createView(arg0, arg1, arg2, arg3) {
  const view = UIManagerDefault.createView(arg0, arg1, arg2, arg3);
};
obj.getConstants = function getConstants() {
  if (!c7) {
    const constants = UIManagerDefault.getConstants();
    c7 = true;
    obj = UIManagerDefault;
  }
  return constants;
};
obj.getViewManagerConfig = function getViewManagerConfig(arg0) {
  return getViewManagerConfig(arg0);
};
obj.hasViewManagerConfig = function hasViewManagerConfig(arg0) {
  return null != getViewManagerConfig(arg0);
};
UIManagerDefault.getViewManagerConfig = obj.getViewManagerConfig;
if (!c7) {
  arr = UIManagerDefault.getConstants();
  c7 = true;
  const importDefaultResult = UIManagerDefault;
}
if (arr.ViewManagerNames) {
  const ViewManagerNames = UIManagerDefault.getConstants().ViewManagerNames;
  let item = ViewManagerNames.forEach((arg0) => {
    closure_0 = arg0;
    obj = defineLazyObjectProperty;
    obj = {
      get() {
        return closure_1_2(closure_1_3[1])(closure_1_2(closure_1_3[0]).getConstantsForViewManager)(closure_0);
      }
    };
    obj.default(UIManagerDefault, arg0, obj);
  });
  const importDefaultResult1 = UIManagerDefault;
}
if (!global.nativeCallSyncHook) {
  if (!c7) {
    arr = UIManagerDefault.getConstants();
    c7 = true;
    const importDefaultResult2 = UIManagerDefault;
  }
  let keys = Object.keys(arr);
  const item1 = keys.forEach((arg0) => {
    closure_0 = arg0;
    if (!_default.includes(arg0)) {
      if (!dependencyMap[arg0]) {
        if (!c7) {
          obj = UIManagerDefault;
          const table = obj.getConstants();
          c7 = true;
        }
        tmp3[arg0] = table[arg0];
      }
      obj = { get: null };
      obj[0] = function get() {
        console.warn("Accessing view manager configs directly off UIManager via UIManager['" + closure_0 + "'] is no longer supported. Use UIManager.getViewManagerConfig('" + closure_0 + "') instead.");
        return closure_1_10.getViewManagerConfig(closure_0);
      };
      defineLazyObjectProperty.default(UIManagerDefault, arg0, obj);
      const tmpResult = defineLazyObjectProperty;
    }
  });
}

export default obj;