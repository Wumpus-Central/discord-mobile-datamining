// _runtime/00028_dangerouslyResetForTesting.js
let React2, closure_2;

const set = new Set();
new Set();
let tmp4 = true === global.RN$Bridgeless;
if (!tmp4) {
  const tmp5 = null;
  tmp4 = null != global.__turboModuleProxy;
}
let closure_5 = tmp4;

export function createJavaScriptFlagGetter(animatedShouldDebounceQueueFlush, arg1) {
  let closure_0 = animatedShouldDebounceQueueFlush;
  const f79905 = () => {
    set.add(f79905);
    let tmp5Result;
    if (closure_2_2 != null) {
      if (closure_2_2[f79905] != null) {
        tmp5Result = tmp5();
      }
    }
    return tmp5Result;
  };
  let closure_1 = arg1;
  return () => {
    if (null == closure_2) {
      let tmp2 = f79906();
      if (tmp2 == null) {
        tmp2 = closure_1;
      }
      closure_2 = tmp2;
    }
    return closure_2;
  };
}
export function createNativeFlagGetter(cdpInteractionMetricsEnabled, arg1) {
  let closure_0 = cdpInteractionMetricsEnabled;
  const f79906 = () => {
    const hasItem = cdpInteractionMetricsEnabled(dependencyMap[0]) || set.has(f79906) || !closure_2_5;
    if (!hasItem) {
      set.add(f79906);
      const _console = console;
      const _HermesInternal = HermesInternal;
      console.error("Could not access feature flag '" + f79906 + "' because native module method was not available");
    }
    const tmp2Result = cdpInteractionMetricsEnabled(dependencyMap[0]);
    let tmp13Result;
    if (tmp2Result != null) {
      if (tmp2Result[f79906] != null) {
        tmp13Result = tmp13();
      }
    }
    return tmp13Result;
  };
  let closure_1 = arg1;
  return () => {
    if (null == closure_2) {
      let tmp2 = f79906();
      if (tmp2 == null) {
        tmp2 = closure_1;
      }
      closure_2 = tmp2;
    }
    return closure_2;
  };
}
export function getOverrides() {
  return React2;
}
export const setOverrides = function setOverrides(arg0) {
  if (null != React2) {
    const _Error2 = Error;
    const self3 = this;
    const self4 = this;
    const error = new Error("Feature flags cannot be overridden more than once");
    throw error;
  } else if (set.size > 0) {
    const _Array = Array;
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const arr = Array.from(tmp);
    const error1 = new Error("Feature flags were accessed before being overridden: " + arr.join(", "));
    throw error1;
  } else {
    React2 = arg0;
  }
};
export function dangerouslyResetForTesting() {}
