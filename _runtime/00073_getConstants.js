// === Module 73: getConstants ===

// Module 73 (getConstants)
import defineLazyObjectProperty from "defineLazyObjectProperty" /* 49 */;
import _mod76 from "module_76" /* 76 */;
import merged from "UIManager" /* 74 */;

require = arg1;
function getConstants() {
  if (!c7) {
    const constants = importDefault(74).getConstants();
    c7 = true;
    obj = importDefault(74);
  }
  return constants;
}
function getViewManagerConfig(arg0) {
  if (undefined === dependencyMap[arg0]) {
    if (importDefault(74).getConstantsForViewManager) {
      try {
        dependencyMap[arg0] = importDefault(74).getConstantsForViewManager(arg0);
        const tmp4Result = importDefault(74);
      } catch (tmp6) {
        const _console = console;
        console.error("NativeUIManager.getConstantsForViewManager('" + tmp2 + "') threw an exception.", tmp6);
        tmp[tmp2] = null;
      }
    }
  }
  if (dependencyMap[arg0]) {
    return tmp10;
  } else if (global.nativeCallSyncHook) {
    if (importDefault(74).lazilyLoadView) {
      if (!set.has(arg0)) {
        const tmp15 = importDefault(70)(importDefault(74).lazilyLoadView)(arg0);
        set.add(arg0);
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
                  const item = keys.forEach((item, index) => {
                    if (typeof table[item] !== "function") {
                      obj[item] = tmp;
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
                  const item = keys.forEach((item, index) => {
                    if (typeof table[item] === "function") {
                      closure_2 = tmp3 + 1;
                      obj[item] = +closure_2;
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
        const tmp12Result = importDefault(70);
        tmp18 = null != tmp15 && null != tmp15.viewConfig;
      }
    }
    return dependencyMap[arg0];
  } else {
    return tmp10;
  }
}
let closure_4 = {};
const set = new Set();
let arr = {};
let c7 = false;
let obj = {};
obj.createView = function createView(arg0, arg1, arg2, arg3) {
  const view = importDefault(74).createView(arg0, arg1, arg2, arg3);
};
obj.getConstants = function getConstants() {
  if (!c7) {
    const constants = importDefault(74).getConstants();
    c7 = true;
    obj = importDefault(74);
  }
  return constants;
};
obj.getViewManagerConfig = function getViewManagerConfig(arg0) {
  return getViewManagerConfig(arg0);
};
obj.hasViewManagerConfig = function hasViewManagerConfig(arg0) {
  return null != getViewManagerConfig(arg0);
};
require("UIManager").getViewManagerConfig = obj.getViewManagerConfig;
if (!c7) {
  arr = require("UIManager").getConstants();
  c7 = true;
  const importDefaultResult = require("UIManager");
}
if (arr.ViewManagerNames) {
  const ViewManagerNames = require("UIManager").getConstants().ViewManagerNames;
  let item = ViewManagerNames.forEach((item, index) => {
    closure_0 = item;
    obj = {
      get() {
        return importDefault(dependencyMap[1])(importDefault(dependencyMap[0]).getConstantsForViewManager)(closure_0);
      }
    };
    obj.default(importDefault(74), item, obj);
  });
  const importDefaultResult1 = require("UIManager");
}
if (!global.nativeCallSyncHook) {
  if (!c7) {
    arr = require("UIManager").getConstants();
    c7 = true;
    const importDefaultResult2 = require("UIManager");
  }
  let keys = Object.keys(arr);
  const item1 = keys.forEach((item, index) => {
    closure_0 = item;
    if (!_default.includes(item)) {
      if (!dependencyMap[item]) {
        if (!c7) {
          obj = importDefault(74);
          const table = obj.getConstants();
          c7 = true;
        }
        tmp3[item] = table[item];
      }
      obj = { get: null };
      obj[0] = function get() {
        console.warn("Accessing view manager configs directly off UIManager via UIManager['" + closure_0 + "'] is no longer supported. Use UIManager.getViewManagerConfig('" + closure_0 + "') instead.");
        return obj.getViewManagerConfig(closure_0);
      };
      defineLazyObjectProperty.default(importDefault(74), item, obj);
      const tmpResult = defineLazyObjectProperty;
    }
    _default = _mod76.default;
  });
}

export default obj;