// === Module 65: setRuntimeConfigProvider ===

// Module 65 (setRuntimeConfigProvider)
import "noop";

const require = arg1;

export function setRuntimeConfigProvider(arg0) {
  if (undefined === closure_5) {
    closure_5 = arg0;
  }
}
export const get = function get(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  importAll(66).register(arg0, () => {
    let native;
    let verify;
    let tmpResult;
    if (outer1_5 != null) {
      tmpResult = tmp(RNBridgeless);
    }
    if (tmpResult == null) {
      const obj = { native: null, verify: false };
      obj[0] = !RNBridgeless.RN$Bridgeless;
      tmpResult = obj;
    }
    ({ native, verify } = tmpResult);
    if (native) {
      let viewConfig = outer1_2(outer1_4[2])(RNBridgeless);
      if (viewConfig == null) {
        viewConfig = callback(tmp12[3]).createViewConfig(callback());
        const obj3 = callback(tmp12[3]);
      }
      let viewConfig1 = viewConfig;
      let tmp6 = tmp12;
    } else {
      tmp6 = outer1_4;
      viewConfig1 = callback(outer1_4[3]).createViewConfig(callback());
      if (viewConfig1 == null) {
        viewConfig1 = outer1_2(tmp6[2])(RNBridgeless);
      }
      const obj2 = callback(outer1_4[3]);
    }
    outer1_2(tmp6[4])(null != viewConfig1, "NativeComponentRegistry.get: both static and native view config are missing for native component \"%s\".", RNBridgeless);
    if (verify) {
      let tmp20 = viewConfig1;
      if (!native) {
        tmp20 = outer1_2(tmp6[2])(tmp18);
      }
      if (null == tmp20) {
        return viewConfig1;
      } else {
        let viewConfig2 = viewConfig1;
        if (native) {
          viewConfig2 = callback(tmp6[3]).createViewConfig(callback());
          const obj4 = callback(tmp6[3]);
        }
        const validateResult = outer1_3(tmp6[5]).validate(tmp18, tmp20, viewConfig2);
        if ("invalid" === validateResult.type) {
          const _console = console;
          console.error(tmp24(tmp6[5]).stringifyValidationResult(tmp18, validateResult));
          const tmp24Result = tmp24(tmp6[5]);
        }
        const obj5 = outer1_3(tmp6[5]);
        tmp24 = outer1_3;
      }
    }
    return viewConfig1;
  });
  return arg0;
};
export const getWithFallback_DEPRECATED = function getWithFallback_DEPRECATED(arg0, arg1) {
  if (null == callback) {
    importDefault(38)(null == callback, "Unexpected invocation!");
    class FallbackNativeComponent {
      constructor(arg0) {
        return null;
      }
    }
    if (null != obj2.getViewManagerConfig(arg0)) {
      let closure_0 = arg0;
      let closure_1 = arg1;
      importAll(66).register(arg0, () => {
        let native;
        let verify;
        let tmpResult;
        if (outer1_5 != null) {
          tmpResult = tmp(RNBridgeless);
        }
        if (tmpResult == null) {
          const obj = { native: null, verify: false };
          obj[0] = !RNBridgeless.RN$Bridgeless;
          tmpResult = obj;
        }
        ({ native, verify } = tmpResult);
        if (native) {
          let viewConfig = outer1_2(outer1_4[2])(RNBridgeless);
          if (viewConfig == null) {
            viewConfig = callback(tmp12[3]).createViewConfig(callback());
            const obj3 = callback(tmp12[3]);
          }
          let viewConfig1 = viewConfig;
          let tmp6 = tmp12;
        } else {
          tmp6 = outer1_4;
          viewConfig1 = callback(outer1_4[3]).createViewConfig(callback());
          if (viewConfig1 == null) {
            viewConfig1 = outer1_2(tmp6[2])(RNBridgeless);
          }
          const obj2 = callback(outer1_4[3]);
        }
        outer1_2(tmp6[4])(null != viewConfig1, "NativeComponentRegistry.get: both static and native view config are missing for native component \"%s\".", RNBridgeless);
        if (verify) {
          let tmp20 = viewConfig1;
          if (!native) {
            tmp20 = outer1_2(tmp6[2])(tmp18);
          }
          if (null == tmp20) {
            return viewConfig1;
          } else {
            let viewConfig2 = viewConfig1;
            if (native) {
              viewConfig2 = callback(tmp6[3]).createViewConfig(callback());
              const obj4 = callback(tmp6[3]);
            }
            const validateResult = outer1_3(tmp6[5]).validate(tmp18, tmp20, viewConfig2);
            if ("invalid" === validateResult.type) {
              const _console = console;
              console.error(tmp24(tmp6[5]).stringifyValidationResult(tmp18, validateResult));
              const tmp24Result = tmp24(tmp6[5]);
            }
            const obj5 = outer1_3(tmp6[5]);
            tmp24 = outer1_3;
          }
        }
        return viewConfig1;
      });
      return arg0;
    }
  } else if (null != callback(arg0)) {
    closure_0 = arg0;
    closure_1 = arg1;
    importAll(66).register(arg0, () => {
      let native;
      let verify;
      let tmpResult;
      if (outer1_5 != null) {
        tmpResult = tmp(RNBridgeless);
      }
      if (tmpResult == null) {
        const obj = { native: null, verify: false };
        obj[0] = !RNBridgeless.RN$Bridgeless;
        tmpResult = obj;
      }
      ({ native, verify } = tmpResult);
      if (native) {
        let viewConfig = outer1_2(outer1_4[2])(RNBridgeless);
        if (viewConfig == null) {
          viewConfig = callback(tmp12[3]).createViewConfig(callback());
          const obj3 = callback(tmp12[3]);
        }
        let viewConfig1 = viewConfig;
        let tmp6 = tmp12;
      } else {
        tmp6 = outer1_4;
        viewConfig1 = callback(outer1_4[3]).createViewConfig(callback());
        if (viewConfig1 == null) {
          viewConfig1 = outer1_2(tmp6[2])(RNBridgeless);
        }
        const obj2 = callback(outer1_4[3]);
      }
      outer1_2(tmp6[4])(null != viewConfig1, "NativeComponentRegistry.get: both static and native view config are missing for native component \"%s\".", RNBridgeless);
      if (verify) {
        let tmp20 = viewConfig1;
        if (!native) {
          tmp20 = outer1_2(tmp6[2])(tmp18);
        }
        if (null == tmp20) {
          return viewConfig1;
        } else {
          let viewConfig2 = viewConfig1;
          if (native) {
            viewConfig2 = callback(tmp6[3]).createViewConfig(callback());
            const obj4 = callback(tmp6[3]);
          }
          const validateResult = outer1_3(tmp6[5]).validate(tmp18, tmp20, viewConfig2);
          if ("invalid" === validateResult.type) {
            const _console = console;
            console.error(tmp24(tmp6[5]).stringifyValidationResult(tmp18, validateResult));
            const tmp24Result = tmp24(tmp6[5]);
          }
          const obj5 = outer1_3(tmp6[5]);
          tmp24 = outer1_3;
        }
      }
      return viewConfig1;
    });
    class FallbackNativeComponent {
      constructor(arg0) {
        return null;
      }
    }
    let obj = importAll(66);
  }
  class FallbackNativeComponent {
    constructor(arg0) {
      return null;
    }
  }
  FallbackNativeComponent.displayName = "Fallback(" + arg0 + ")";
  return FallbackNativeComponent;
};
export const unstable_hasStaticViewConfig = function unstable_hasStaticViewConfig(arg0) {
  let obj;
  if (closure_5 != null) {
    obj = tmp(arg0);
  }
  if (obj == null) {
    obj = { native: true };
  }
  return !obj.native;
};