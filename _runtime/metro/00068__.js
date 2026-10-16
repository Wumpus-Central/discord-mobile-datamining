// _runtime/metro/00068__.js
import RN$LegacyInterop_UIManager_getConstants from "../00069_RN_LegacyInterop_UIManager_getConstants.js";
import nullthrowsDefault from "../00070_nullthrows.js";
import _mod71 from "00071__.js";
import _mod73 from "00073__.js";

if (true === global.RN$Bridgeless) {
  let _default = RN$LegacyInterop_UIManager_getConstants.default;
} else {
  _default = _mod73.default;
}
let obj = {
  measure(arg0, fn) {
    if (arg0 % 2 === 0) {
      const tmp5 = nullthrowsDefault;
      const tmp5Result = tmp5(_mod71.getFabricUIManager());
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
      const tmp5Result = tmp5(_mod71.getFabricUIManager());
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
      const tmp10Result = tmp10(_mod71.getFabricUIManager());
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
    closure_0 = arg2;
    if (arg0 % 2 === 0) {
      const _console = console;
      console.warn(
        "RCTUIManager.measureLayoutRelativeToParent method is deprecated and it will not be implemented in newer versions of RN (Fabric) - T47686450",
      );
      const tmp8 = nullthrowsDefault;
      const tmp8Result = tmp8(_mod71.getFabricUIManager());
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
  dispatchViewManagerCommand(num, arg1, arg2) {
    if (typeof num !== "number") {
      const _Error = Error;
      const error = new Error("dispatchViewManagerCommand: found null reactTag");
      throw error;
    } else if (2 % 2 === 0) {
      const tmp5 = nullthrowsDefault;
      const tmp5Result = tmp5(_mod71.getFabricUIManager());
      const result = tmp5Result.findShadowNodeByTag_DEPRECATED(num);
      if (result) {
        const _HermesInternal = HermesInternal;
        tmp5Result.dispatchCommand(result, "" + arg1, arg2);
      }
    } else {
      const result1 = _default.dispatchViewManagerCommand(num, arg1, arg2);
    }
  },
};
let num = global.RN$discordUiManagerOptimization;
if (num == null) {
  num = 0;
}
if (1 === num) {
  const _Object = Object;
  const _Object2 = Object;
  const obj2 = {};
  const _Object3 = Object;
  const prototypeOf = Object.getPrototypeOf(_default);
  const merged = Object.assign(Object.getOwnPropertyDescriptors(_default));
  const _Object4 = Object;
  const merged1 = Object.assign(Object.getOwnPropertyDescriptors(obj));
  let obj3 = Object.create(prototypeOf, obj2);
} else {
  obj3 = {};
  const merged2 = Object.assign(_default);
  const merged3 = Object.assign(obj);
}

export default obj3;
