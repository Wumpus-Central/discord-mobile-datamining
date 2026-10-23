// === Module 18357: ExternalPipView ===

// Module 18357 (ExternalPipView)
import c from "c" /* 576 */;
import ExternalPipDefault from "ExternalPip" /* 5810 */;
import ExternalPipAutoEnterExperiment from "ExternalPipAutoEnterExperiment" /* 18360 */;
import ExternalPipViewVideoDefault from "ExternalPipViewVideo" /* 18361 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AppFreezeStore from "AppFreezeStore" /* 8761 */;

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useExternalPipActive() {
  const cResult = c.c(5);
  [tmp3, require] = noop.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c(arg0) {
      _require(arg0);
      if (!arg0) {
        const state = AppFreezeStore.getState();
        const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
      }
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        return () => {
          state = state.getState();
          const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
        };
      }
    }
    const items = [];
    cResult[1] = E;
    cResult[2] = items;
    let tmp6 = items;
  } else {
    class E {
      constructor() {
        return () => {
          state = state.getState();
          const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
        };
      }
    }
    tmp6 = cResult[2];
  }
  const effect = noop.useEffect(E, tmp6);
  if (cResult[3] !== tmp3) {
    class E {
      constructor() {
        return () => {
          state = state.getState();
          const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
        };
      }
    }
    tmp9[0] = tmp3;
    tmp9[1] = first;
    cResult[3] = tmp3;
    cResult[4] = tmp9;
  } else {
    class E {
      constructor() {
        return () => {
          state = state.getState();
          const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
        };
      }
    }
  }
  return tmp9;
}) : (function useExternalPipActive() {
  [tmp2, require] = noop.useState(false);
  const setExternalPipActive = noop.useCallback((arg0) => {
    _require(arg0);
    if (!arg0) {
      const state = AppFreezeStore.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
    }
  }, []);
  const effect = noop.useEffect(() => () => {
    state = state.getState();
    const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
  }, []);
  return { externalPipActive, setExternalPipActive };
});
fn(558);
ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function FreezeAfterLayoutPipView() {
  const cResult = require("c").c(4);
  _require = noop.useRef(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      if (!ref.current) {
        tmp.current = true;
        state = AppFreezeStore.getState();
        const freezeLock = state.requestFreezeLock({ lockEnabled: true, key: "external-pip" });
      }
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function o() {
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
    let tmp5 = items;
    let tmp4 = fn2;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = noop.useEffect(tmp4, tmp5);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { onLayout: first };
    const tmp10 = jsx(ExternalPipViewVideoDefault, { onLayout: first });
    cResult[3] = tmp10;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[3];
  }
  return tmp7;
}) : (function FreezeAfterLayoutPipView() {
  noop.useRef(false);
  const onLayout = noop.useCallback(() => {
    if (!ref.current) {
      tmp.current = true;
      state = AppFreezeStore.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: true, key: "external-pip" });
    }
  }, []);
  const effect = noop.useEffect(() => () => {
    if (ref.current) {
      state = state.getState();
      const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
    }
  }, []);
  return jsx(ExternalPipViewVideoDefault, { onLayout });
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/external_pip/ExternalPipView.android.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ExternalPipView() {
  const cResult = externalPipEnabled(576).c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { disabled: !setExternalPipActive(5810).isSupported() };
    cResult[0] = obj2;
    let first = obj2;
    let obj3 = setExternalPipActive(5810);
  } else {
    first = cResult[0];
  }
  externalPipEnabled = setExternalPipActive(18358)(first).externalPipEnabled;
  let obj = externalPipEnabled(576);
  ({ externalPipActive, setExternalPipActive } = closure_7());
  if (cResult[1] !== externalPipEnabled) {
    const fn = function o() {
      if (externalPipEnabled) {
        const obj = ExternalPipDefault;
        obj.setAutoEnterEnabled(ExternalPipAutoEnterExperiment.isExternalPipAutoEnterEnabled());
      }
      ExternalPipDefault.setEnabled(externalPipEnabled);
    };
    const items = [externalPipEnabled];
    cResult[1] = externalPipEnabled;
    cResult[2] = fn;
    cResult[3] = items;
    let tmp7 = items;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const effect = noop.useEffect(tmp6, tmp7);
  if (cResult[4] !== setExternalPipActive) {
    class E {
      constructor() {
        obj = setExternalPipActive(closure_1_2[6]);
        closure_0 = obj.addOnPipModeChangedListener((arg0) => {
          setExternalPipActive(arg0);
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
    const items1 = [setExternalPipActive];
    cResult[4] = setExternalPipActive;
    cResult[5] = E;
    cResult[6] = items1;
    let tmp10 = items1;
  } else {
    class E {
      constructor() {
        obj = setExternalPipActive(closure_1_2[6]);
        closure_0 = obj.addOnPipModeChangedListener((arg0) => {
          setExternalPipActive(arg0);
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
    tmp10 = cResult[6];
  }
  const effect1 = noop.useEffect(E, tmp10);
  if (cResult[7] !== setExternalPipActive) {
    class E {
      constructor() {
        obj = setExternalPipActive(closure_1_2[6]);
        closure_0 = obj.addOnPipModeChangedListener((arg0) => {
          setExternalPipActive(arg0);
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
    cResult[8] = tmp14;
    cResult[9] = items2;
    let tmp13 = items2;
  } else {
    class E {
      constructor() {
        obj = setExternalPipActive(closure_1_2[6]);
        closure_0 = obj.addOnPipModeChangedListener((arg0) => {
          setExternalPipActive(arg0);
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
  const effect2 = noop.useEffect(tmp14, tmp13);
  if (cResult[10] !== externalPipActive) {
    class E {
      constructor() {
        obj = setExternalPipActive(closure_1_2[6]);
        closure_0 = obj.addOnPipModeChangedListener((arg0) => {
          setExternalPipActive(arg0);
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
          obj = setExternalPipActive(closure_1_2[6]);
          closure_0 = obj.addOnPipModeChangedListener((arg0) => {
            setExternalPipActive(arg0);
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
      const tmp17 = <closure_8 />;
    }
    cResult[10] = externalPipActive;
    cResult[11] = tmp17;
    const tmp16 = tmp17;
  } else {
    class E {
      constructor() {
        obj = setExternalPipActive(closure_1_2[6]);
        closure_0 = obj.addOnPipModeChangedListener((arg0) => {
          setExternalPipActive(arg0);
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
  return tmp16;
}) : (function ExternalPipView() {
  let obj = { disabled: null };
  const tmp = setExternalPipActive(18358);
  obj.disabled = !setExternalPipActive(5810).isSupported();
  const externalPipEnabled = tmp(obj).externalPipEnabled;
  const tmp2 = closure_7();
  setExternalPipActive = tmp2.setExternalPipActive;
  const items = [externalPipEnabled];
  const effect = noop.useEffect(() => {
    if (externalPipEnabled) {
      const obj = ExternalPipDefault;
      obj.setAutoEnterEnabled(ExternalPipAutoEnterExperiment.isExternalPipAutoEnterEnabled());
    }
    ExternalPipDefault.setEnabled(externalPipEnabled);
  }, items);
  const items1 = [setExternalPipActive];
  const effect1 = noop.useEffect(() => {
    closure_0 = setExternalPipActive(5810).addOnPipModeChangedListener((arg0) => {
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
  const effect2 = noop.useEffect(() => {
    closure_0 = setExternalPipActive(5810).addOnPipModeWillChangeListener(() => {
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
  if (tmp2.externalPipActive) {
    tmp6 = <closure_8 />;
  }
  return tmp6;
});