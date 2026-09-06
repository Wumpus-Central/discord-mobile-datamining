// === Module 65: ? ===

// Module 65
import _modDef38 from "module_38" /* 38 */;
import customBubblingEventTypesAll from "customBubblingEventTypes" /* 66 */;
import mergeDefault from "merge" /* 67 */;
import _mod103 from "module_103" /* 103 */;
import accumulateDifferencesAll from "accumulateDifferences" /* 107 */;
import noop from "module_19" /* 19 */;

require = arg1;

export function setRuntimeConfigProvider(arg0) {
  if (undefined === global) {
    global = arg0;
  }
}
export const get = function get(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  customBubblingEventTypesAll.register(arg0, () => {
    let tmpResult;
    if (global != null) {
      tmpResult = tmp(closure_0);
    }
    if (tmpResult == null) {
      const obj = { native: !global.RN$Bridgeless, verify: false };
      tmpResult = obj;
    }
    ({ native, verify } = tmpResult);
    if (native) {
      let viewConfig = mergeDefault(closure_0);
      if (viewConfig == null) {
        viewConfig = _mod103.createViewConfig(closure_1());
      }
      let viewConfig1 = viewConfig;
    } else {
      viewConfig1 = _mod103.createViewConfig(closure_1());
      if (viewConfig1 == null) {
        viewConfig1 = mergeDefault(closure_0);
      }
    }
    _modDef38(null != viewConfig1, "NativeComponentRegistry.get: both static and native view config are missing for native component \"%s\".", closure_0);
    if (verify) {
      let tmp20 = viewConfig1;
      if (!native) {
        tmp20 = mergeDefault(tmp18);
      }
      if (null == tmp20) {
        return viewConfig1;
      } else {
        let viewConfig2 = viewConfig1;
        if (native) {
          viewConfig2 = _mod103.createViewConfig(closure_1());
        }
        const validateResult = accumulateDifferencesAll.validate(tmp18, tmp20, viewConfig2);
        if ("invalid" === validateResult.type) {
          const _console = console;
          console.error(tmp24(107).stringifyValidationResult(tmp18, validateResult));
          const tmp24Result = tmp24(107);
        }
        tmp24 = importAll;
      }
    }
    return viewConfig1;
  });
  return arg0;
};
export const getWithFallback_DEPRECATED = function getWithFallback_DEPRECATED(framebus, arg1) {
  if (null == global) {
    _modDef38(null == global, "Unexpected invocation!");
    class FallbackNativeComponent {
      constructor(arg0) {
        return null;
      }
    }
    if (null != obj2.getViewManagerConfig(framebus)) {
      closure_129_0 = framebus;
      closure_129_1 = arg1;
      customBubblingEventTypesAll.register(framebus, () => {
        let tmpResult;
        if (global != null) {
          tmpResult = tmp(closure_0);
        }
        if (tmpResult == null) {
          const obj = { native: !global.RN$Bridgeless, verify: false };
          tmpResult = obj;
        }
        ({ native, verify } = tmpResult);
        if (native) {
          let viewConfig = mergeDefault(closure_0);
          if (viewConfig == null) {
            viewConfig = _mod103.createViewConfig(closure_1());
          }
          let viewConfig1 = viewConfig;
        } else {
          viewConfig1 = _mod103.createViewConfig(closure_1());
          if (viewConfig1 == null) {
            viewConfig1 = mergeDefault(closure_0);
          }
        }
        _modDef38(null != viewConfig1, "NativeComponentRegistry.get: both static and native view config are missing for native component \"%s\".", closure_0);
        if (verify) {
          let tmp20 = viewConfig1;
          if (!native) {
            tmp20 = mergeDefault(tmp18);
          }
          if (null == tmp20) {
            return viewConfig1;
          } else {
            let viewConfig2 = viewConfig1;
            if (native) {
              viewConfig2 = _mod103.createViewConfig(closure_1());
            }
            const validateResult = accumulateDifferencesAll.validate(tmp18, tmp20, viewConfig2);
            if ("invalid" === validateResult.type) {
              const _console = console;
              console.error(tmp24(107).stringifyValidationResult(tmp18, validateResult));
              const tmp24Result = tmp24(107);
            }
            tmp24 = importAll;
          }
        }
        return viewConfig1;
      });
      return framebus;
    }
  } else if (null != global(framebus)) {
    closure_0 = framebus;
    closure_1 = arg1;
    customBubblingEventTypesAll.register(framebus, () => {
      let tmpResult;
      if (global != null) {
        tmpResult = tmp(closure_0);
      }
      if (tmpResult == null) {
        const obj = { native: !global.RN$Bridgeless, verify: false };
        tmpResult = obj;
      }
      ({ native, verify } = tmpResult);
      if (native) {
        let viewConfig = mergeDefault(closure_0);
        if (viewConfig == null) {
          viewConfig = _mod103.createViewConfig(closure_1());
        }
        let viewConfig1 = viewConfig;
      } else {
        viewConfig1 = _mod103.createViewConfig(closure_1());
        if (viewConfig1 == null) {
          viewConfig1 = mergeDefault(closure_0);
        }
      }
      _modDef38(null != viewConfig1, "NativeComponentRegistry.get: both static and native view config are missing for native component \"%s\".", closure_0);
      if (verify) {
        let tmp20 = viewConfig1;
        if (!native) {
          tmp20 = mergeDefault(tmp18);
        }
        if (null == tmp20) {
          return viewConfig1;
        } else {
          let viewConfig2 = viewConfig1;
          if (native) {
            viewConfig2 = _mod103.createViewConfig(closure_1());
          }
          const validateResult = accumulateDifferencesAll.validate(tmp18, tmp20, viewConfig2);
          if ("invalid" === validateResult.type) {
            const _console = console;
            console.error(tmp24(107).stringifyValidationResult(tmp18, validateResult));
            const tmp24Result = tmp24(107);
          }
          tmp24 = importAll;
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
  FallbackNativeComponent.displayName = "Fallback(" + framebus + ")";
  return FallbackNativeComponent;
};
export const unstable_hasStaticViewConfig = function unstable_hasStaticViewConfig(arg0) {
  let obj;
  if (global != null) {
    obj = tmp(arg0);
  }
  if (obj == null) {
    obj = { native: true };
  }
  return !obj.native;
};