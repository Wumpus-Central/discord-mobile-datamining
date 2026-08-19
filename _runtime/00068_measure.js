// === Module 68: measure ===

// Module 68 (measure)
import RN$LegacyInterop_UIManager_getConstants from "RN$LegacyInterop_UIManager_getConstants" /* 69 */;
import nullthrowsDefault from "nullthrows" /* 70 */;
import getFabricUIManager from "getFabricUIManager" /* 71 */;
import getConstants from "getConstants" /* 73 */;

if (true === global.RN$Bridgeless) {
  let _default = RN$LegacyInterop_UIManager_getConstants.default;
} else {
  _default = getConstants.default;
}
let obj = {};
const merged = Object.assign(_default);
obj.measure = function measure(arg0, arg1) {
  if (arg0 % 2 === 0) {
    const tmp5 = nullthrowsDefault;
    const tmp5Result = tmp5(getFabricUIManager.getFabricUIManager());
    const result = tmp5Result.findShadowNodeByTag_DEPRECATED(arg0);
    if (result) {
      tmp5Result.measure(result, arg1);
    } else {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.warn("measure cannot find view with tag #" + arg0);
      arg1();
    }
    const obj = getFabricUIManager;
  } else {
    _default.measure(arg0, arg1);
  }
};
obj.measureInWindow = function measureInWindow(arg0, arg1) {
  if (arg0 % 2 === 0) {
    const tmp5 = nullthrowsDefault;
    const tmp5Result = tmp5(getFabricUIManager.getFabricUIManager());
    const result = tmp5Result.findShadowNodeByTag_DEPRECATED(arg0);
    if (result) {
      tmp5Result.measureInWindow(result, arg1);
    } else {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.warn("measure cannot find view with tag #" + arg0);
      arg1();
    }
    const obj = getFabricUIManager;
  } else {
    _default.measureInWindow(arg0, arg1);
  }
};
obj.measureLayout = function measureLayout(arg0, arg1, arg2, arg3) {
  if (arg0 % 2 === 0) {
    const tmp10 = nullthrowsDefault;
    const tmp10Result = tmp10(getFabricUIManager.getFabricUIManager());
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
};
obj.measureLayoutRelativeToParent = function measureLayoutRelativeToParent(arg0, arg1, arg2) {
  const _require = arg2;
  if (arg0 % 2 === 0) {
    const _console = console;
    console.warn("RCTUIManager.measureLayoutRelativeToParent method is deprecated and it will not be implemented in newer versions of RN (Fabric) - T47686450");
    const tmp8 = nullthrowsDefault;
    const tmp8Result = tmp8(_require(71).getFabricUIManager());
    const result = tmp8Result.findShadowNodeByTag_DEPRECATED(arg0);
    if (result) {
      tmp8Result.measure(result, (arg0, arg1, arg2, arg3, arg4, arg5) => {
        callback(arg0, arg1, arg2, arg3);
      });
    }
    const obj = _require(71);
  } else {
    const result1 = _default.measureLayoutRelativeToParent(arg0, arg1, arg2);
  }
};
obj.dispatchViewManagerCommand = function dispatchViewManagerCommand(num) {
  if (typeof num !== "number") {
    const _Error = Error;
    error = new Error("dispatchViewManagerCommand: found null reactTag");
    throw error;
  } else if (num % 2 === 0) {
    const tmp5 = nullthrowsDefault;
    const tmp5Result = tmp5(getFabricUIManager.getFabricUIManager());
    const result = tmp5Result.findShadowNodeByTag_DEPRECATED(num);
    if (result) {
      const _HermesInternal = HermesInternal;
      tmp5Result.dispatchCommand(result, "" + arg1, arg2);
    }
    const obj = getFabricUIManager;
  } else {
    const result1 = _default.dispatchViewManagerCommand(num, arg1, arg2);
  }
};

export default obj;