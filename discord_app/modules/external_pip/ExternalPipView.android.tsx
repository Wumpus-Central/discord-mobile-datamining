// === Module 17182: ExternalPipView ===

// Module 17182 (ExternalPipView)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import ExternalPipDefault from "ExternalPip" /* 9145 */;
import ExternalPipViewVideoDefault from "ExternalPipViewVideo" /* 17185 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AppFreezeStore from "AppFreezeStore" /* 7975 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let require;
  let tmp3;
  let tmp5;
  let tmp6;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(5);
  [tmp3, require] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c(arg0) {
      _require(arg0);
      if (!arg0) {
        const state = AppFreezeStore.getState();
        const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
      }
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function p() {
      return () => {
        state = state.getState();
        const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
      };
    };
    const items = [];
    cResult[1] = fn2;
    cResult[2] = items;
    tmp6 = items;
    tmp5 = fn2;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = react.useEffect(tmp5, tmp6);
  if (cResult[3] !== tmp3) {
    const obj3 = { externalPipActive: tmp3, setExternalPipActive: first };
    cResult[3] = tmp3;
    cResult[4] = obj3;
    tmp8 = obj3;
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : (() => {
  let require;
  let tmp2;
  [tmp2, require] = _slicedToArray(react.useState(false), 2);
  const tmp = _slicedToArray(react.useState(false), 2);
  const setExternalPipActive = react.useCallback((arg0) => {
    _require(arg0);
    if (!arg0) {
      const state = AppFreezeStore.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
    }
  }, []);
  const effect = react.useEffect(() => () => {
    state = state.getState();
    const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
  }, []);
  return { externalPipActive, setExternalPipActive };
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let externalPipActive;
  let externalPipEnabled;
  let first;
  let obj3;
  let setExternalPipActive;
  let tmp10;
  let tmp13;
  let tmp15;
  let tmp6;
  let tmp7;
  let tmp9;
  let obj = externalPipEnabled(576);
  const cResult = obj.c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { disabled: !obj3.isSupported() };
    cResult[0] = obj2;
    first = obj2;
    obj3 = setExternalPipActive(9145);
  } else {
    first = cResult[0];
  }
  externalPipEnabled = setExternalPipActive(17183)(first).externalPipEnabled;
  ({ externalPipActive, setExternalPipActive } = closure_7());
  closure_7();
  if (cResult[1] !== externalPipEnabled) {
    const fn = function l() {
      const obj = ExternalPipDefault;
      obj.setEnabled(externalPipEnabled);
    };
    const items = [externalPipEnabled];
    cResult[1] = externalPipEnabled;
    cResult[2] = fn;
    cResult[3] = items;
    tmp7 = items;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const effect = react.useEffect(tmp6, tmp7);
  if (cResult[4] !== setExternalPipActive) {
    const fn2 = function p() {
      const obj = setExternalPipActive(dependencyMap[6]);
      let closure_0 = obj.addOnPipModeChangedListener((arg0) => {
        setExternalPipActive(arg0);
      });
      return () => {
        let removeResult;
        if (closure_0 != null) {
          removeResult = closure_0.remove();
        }
        return removeResult;
      };
    };
    const items1 = [setExternalPipActive];
    cResult[4] = setExternalPipActive;
    cResult[5] = fn2;
    cResult[6] = items1;
    tmp10 = items1;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[5];
    tmp10 = cResult[6];
  }
  const effect1 = react.useEffect(tmp9, tmp10);
  if (cResult[7] !== setExternalPipActive) {
    class E {
      constructor() {
        const obj = setExternalPipActive(dependencyMap[6]);
        let closure_0 = obj.addOnPipModeWillChangeListener(() => {
          setExternalPipActive(true);
        });
        return () => {
          let removeResult;
          if (closure_0 != null) {
            removeResult = closure_0.remove();
          }
          return removeResult;
        };
      }
    }
    const items2 = [setExternalPipActive];
    cResult[7] = setExternalPipActive;
    cResult[8] = E;
    cResult[9] = items2;
    tmp13 = items2;
  } else {
    class E {
      constructor() {
        const obj = setExternalPipActive(dependencyMap[6]);
        let closure_0 = obj.addOnPipModeWillChangeListener(() => {
          setExternalPipActive(true);
        });
        return () => {
          let removeResult;
          if (closure_0 != null) {
            removeResult = closure_0.remove();
          }
          return removeResult;
        };
      }
    }
    tmp13 = cResult[9];
  }
  const effect2 = react.useEffect(E, tmp13);
  if (cResult[10] !== externalPipActive) {
    let tmp16;
    class E {
      constructor() {
        const obj = setExternalPipActive(dependencyMap[6]);
        let closure_0 = obj.addOnPipModeWillChangeListener(() => {
          setExternalPipActive(true);
        });
        return () => {
          let removeResult;
          if (closure_0 != null) {
            removeResult = closure_0.remove();
          }
          return removeResult;
        };
      }
    }
    if (externalPipActive) {
      class E {
        constructor() {
          const obj = setExternalPipActive(dependencyMap[6]);
          let closure_0 = obj.addOnPipModeWillChangeListener(() => {
            setExternalPipActive(true);
          });
          return () => {
            let removeResult;
            if (closure_0 != null) {
              removeResult = closure_0.remove();
            }
            return removeResult;
          };
        }
      }
      tmp16 = <closure_8 />;
    }
    cResult[10] = externalPipActive;
    cResult[11] = tmp16;
    tmp15 = tmp16;
  } else {
    class E {
      constructor() {
        const obj = setExternalPipActive(dependencyMap[6]);
        let closure_0 = obj.addOnPipModeWillChangeListener(() => {
          setExternalPipActive(true);
        });
        return () => {
          let removeResult;
          if (closure_0 != null) {
            removeResult = closure_0.remove();
          }
          return removeResult;
        };
      }
    }
  }
  return tmp15;
}) : (() => {
  let obj2;
  let setExternalPipActive;
  let obj = { disabled: !obj2.isSupported() };
  const tmp = setExternalPipActive(17183);
  obj2 = setExternalPipActive(9145);
  const externalPipEnabled = tmp(obj).externalPipEnabled;
  const tmp2 = closure_7();
  setExternalPipActive = tmp2.setExternalPipActive;
  const items = [externalPipEnabled];
  const externalPipActive = tmp2.externalPipActive;
  const effect = react.useEffect(() => {
    const obj = ExternalPipDefault;
    obj.setEnabled(externalPipEnabled);
  }, items);
  const items1 = [setExternalPipActive];
  const effect1 = react.useEffect(() => {
    const obj = setExternalPipActive(dependencyMap[6]);
    let closure_0 = obj.addOnPipModeChangedListener((arg0) => {
      setExternalPipActive(arg0);
    });
    return () => {
      let removeResult;
      if (closure_0 != null) {
        removeResult = closure_0.remove();
      }
      return removeResult;
    };
  }, items1);
  const items2 = [setExternalPipActive];
  const effect2 = react.useEffect(() => {
    const obj = setExternalPipActive(dependencyMap[6]);
    let closure_0 = obj.addOnPipModeWillChangeListener(() => {
      setExternalPipActive(true);
    });
    return () => {
      let removeResult;
      if (closure_0 != null) {
        removeResult = closure_0.remove();
      }
      return removeResult;
    };
  }, items2);
  let tmp6 = null;
  if (externalPipActive) {
    tmp6 = <closure_8 />;
  }
  return tmp6;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let ref;
  let tmp4;
  let tmp5;
  let tmp7;
  const obj = require("react");
  const cResult = obj.c(4);
  _require = react.useRef(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      if (!ref.current) {
        tmp.current = true;
        state = AppFreezeStore.getState();
        const freezeLock = state.requestFreezeLock({ lockEnabled: true, key: "external-pip" });
      }
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function l() {
      return () => {
        if (ref.current) {
          state = state.getState();
          const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
        }
      };
    };
    const items = [];
    cResult[1] = fn2;
    cResult[2] = items;
    tmp5 = items;
    tmp4 = fn2;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = react.useEffect(tmp4, tmp5);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp10 = jsx(ExternalPipViewVideoDefault, { onLayout: first });
    cResult[3] = tmp10;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[3];
  }
  return tmp7;
}) : (() => {
  const ref = react.useRef(false);
  const onLayout = react.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      state = AppFreezeStore.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: true, key: "external-pip" });
    }
  }, []);
  const effect = react.useEffect(() => () => {
    if (ref.current) {
      state = state.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
    }
  }, []);
  return jsx(ExternalPipViewVideoDefault, { onLayout });
});
const result = size.fileFinishedImporting("modules/external_pip/ExternalPipView.android.tsx");

export default tmp2;