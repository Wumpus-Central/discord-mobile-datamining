// === Module 73: ? ===

// Module 73
import defineLazyObjectProperty from "defineLazyObjectProperty" /* 49 */;
import _mod76 from "module_76" /* 76 */;
import UIManager from "UIManager" /* 74 */;

const require = globalThis.__r;
let constants;

function getConstants() {
  const tmp = c7;
  if (!tmp) {
    obj = require("UIManager");
    constants = obj.getConstants();
    c7 = true;
  }
  return constants;
}
function getViewManagerConfig(arg0) {
  function lazifyViewManagerConfig(arg0) {
    let tmp = c7;
    if (!tmp) {
      obj = closure_2(closure_3[0]);
      constants = obj.getConstants();
      c7 = true;
    }
    let closure_0 = tmp4;
    closure_4[arg0] = constants[arg0];
    if (constants[arg0].Manager) {
      const obj3 = {
        get() {
            const tmp = require("module_31").default[closure_0.Manager];
            closure_0 = tmp;
            obj = {};
            if (tmp) {
              const _Object = Object;
              const keys = Object.keys(tmp);
              const item = keys.forEach((item) => {
                if (typeof closure_0[item] !== "function") {
                  obj[item] = closure_0[item];
                }
              });
            }
            return obj;
          }
      };
      const obj2 = closure_1(closure_3[2]);
      obj2.default(constants[arg0], "Constants", obj3);
      const obj5 = {
        get() {
            const tmp = require("module_31").default[closure_0.Manager];
            closure_0 = tmp;
            obj = {};
            let closure_2 = 0;
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
      const obj4 = closure_1(closure_3[2]);
      obj4.default(constants[arg0], "Commands", obj5);
    }
  }
  if (undefined === closure_4[arg0]) {
    if (require("UIManager").getConstantsForViewManager) {
      try {
        const tmp2Result = require("UIManager");
        closure_4[arg0] = tmp2Result.getConstantsForViewManager(arg0);
      } catch (tmp4) {
        const _console = console;
        console.error("NativeUIManager.getConstantsForViewManager('" + arg0 + "') threw an exception.", tmp4);
        closure_4[arg0] = null;
      }
    }
  }
  if (closure_4[arg0]) {
    return closure_4[arg0];
  } else if (global.nativeCallSyncHook) {
    if (require("UIManager").lazilyLoadView) {
      if (!set.has(arg0)) {
        const tmp10Result = require("nullthrows");
        const tmp13 = tmp10Result(require("UIManager").lazilyLoadView)(arg0);
        set.add(arg0);
        const tmp16 = null != tmp13 && null != tmp13.viewConfig;
        if (tmp16) {
          getConstants()[arg0] = tmp13.viewConfig;
          lazifyViewManagerConfig(arg0);
        }
      }
    }
    return closure_4[arg0];
  } else {
    return closure_4[arg0];
  }
}
let closure_4 = {};
const set = new Set();
let metroRequire = {};
let c7 = false;
let obj = {
  createView(arg0, arg1, arg2, arg3) {
    obj = require("UIManager");
    const view = obj.createView(arg0, arg1, arg2, arg3);
  },
  getConstants() {
    const tmp = c7;
    if (!tmp) {
      obj = require("UIManager");
      constants = obj.getConstants();
      c7 = true;
    }
    return constants;
  },
  getViewManagerConfig(arg0) {
    return getViewManagerConfig(arg0);
  },
  hasViewManagerConfig(arg0) {
    return null != getViewManagerConfig(arg0);
  }
};
require("UIManager").getViewManagerConfig = obj.getViewManagerConfig;
let tmp4 = c7;
if (!tmp4) {
  const importDefaultResult = require("UIManager");
  metroRequire = importDefaultResult.getConstants();
  c7 = true;
}
if (metroRequire.ViewManagerNames) {
  const importDefaultResult1 = require("UIManager");
  const ViewManagerNames = importDefaultResult1.getConstants().ViewManagerNames;
  let item = ViewManagerNames.forEach((item) => {
    let closure_0 = item;
    obj = defineLazyObjectProperty;
    const obj2 = {
      get() {
        const tmp = require("nullthrows");
        return tmp(require("UIManager").getConstantsForViewManager)(item);
      }
    };
    obj.default(require("UIManager"), item, obj2);
  });
}
if (!global.nativeCallSyncHook) {
  let _Object = Object;
  if (!c7) {
    const importDefaultResult2 = require("UIManager");
    metroRequire = importDefaultResult2.getConstants();
    c7 = true;
  }
  const keys1 = keys(metroRequire);
  const item1 = keys1.forEach((item) => {
    let closure_0 = item;
    const _default = _mod76.default;
    if (!_default.includes(item)) {
      if (!closure_4[item]) {
        const tmp4 = c7;
        if (!tmp4) {
          obj = require("UIManager");
          constants = obj.getConstants();
          c7 = true;
        }
        tmp3[item] = constants[item];
      }
      const obj2 = {
        get() {
            console.warn("Accessing view manager configs directly off UIManager via UIManager['" + item + "'] is no longer supported. Use UIManager.getViewManagerConfig('" + item + "') instead.");
            return obj.getViewManagerConfig(item);
          }
      };
      const tmpResult = defineLazyObjectProperty;
      tmpResult.default(require("UIManager"), item, obj2);
    }
  });
}

export default obj;