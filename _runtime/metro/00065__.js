// === Module 65: ? ===

// Module 65
import _modDef38 from "module_38" /* 38 */;
import customBubblingEventTypesAll from "customBubblingEventTypes" /* 66 */;
import getNativeComponentAttributesDefault from "getNativeComponentAttributes" /* 67 */;
import react from "react" /* 19 */;

const require = globalThis.__r;
let hasOwnProperty;


export function setRuntimeConfigProvider(arg0) {
  if (undefined === hasOwnProperty) {
    hasOwnProperty = arg0;
  }
}
export const get = function get(APNGDecorationView, arg1) {
  let closure_0 = APNGDecorationView;
  let closure_1 = arg1;
  const obj = customBubblingEventTypesAll;
  obj.register(APNGDecorationView, () => {
    let native;
    let tmp6;
    let verify;
    let viewConfig1;
    let tmpResult;
    if (closure_2_5 != null) {
      tmpResult = tmp(RNBridgeless);
    }
    if (tmpResult == null) {
      tmpResult = { native: !RNBridgeless.RN$Bridgeless, verify: false };
      const obj = { native: !RNBridgeless.RN$Bridgeless, verify: false };
    }
    ({ native, verify } = tmpResult);
    if (native) {
      let viewConfig = getNativeComponentAttributesDefault(RNBridgeless);
      if (viewConfig == null) {
        const obj3 = closure_1(dependencyMap[3]);
        viewConfig = obj3.createViewConfig(closure_1());
      }
      viewConfig1 = viewConfig;
      tmp6 = dependencyMap;
    } else {
      tmp6 = dependencyMap;
      const obj2 = closure_1(dependencyMap[3]);
      viewConfig1 = obj2.createViewConfig(closure_1());
      if (viewConfig1 == null) {
        viewConfig1 = require("getNativeComponentAttributes")(RNBridgeless);
      }
    }
    require("module_38")(null != viewConfig1, "NativeComponentRegistry.get: both static and native view config are missing for native component \"%s\".", RNBridgeless);
    if (verify) {
      let tmp20 = viewConfig1;
      if (!native) {
        tmp20 = require("getNativeComponentAttributes")(RNBridgeless);
      }
      if (null == tmp20) {
        return viewConfig1;
      } else {
        let viewConfig2 = viewConfig1;
        if (native) {
          const obj4 = closure_1(tmp6[3]);
          viewConfig2 = obj4.createViewConfig(closure_1());
        }
        const obj5 = require("module_107");
        const validateResult = obj5.validate(RNBridgeless, tmp20, viewConfig2);
        if ("invalid" === validateResult.type) {
          const _console = console;
          const tmp24Result = require("module_107");
          error(tmp24Result.stringifyValidationResult(RNBridgeless, validateResult));
        }
      }
    }
    return viewConfig1;
  });
  return APNGDecorationView;
};
export const getWithFallback_DEPRECATED = function getWithFallback_DEPRECATED(APNGDecorationView, arg1) {
  let obj2;
  if (null == closure_5) {
    _modDef38(null == closure_5, "Unexpected invocation!");
    class FallbackNativeComponent {
      constructor(arg0) {
        return null;
      }
    }
    if (null != obj2.getViewManagerConfig(APNGDecorationView)) {
      let closure_0 = APNGDecorationView;
      let closure_1 = arg1;
      let obj3 = customBubblingEventTypesAll;
      obj3.register(APNGDecorationView, () => {
        let native;
        let tmp6;
        let verify;
        let viewConfig1;
        let tmpResult;
        if (closure_2_5 != null) {
          tmpResult = tmp(RNBridgeless);
        }
        if (tmpResult == null) {
          tmpResult = { native: !RNBridgeless.RN$Bridgeless, verify: false };
          const obj = { native: !RNBridgeless.RN$Bridgeless, verify: false };
        }
        ({ native, verify } = tmpResult);
        if (native) {
          let viewConfig = getNativeComponentAttributesDefault(RNBridgeless);
          if (viewConfig == null) {
            const obj3 = closure_1(dependencyMap[3]);
            viewConfig = obj3.createViewConfig(closure_1());
          }
          viewConfig1 = viewConfig;
          tmp6 = dependencyMap;
        } else {
          tmp6 = dependencyMap;
          const obj2 = closure_1(dependencyMap[3]);
          viewConfig1 = obj2.createViewConfig(closure_1());
          if (viewConfig1 == null) {
            viewConfig1 = require("getNativeComponentAttributes")(RNBridgeless);
          }
        }
        require("module_38")(null != viewConfig1, "NativeComponentRegistry.get: both static and native view config are missing for native component \"%s\".", RNBridgeless);
        if (verify) {
          let tmp20 = viewConfig1;
          if (!native) {
            tmp20 = require("getNativeComponentAttributes")(RNBridgeless);
          }
          if (null == tmp20) {
            return viewConfig1;
          } else {
            let viewConfig2 = viewConfig1;
            if (native) {
              const obj4 = closure_1(tmp6[3]);
              viewConfig2 = obj4.createViewConfig(closure_1());
            }
            const obj5 = require("module_107");
            const validateResult = obj5.validate(RNBridgeless, tmp20, viewConfig2);
            if ("invalid" === validateResult.type) {
              const _console = console;
              const tmp24Result = require("module_107");
              error(tmp24Result.stringifyValidationResult(RNBridgeless, validateResult));
            }
          }
        }
        return viewConfig1;
      });
      return APNGDecorationView;
    }
  } else if (null != closure_5(APNGDecorationView)) {
    closure_0 = APNGDecorationView;
    closure_1 = arg1;
    let obj = customBubblingEventTypesAll;
    obj.register(APNGDecorationView, () => {
      let native;
      let tmp6;
      let verify;
      let viewConfig1;
      let tmpResult;
      if (closure_2_5 != null) {
        tmpResult = tmp(RNBridgeless);
      }
      if (tmpResult == null) {
        tmpResult = { native: !RNBridgeless.RN$Bridgeless, verify: false };
        const obj = { native: !RNBridgeless.RN$Bridgeless, verify: false };
      }
      ({ native, verify } = tmpResult);
      if (native) {
        let viewConfig = getNativeComponentAttributesDefault(RNBridgeless);
        if (viewConfig == null) {
          const obj3 = closure_1(dependencyMap[3]);
          viewConfig = obj3.createViewConfig(closure_1());
        }
        viewConfig1 = viewConfig;
        tmp6 = dependencyMap;
      } else {
        tmp6 = dependencyMap;
        const obj2 = closure_1(dependencyMap[3]);
        viewConfig1 = obj2.createViewConfig(closure_1());
        if (viewConfig1 == null) {
          viewConfig1 = require("getNativeComponentAttributes")(RNBridgeless);
        }
      }
      require("module_38")(null != viewConfig1, "NativeComponentRegistry.get: both static and native view config are missing for native component \"%s\".", RNBridgeless);
      if (verify) {
        let tmp20 = viewConfig1;
        if (!native) {
          tmp20 = require("getNativeComponentAttributes")(RNBridgeless);
        }
        if (null == tmp20) {
          return viewConfig1;
        } else {
          let viewConfig2 = viewConfig1;
          if (native) {
            const obj4 = closure_1(tmp6[3]);
            viewConfig2 = obj4.createViewConfig(closure_1());
          }
          const obj5 = require("module_107");
          const validateResult = obj5.validate(RNBridgeless, tmp20, viewConfig2);
          if ("invalid" === validateResult.type) {
            const _console = console;
            const tmp24Result = require("module_107");
            error(tmp24Result.stringifyValidationResult(RNBridgeless, validateResult));
          }
        }
      }
      return viewConfig1;
    });
    class FallbackNativeComponent {
      constructor(arg0) {
        return null;
      }
    }
  }
  class FallbackNativeComponent {
    constructor(arg0) {
      return null;
    }
  }
  FallbackNativeComponent.displayName = "Fallback(" + APNGDecorationView + ")";
  return FallbackNativeComponent;
};
export const unstable_hasStaticViewConfig = function unstable_hasStaticViewConfig(arg0) {
  let obj;
  if (hasOwnProperty != null) {
    obj = tmp(arg0);
  }
  if (obj == null) {
    obj = { native: true };
  }
  return !obj.native;
};