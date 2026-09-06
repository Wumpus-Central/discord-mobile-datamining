// === Module 28: dangerouslyResetForTesting ===

// Module 28 (dangerouslyResetForTesting)
import NativeReactNativeFeatureFlagsCxxDefault from "NativeReactNativeFeatureFlagsCxx" /* 29 */;

importDefault = arg2;
const dependencyMap = arg6;
const set = new Set();
const set1 = new Set();
let tmp4 = true === RN$Bridgeless.RN$Bridgeless;
if (!tmp4) {
  tmp4 = null != RN$Bridgeless.__turboModuleProxy;
}
let closure_5 = tmp4;

export function createJavaScriptFlagGetter(animatedShouldDebounceQueueFlush, arg1) {
  const f68994 = () => {
    set.add(f68994);
    let tmp5Result;
    if (global != null) {
      if (global[tmp] != null) {
        tmp5Result = tmp5();
      }
    }
    return tmp5Result;
  };
  closure_1 = arg1;
  return () => {
    if (null == closure_2) {
      let tmp2 = f68995();
      if (tmp2 == null) {
        tmp2 = closure_1;
      }
      closure_2 = tmp2;
    }
    return closure_2;
  };
}
export function createNativeFlagGetter(cdpInteractionMetricsEnabled, arg1) {
  const f68995 = () => {
    let hasItem = NativeReactNativeFeatureFlagsCxxDefault;
    if (!hasItem) {
      hasItem = set1.has(tmp);
    }
    if (!hasItem) {
      hasItem = !closure_5;
    }
    if (!hasItem) {
      set1.add(tmp);
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error("Could not access feature flag '" + tmp + "' because native module method was not available");
    }
    const tmp2Result = NativeReactNativeFeatureFlagsCxxDefault;
    let tmp13Result;
    if (tmp2Result != null) {
      if (tmp2Result[tmp] != null) {
        tmp13Result = tmp13();
      }
    }
    return tmp13Result;
  };
  closure_1 = arg1;
  return () => {
    if (null == closure_2) {
      let tmp2 = f68995();
      if (tmp2 == null) {
        tmp2 = closure_1;
      }
      closure_2 = tmp2;
    }
    return closure_2;
  };
}
export function getOverrides() {
  return global;
}
export const setOverrides = function setOverrides(arg0) {
  if (null != global) {
    const _Error2 = Error;
    const error = new Error("Feature flags cannot be overridden more than once");
    throw error;
  } else if (set.size > 0) {
    const _Array = Array;
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error1 = new Error("Feature flags were accessed before being overridden: " + Array.from(tmp).join(", "));
    throw error1;
  } else {
    global = arg0;
  }
};
export function dangerouslyResetForTesting() {

}