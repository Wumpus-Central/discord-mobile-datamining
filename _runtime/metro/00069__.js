// === Module 69: ? ===

// Module 69
import defineLazyObjectPropertyDefault from "defineLazyObjectProperty" /* 49 */;
import defineLazyObjectProperty from "defineLazyObjectProperty" /* 71 */;
import unstable_hasComponent from "unstable_hasComponent" /* 72 */;

const require = globalThis.__r;

let metroImportAll;
let metroImportDefault;
const RN$LegacyInterop_UIManager_getConstants = global.RN$LegacyInterop_UIManager_getConstants;
let c3 = false;
let closure_4 = {};
const f18595 = () => {

};
({ RN$LegacyInterop_UIManager_getConstantsForViewManager: metroImportDefault, RN$LegacyInterop_UIManager_getDefaultEventTypes: metroImportAll } = global);
let c0 = false;
let c1 = null;
const f80081 = () => {

};
let obj = {
  getViewManagerConfig(arg0) {
    if (RN$LegacyInterop_UIManager_getConstants) {
      if (typeof f18595 === "function") {
        const tmp11 = c3;
        if (!tmp11) {
          closure_4 = require("nullthrows")(tmp)();
          c3 = true;
        }
        const getConstantsForViewManager = !closure_4[arg0] && obj.getConstantsForViewManager;
        if (getConstantsForViewManager) {
          closure_4[arg0] = obj.getConstantsForViewManager(arg0);
        }
        return closure_4[arg0];
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      const _HermesInternal = HermesInternal;
      const _HermesInternal2 = HermesInternal;
      const combined = "getViewManagerConfig('" + arg0 + "')";
      const combined1 = "If '" + arg0 + "' has a ViewManager and you want to retrieve its native ViewConfig, please turn on the native ViewConfig interop layer. If you want to see if this component is registered with React Native, please call hasViewManagerConfig('" + arg0 + "') instead.";
      const _HermesInternal3 = HermesInternal;
      const _console = console;
      let str8 = "";
      const combined2 = "[ReactNative Architecture][JS] '" + combined + "' is not available in the new React Native architecture.";
      if (combined1) {
        const _HermesInternal4 = HermesInternal;
        str8 = " " + combined1;
      }
      error(combined2 + str8);
      return null;
    }
  },
  hasViewManagerConfig(arg0) {
    obj = unstable_hasComponent;
    return obj.unstable_hasComponent(arg0);
  },
  getConstants() {
    let tmp4;
    if (RN$LegacyInterop_UIManager_getConstants) {
      if (typeof f18595 === "function") {
        const tmp6 = c3;
        if (!tmp6) {
          closure_4 = require("nullthrows")(tmp)();
          c3 = true;
        }
        tmp4 = closure_4;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error("" + "[ReactNative Architecture][JS] '" + "getConstants" + "' is not available in the new React Native architecture.");
      tmp4 = null;
    }
    return tmp4;
  },
  findSubviewIn(arg0, arg1, arg2) {
    let closure_0 = arg2;
    const tmp = require("nullthrows");
    obj = defineLazyObjectProperty;
    const tmpResult = tmp(obj.getFabricUIManager());
    let closure_1 = tmpResult;
    const result = tmpResult.findShadowNodeByTag_DEPRECATED(arg0);
    if (result) {
      tmpResult.findNodeAtPoint(result, arg1[0], arg1[1], (stateNode) => {
        if (null != stateNode) {
          const node = stateNode.stateNode.node;
          if (node) {
            const nativeTag = stateNode.stateNode.canonical.nativeTag;
            closure_1.measure(node, (arg0, arg1, arg2, arg3, arg4, arg5) => {
              nativeTag(nativeTag, arg4, arg5, arg2, arg3);
            });
          } else {
            const _console2 = console;
            console.error("findSubviewIn(): Cannot find node at point");
          }
        } else {
          const _console = console;
          console.error("findSubviewIn(): Cannot find node at point");
        }
      });
    } else {
      let _console = console;
      const _HermesInternal = HermesInternal;
      console.error("findSubviewIn() noop: Cannot find view with reactTag " + arg0);
    }
  },
  viewIsDescendantOf(arg0, arg1, fn) {
    const tmp = require("nullthrows");
    obj = defineLazyObjectProperty;
    const tmpResult = tmp(obj.getFabricUIManager());
    const result = tmpResult.findShadowNodeByTag_DEPRECATED(arg0);
    if (result) {
      const result1 = tmpResult.findShadowNodeByTag_DEPRECATED(arg1);
      if (result1) {
        const items = [16 & tmpResult.compareDocumentPosition(result1, result)];
        fn(items);
      } else {
        const _console2 = console;
        const _HermesInternal2 = HermesInternal;
        console.error("viewIsDescendantOf() noop: Cannot find view with ancestorReactTag " + arg1);
      }
    } else {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error("viewIsDescendantOf() noop: Cannot find view with reactTag " + arg0);
    }
  },
  configureNextLayoutAnimation(duration, onAnimationComplete, fn2) {
    const tmp = require("nullthrows");
    obj = defineLazyObjectProperty;
    const tmpResult = tmp(obj.getFabricUIManager());
    const result = tmpResult.configureNextLayoutAnimation(duration, onAnimationComplete, fn2);
  }
};
const obj2 = {
  measure(arg0, arg1) {
    console.error("" + "[ReactNative Architecture][JS] '" + "measure" + "' is not available in the new React Native architecture.");
  },
  measureInWindow(arg0, arg1) {
    console.error("" + "[ReactNative Architecture][JS] '" + "measureInWindow" + "' is not available in the new React Native architecture.");
  },
  measureLayout(arg0, arg1, arg2, arg3) {
    console.error("" + "[ReactNative Architecture][JS] '" + "measureLayout" + "' is not available in the new React Native architecture.");
  },
  measureLayoutRelativeToParent(arg0, arg1, arg2) {
    console.error("" + "[ReactNative Architecture][JS] '" + "measureLayoutRelativeToParent" + "' is not available in the new React Native architecture.");
  },
  dispatchViewManagerCommand(arg0, arg1, arg2) {
    console.error("" + "[ReactNative Architecture][JS] '" + "dispatchViewManagerCommand" + "' is not available in the new React Native architecture.");
  }
};
const merged = Object.assign(obj2);
const obj3 = {
  getConstantsForViewManager(arg0) {
    if (metroImportDefault) {
      obj = tmp(arg0);
    } else {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error("" + "[ReactNative Architecture][JS] '" + "getConstantsForViewManager" + "' is not available in the new React Native architecture.");
      obj = {};
    }
    return obj;
  },
  getDefaultEventTypes() {
    let items;
    if (metroImportAll) {
      if (typeof f80081 === "function") {
        let closure_1;
        const tmp5 = c0;
        if (!tmp5) {
          closure_1 = require("nullthrows")(metroImportAll)();
          c0 = true;
        }
        items = closure_1;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error("" + "[ReactNative Architecture][JS] '" + "getDefaultEventTypes" + "' is not available in the new React Native architecture.");
      items = [];
    }
    return items;
  },
  setLayoutAnimationEnabledExperimental(arg0) {

  },
  sendAccessibilityEvent(arg0, arg1) {
    let str = "focus";
    if (arg1 !== 8) {
      str = "windowStateChange";
      if (arg1 !== 32) {
        str = "click";
        if (arg1 !== 1) {
          str = "viewHoverEnter";
          if (arg1 !== 128) {
            const _console = console;
            const _HermesInternal = HermesInternal;
            console.error("sendAccessibilityEvent() dropping event: Called with unsupported eventType: " + arg1);
          }
        }
      }
    }
    const tmp3 = require("nullthrows");
    obj = defineLazyObjectProperty;
    const tmp3Result = tmp3(obj.getFabricUIManager());
    const result = tmp3Result.findShadowNodeByTag_DEPRECATED(arg0);
    if (result) {
      const result1 = tmp3Result.sendAccessibilityEvent(result, str);
    } else {
      const _console2 = console;
      const _HermesInternal2 = HermesInternal;
      console.error("sendAccessibilityEvent() dropping event: Cannot find view with tag #" + arg0);
    }
  }
};
const merged1 = Object.assign(obj3);
const obj4 = {
  createView(arg0, arg1, arg2, arg3) {
    console.error("" + "[ReactNative Architecture][JS] '" + "createView" + "' is not available in the new React Native architecture.");
  },
  updateView(arg0, arg1, arg2) {
    console.error("" + "[ReactNative Architecture][JS] '" + "updateView" + "' is not available in the new React Native architecture.");
  },
  setChildren(arg0, arg1) {
    console.error("" + "[ReactNative Architecture][JS] '" + "setChildren" + "' is not available in the new React Native architecture.");
  },
  manageChildren(arg0, arg1, arg2, arg3, arg4, arg5) {
    console.error("" + "[ReactNative Architecture][JS] '" + "manageChildren" + "' is not available in the new React Native architecture.");
  },
  setJSResponder(arg0, arg1) {
    console.error("" + "[ReactNative Architecture][JS] '" + "setJSResponder" + "' is not available in the new React Native architecture.");
  },
  clearJSResponder() {
    console.error("" + "[ReactNative Architecture][JS] '" + "clearJSResponder" + "' is not available in the new React Native architecture.");
  }
};
const merged2 = Object.assign(obj4);
if (RN$LegacyInterop_UIManager_getConstants) {
  let tmp5 = c3;
  const _Object = Object;
  if (!c3) {
    closure_4 = require("nullthrows")(RN$LegacyInterop_UIManager_getConstants)();
    c3 = true;
  }
  let tmp6 = closure_4;
  const keys1 = keys(closure_4);
  const item = keys1.forEach((item) => {
    if (typeof f18595 === "function") {
      const tmp2 = c3;
      if (!tmp2) {
        closure_4 = require("nullthrows")(RN$LegacyInterop_UIManager_getConstants)();
        c3 = true;
      }
      tmp[item] = closure_4[item];
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
  if (obj.getConstants().ViewManagerNames) {
    const ViewManagerNames = obj.getConstants().ViewManagerNames;
    const item1 = ViewManagerNames.forEach((item) => {
      let closure_0 = item;
      obj = {
        get() {
          return require("nullthrows")(obj.getConstantsForViewManager)(item);
        }
      };
      defineLazyObjectPropertyDefault(obj, item, obj);
    });
  }
}

export default obj;