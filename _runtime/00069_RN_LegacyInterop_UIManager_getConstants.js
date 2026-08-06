// _runtime/00069_RN_LegacyInterop_UIManager_getConstants.js
let error;
let metroImportAll;
let c0 = arg1;
let c1 = importDefault;
const RN$LegacyInterop_UIManager_getConstants = global.RN$LegacyInterop_UIManager_getConstants;
let c3 = false;
let closure_4 = {};
const f17330 = () => {

};
({ RN$LegacyInterop_UIManager_getConstantsForViewManager: error, RN$LegacyInterop_UIManager_getDefaultEventTypes: metroImportAll } = global);
c0 = false;
c1 = null;
const f65613 = () => {

};
let obj = {};
obj = {
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
const merged = Object.assign(obj);
obj = {
  getConstantsForViewManager(arg0) {
    if (closure_7) {
      let obj = tmp(arg0);
    } else {
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error("" + "[ReactNative Architecture][JS] '" + "getConstantsForViewManager" + "' is not available in the new React Native architecture.");
      obj = {};
    }
    return obj;
  },
  getDefaultEventTypes() {
    if (closure_8) {
      if (typeof f65613 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (!c0) {
        let closure_1 = _null(70)(outer1_8)();
        c0 = true;
      }
      let items = closure_1;
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
    const tmp3 = _null(70);
    const tmp3Result = tmp3(callback(71).getFabricUIManager());
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
const merged1 = Object.assign(obj);
const merged2 = Object.assign({
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
});
obj.getViewManagerConfig = function getViewManagerConfig(arg0) {
  if (RN$LegacyInterop_UIManager_getConstants) {
    if (typeof f17330 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (!c3) {
      const dependencyMap = _null(70)(tmp)();
      c3 = true;
    }
    let getConstantsForViewManager = !tmp15;
    if (!dependencyMap[arg0]) {
      getConstantsForViewManager = obj.getConstantsForViewManager;
    }
    if (getConstantsForViewManager) {
      tmp14[arg0] = obj.getConstantsForViewManager(arg0);
    }
    return dependencyMap[arg0];
  } else {
    const _HermesInternal = HermesInternal;
    const _HermesInternal2 = HermesInternal;
    const combined = "getViewManagerConfig('" + arg0 + "')";
    const combined1 = "If '" + arg0 + "' has a ViewManager and you want to retrieve its native ViewConfig, please turn on the native ViewConfig interop layer. If you want to see if this component is registered with React Native, please call hasViewManagerConfig('" + arg0 + "') instead.";
    const _HermesInternal3 = HermesInternal;
    let str8 = "";
    const combined2 = "[ReactNative Architecture][JS] '" + combined + "' is not available in the new React Native architecture.";
    if (combined1) {
      const _HermesInternal4 = HermesInternal;
      str8 = " " + combined1;
    }
    console.error(combined2 + str8);
    return null;
  }
};
obj.hasViewManagerConfig = function hasViewManagerConfig(arg0) {
  return callback(72).unstable_hasComponent(arg0);
};
obj.getConstants = function getConstants() {
  if (RN$LegacyInterop_UIManager_getConstants) {
    if (typeof f17330 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (!c3) {
      let closure_4 = _null(70)(tmp)();
      c3 = true;
    }
    let tmp4 = closure_4;
  } else {
    const _console = console;
    const _HermesInternal = HermesInternal;
    console.error("" + "[ReactNative Architecture][JS] '" + "getConstants" + "' is not available in the new React Native architecture.");
    tmp4 = null;
  }
  return tmp4;
};
obj.findSubviewIn = function findSubviewIn(arg0, arg1, arg2) {
  const callback = arg2;
  const tmp = _null(70);
  const tmpResult = tmp(callback(71).getFabricUIManager());
  _null = tmpResult;
  const result = tmpResult.findShadowNodeByTag_DEPRECATED(arg0);
  if (result) {
    tmpResult.findNodeAtPoint(result, arg1[0], arg1[1], (stateNode) => {
      if (null != stateNode) {
        const node = stateNode.stateNode.node;
        if (node) {
          const nativeTag = stateNode.stateNode.canonical.nativeTag;
          tmpResult.measure(node, (arg0, arg1, arg2, arg3, arg4, arg5) => {
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
};
obj.viewIsDescendantOf = function viewIsDescendantOf(arg0, arg1, arg2) {
  const tmp = _null(70);
  const tmpResult = tmp(callback(71).getFabricUIManager());
  const result = tmpResult.findShadowNodeByTag_DEPRECATED(arg0);
  if (result) {
    const result1 = tmpResult.findShadowNodeByTag_DEPRECATED(arg1);
    if (result1) {
      const items = [16 & tmpResult.compareDocumentPosition(result1, result)];
      arg2(items);
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
};
obj.configureNextLayoutAnimation = function configureNextLayoutAnimation(duration, onAnimationComplete, fn) {
  const tmp = _null(70);
  const obj = callback(71);
  const result = tmp(callback(71).getFabricUIManager()).configureNextLayoutAnimation(duration, onAnimationComplete, fn);
};
if (RN$LegacyInterop_UIManager_getConstants) {
  if (!c3) {
    closure_4 = require("nullthrows")(RN$LegacyInterop_UIManager_getConstants)();
    c3 = true;
  }
  const keys = Object.keys(closure_4);
  const item = keys.forEach((arg0) => {
    if (typeof f17330 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (!c3) {
      const dependencyMap = _null(70)(RN$LegacyInterop_UIManager_getConstants)();
      c3 = true;
    }
    obj[arg0] = dependencyMap[arg0];
  });
  if (obj.getConstants().ViewManagerNames) {
    const ViewManagerNames = obj.getConstants().ViewManagerNames;
    const item1 = ViewManagerNames.forEach((arg0) => {
      let closure_0 = arg0;
      const obj = {
        get() {
          return outer1_1(outer1_2[0])(outer1_10.getConstantsForViewManager)(closure_0);
        }
      };
      _null(49)(obj, arg0, obj);
    });
  }
}

export default obj;