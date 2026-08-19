// === Module 28: set ===

// Module 28 (set)
const importDefault = arg2;
const dependencyMap = arg6;
const set = new Set();
const set1 = new Set();
let tmp4 = true === RN$Bridgeless.RN$Bridgeless;
if (!tmp4) {
  tmp4 = null != RN$Bridgeless.__turboModuleProxy;
}
let closure_5 = tmp4;
arg5.createJavaScriptFlagGetter = function createJavaScriptFlagGetter(animatedShouldDebounceQueueFlush, arg1) {
  const f66219 = () => {
    set.add(f66219);
    let tmp5Result;
    if (closure_1_2 != null) {
      if (closure_1_2[f66219] != null) {
        tmp5Result = tmp5();
      }
    }
    return tmp5Result;
  };
  closure_1 = arg1;
  return () => {
    if (null == closure_2) {
      let tmp2 = f66220();
      if (tmp2 == null) {
        tmp2 = closure_1;
      }
      closure_2 = tmp2;
    }
    return closure_2;
  };
};
arg5.createNativeFlagGetter = function createNativeFlagGetter(cdpInteractionMetricsEnabled, arg1) {
  const f66220 = () => {
    let hasItem = f66220(table[0]);
    if (!hasItem) {
      hasItem = set1.has(f66220);
    }
    if (!hasItem) {
      hasItem = !closure_1_5;
    }
    if (!hasItem) {
      set1.add(f66220);
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error("Could not access feature flag '" + f66220 + "' because native module method was not available");
    }
    const tmp2Result = f66220(table[0]);
    let tmp13Result;
    if (tmp2Result != null) {
      if (tmp2Result[f66220] != null) {
        tmp13Result = tmp13();
      }
    }
    return tmp13Result;
  };
  closure_1 = arg1;
  return () => {
    if (null == closure_2) {
      let tmp2 = f66220();
      if (tmp2 == null) {
        tmp2 = closure_1;
      }
      closure_2 = tmp2;
    }
    return closure_2;
  };
};
arg5.getOverrides = function getOverrides() {
  return closure_2;
};
arg5.setOverrides = function setOverrides(arg0) {
  if (null != closure_2) {
    const _Error2 = Error;
    error = new Error("Feature flags cannot be overridden more than once");
    throw error;
  } else if (set.size > 0) {
    const _Array = Array;
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error1 = new Error("Feature flags were accessed before being overridden: " + Array.from(tmp).join(", "));
    throw error1;
  } else {
    closure_2 = arg0;
  }
};
arg5.dangerouslyResetForTesting = function dangerouslyResetForTesting() {

};