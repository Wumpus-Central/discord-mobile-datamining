// === Module 28: set ===

// Module 28 (set)
const module = arg2;
const dependencyMap = arg6;
const set = new Set();
const set1 = new Set();
let tmp4 = true === RN$Bridgeless.RN$Bridgeless;
if (!tmp4) {
  tmp4 = null != RN$Bridgeless.__turboModuleProxy;
}
let closure_5 = tmp4;
arg5.createJavaScriptFlagGetter = function createJavaScriptFlagGetter(animatedShouldDebounceQueueFlush, arg1) {
  const f67447 = () => {
    closure_1_3.add(f67447);
    let tmp5Result;
    if (closure_1_2 != null) {
      if (closure_1_2[tmp] != null) {
        tmp5Result = tmp5();
      }
    }
    return tmp5Result;
  };
  closure_1 = arg1;
  return () => {
    if (null == closure_2) {
      let tmp2 = f67448();
      if (tmp2 == null) {
        tmp2 = closure_1;
      }
      closure_2 = tmp2;
    }
    return closure_2;
  };
};
arg5.createNativeFlagGetter = function createNativeFlagGetter(cdpInteractionMetricsEnabled, arg1) {
  const f67448 = () => {
    let hasItem = f67448(table[0]);
    if (!hasItem) {
      hasItem = closure_1_4.has(tmp);
    }
    if (!hasItem) {
      hasItem = !closure_1_5;
    }
    if (!hasItem) {
      closure_1_4.add(tmp);
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error("Could not access feature flag '" + tmp + "' because native module method was not available");
    }
    const tmp2Result = f67448(table[0]);
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
      let tmp2 = f67448();
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