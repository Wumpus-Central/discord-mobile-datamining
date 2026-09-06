// === Module 73: ? ===

// Module 73
import defineLazyObjectProperty from "defineLazyObjectProperty" /* 49 */;
import _mod76 from "module_76" /* 76 */;
import UIManager from "UIManager" /* 74 */;

require = arg1;
function getConstants() {
  if (!c7) {
    constants = require("UIManager").getConstants();
    c7 = true;
    obj = require("UIManager");
  }
  return constants;
}
function getViewManagerConfig(arg0) {
  if (undefined === dependencyMap[arg0]) {
    if (require("UIManager").getConstantsForViewManager) {
      try {
        dependencyMap[arg0] = require("UIManager").getConstantsForViewManager(arg0);
        const tmp4Result = require("UIManager");
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
    if (require("UIManager").lazilyLoadView) {
      if (!set.has(arg0)) {
        const tmp15 = require("nullthrows")(require("UIManager").lazilyLoadView)(arg0);
        set.add(arg0);
        if (tmp18) {
          getConstants()[arg0] = tmp15.viewConfig;
          (function lazifyViewManagerConfig(arg0) {
            if (!c7) {
              obj = closure_2(74);
              constants = obj.getConstants();
              c7 = true;
            }
            closure_0 = tmp3;
            closure_4[arg0] = constants[arg0];
            if (constants[arg0].Manager) {
              obj = {
                get() {
                    const tmp = require("genModule").default[closure_0.Manager];
                    closure_0 = tmp;
                    obj = {};
                    if (tmp) {
                      const _Object = Object;
                      const keys = Object.keys(tmp);
                      const item = keys.forEach((item) => {
                        if (typeof closure_0[item] !== "function") {
                          obj[item] = tmp;
                        }
                      });
                    }
                    return obj;
                  }
              };
              closure_1(49).default(tmp3, "Constants", obj);
              const obj2 = closure_1(49);
              obj = {
                get() {
                    const tmp = require("genModule").default[closure_0.Manager];
                    closure_0 = tmp;
                    obj = {};
                    closure_2 = 0;
                    if (tmp) {
                      const _Object = Object;
                      const keys = Object.keys(tmp);
                      const item = keys.forEach((item) => {
                        if (typeof closure_0[item] === "function") {
                          closure_2 = tmp3 + 1;
                          obj[item] = +closure_2;
                        }
                      });
                    }
                    return obj;
                  }
              };
              closure_1(49).default(tmp3, "Commands", obj);
              const obj4 = closure_1(49);
            }
          })(arg0);
        }
        const tmp12Result = require("nullthrows");
        tmp18 = null != tmp15 && null != tmp15.viewConfig;
      }
    }
    return dependencyMap[arg0];
  } else {
    return tmp10;
  }
}
const dependencyMap = {};
const set = new Set();
let timestampProducer = {};
let c7 = false;
let obj = {};
obj.createView = function createView(arg0, arg1, arg2, arg3) {
  const view = require("UIManager").createView(arg0, arg1, arg2, arg3);
};
obj.getConstants = function getConstants() {
  if (!c7) {
    constants = require("UIManager").getConstants();
    c7 = true;
    obj = require("UIManager");
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
  timestampProducer = require("UIManager").getConstants();
  c7 = true;
  const importDefaultResult = require("UIManager");
}
if (timestampProducer.ViewManagerNames) {
  const ViewManagerNames = require("UIManager").getConstants().ViewManagerNames;
  let item = ViewManagerNames.forEach((item) => {
    closure_0 = item;
    obj = {
      get() {
        return require("nullthrows")(require("UIManager").getConstantsForViewManager)(closure_0);
      }
    };
    obj.default(require("UIManager"), item, obj);
  });
  const importDefaultResult1 = require("UIManager");
}
if (!global.nativeCallSyncHook) {
  if (!c7) {
    timestampProducer = require("UIManager").getConstants();
    c7 = true;
    const importDefaultResult2 = require("UIManager");
  }
  let keys = Object.keys(timestampProducer);
  const item1 = keys.forEach((item) => {
    closure_0 = item;
    if (!_default.includes(item)) {
      if (!dependencyMap[item]) {
        if (!c7) {
          obj = require("UIManager");
          constants = obj.getConstants();
          c7 = true;
        }
        tmp3[item] = constants[item];
      }
      obj = {
        get() {
            console.warn("Accessing view manager configs directly off UIManager via UIManager['" + closure_0 + "'] is no longer supported. Use UIManager.getViewManagerConfig('" + closure_0 + "') instead.");
            return obj.getViewManagerConfig(closure_0);
          }
      };
      defineLazyObjectProperty.default(require("UIManager"), item, obj);
      const tmpResult = defineLazyObjectProperty;
    }
    _default = _mod76.default;
  });
}

export default obj;