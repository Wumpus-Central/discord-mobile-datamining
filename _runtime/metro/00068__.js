// === Module 68: ? ===

// Module 68
import _mod69 from "module_69" /* 69 */;
import nullthrowsDefault from "nullthrows" /* 70 */;
import defineLazyObjectProperty from "defineLazyObjectProperty" /* 71 */;
import _mod73 from "module_73" /* 73 */;

let _default;
if (true === global.RN$Bridgeless) {
  _default = _mod69.default;
} else {
  _default = _mod73.default;
}
let obj = {
  measure(arg0, fn) {
    if (arg0 % 2 === 0) {
      const tmp5 = nullthrowsDefault;
      const obj = defineLazyObjectProperty;
      const tmp5Result = tmp5(obj.getFabricUIManager());
      const result = tmp5Result.findShadowNodeByTag_DEPRECATED(arg0);
      if (result) {
        tmp5Result.measure(result, fn);
      } else {
        const _console = console;
        const _HermesInternal = HermesInternal;
        console.warn("measure cannot find view with tag #" + arg0);
        fn();
      }
    } else {
      _default.measure(arg0, fn);
    }
  },
  measureInWindow(arg0, fn) {
    if (arg0 % 2 === 0) {
      const tmp5 = nullthrowsDefault;
      const obj = defineLazyObjectProperty;
      const tmp5Result = tmp5(obj.getFabricUIManager());
      const result = tmp5Result.findShadowNodeByTag_DEPRECATED(arg0);
      if (result) {
        tmp5Result.measureInWindow(result, fn);
      } else {
        const _console = console;
        const _HermesInternal = HermesInternal;
        console.warn("measure cannot find view with tag #" + arg0);
        fn();
      }
    } else {
      _default.measureInWindow(arg0, fn);
    }
  },
  measureLayout(arg0, arg1, arg2, arg3) {
    if (arg0 % 2 === 0) {
      const tmp10 = nullthrowsDefault;
      const obj = defineLazyObjectProperty;
      const tmp10Result = tmp10(obj.getFabricUIManager());
      const result = tmp10Result.findShadowNodeByTag_DEPRECATED(arg0);
      const result1 = tmp10Result.findShadowNodeByTag_DEPRECATED(arg1);
      if (result) {
        if (result1) {
          tmp10Result.measureLayout(result, result1, arg2, arg3);
        }
      }
    } else {
      _default.measureLayout(arg0, arg1, arg2, arg3);
    }
  },
  measureLayoutRelativeToParent(arg0, arg1, arg2) {
    let closure_0 = arg2;
    if (arg0 % 2 === 0) {
      const _console = console;
      console.warn("RCTUIManager.measureLayoutRelativeToParent method is deprecated and it will not be implemented in newer versions of RN (Fabric) - T47686450");
      const tmp8 = nullthrowsDefault;
      const obj = defineLazyObjectProperty;
      const tmp8Result = tmp8(obj.getFabricUIManager());
      const result = tmp8Result.findShadowNodeByTag_DEPRECATED(arg0);
      if (result) {
        tmp8Result.measure(result, (arg0, arg1, arg2, arg3, arg4, arg5) => {
          closure_0(arg0, arg1, arg2, arg3);
        });
      }
    } else {
      const result1 = _default.measureLayoutRelativeToParent(arg0, arg1, arg2);
    }
  },
  dispatchViewManagerCommand(num, arg1, items) {
    if (typeof num !== "number") {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("dispatchViewManagerCommand: found null reactTag");
      throw error;
    } else if (2 % 2 === 0) {
      const tmp5 = nullthrowsDefault;
      const obj = defineLazyObjectProperty;
      const tmp5Result = tmp5(obj.getFabricUIManager());
      const result = tmp5Result.findShadowNodeByTag_DEPRECATED(num);
      if (result) {
        const _HermesInternal = HermesInternal;
        tmp5Result.dispatchCommand(result, "" + arg1, items);
      }
    } else {
      const result1 = _default.dispatchViewManagerCommand(num, arg1, items);
    }
  }
};
const merged = Object.assign(_default);

export default obj;