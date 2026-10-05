// discord_app/modules/external_pip/ExternalPipView.android.tsx
import c from "../../../_runtime/00576_c.js";
import ExternalPipDefault from "ExternalPip.android.tsx";
import ExternalPipViewVideoDefault from "ExternalPipViewVideo.android.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import AppFreezeStore from "../panels/morphable/AppFreezeStore.tsx";

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(5);
      [tmp3, require] = noop.useState(false);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function c(arg0) {
          _require(arg0);
          if (!arg0) {
            state = AppFreezeStore.getState();
            const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
          }
        };
        cResult[0] = fn;
        let first = fn;
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
        let tmp6 = items;
        let tmp5 = fn2;
      } else {
        tmp5 = cResult[1];
        tmp6 = cResult[2];
      }
      const effect = noop.useEffect(tmp5, tmp6);
      if (cResult[3] !== tmp3) {
        const obj3 = { externalPipActive: tmp3, setExternalPipActive: first };
        cResult[3] = tmp3;
        cResult[4] = obj3;
        let tmp8 = obj3;
      } else {
        tmp8 = cResult[4];
      }
      return tmp8;
    }
  : () => {
      [tmp2, require] = noop.useState(false);
      const setExternalPipActive = noop.useCallback((arg0) => {
        _require(arg0);
        if (!arg0) {
          state = AppFreezeStore.getState();
          const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
        }
      }, []);
      const effect = noop.useEffect(
        () => () => {
          state = state.getState();
          const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
        },
        [],
      );
      return { externalPipActive, setExternalPipActive };
    };
fn(558);
ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
    }
  : () => {
      noop.useRef(false);
      const onLayout = noop.useCallback(() => {
        if (!ref.current) {
          tmp.current = true;
          state = AppFreezeStore.getState();
          const freezeLock = state.requestFreezeLock({ lockEnabled: true, key: "external-pip" });
        }
      }, []);
      const effect = noop.useEffect(
        () => () => {
          if (ref.current) {
            state = state.getState();
            const freezeLock = state.requestFreezeLock({ lockEnabled: false, key: "external-pip" });
          }
        },
        [],
      );
      return jsx(ExternalPipViewVideoDefault, { onLayout });
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/external_pip/ExternalPipView.android.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = externalPipEnabled(576).c(12);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { disabled: !setExternalPipActive(9110).isSupported() };
        cResult[0] = obj2;
        let first = obj2;
        const obj3 = setExternalPipActive(9110);
      } else {
        first = cResult[0];
      }
      externalPipEnabled = setExternalPipActive(17154)(first).externalPipEnabled;
      const obj = externalPipEnabled(576);
      ({ externalPipActive, setExternalPipActive } = closure_7());
      if (cResult[1] !== externalPipEnabled) {
        const fn = function l() {
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
        const fn2 = function p() {
          closure_0 = setExternalPipActive(9110).addOnPipModeChangedListener((arg0) => {
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
        let tmp10 = items1;
        let tmp9 = fn2;
      } else {
        tmp9 = cResult[5];
        tmp10 = cResult[6];
      }
      const effect1 = noop.useEffect(tmp9, tmp10);
      if (cResult[7] !== setExternalPipActive) {
        class E {
          constructor() {
            obj = setExternalPipActive(closure_1_2[6]);
            closure_0 = obj.addOnPipModeWillChangeListener(() => {
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
        let tmp13 = items2;
      } else {
        class E {
          constructor() {
            obj = setExternalPipActive(closure_1_2[6]);
            closure_0 = obj.addOnPipModeWillChangeListener(() => {
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
      const effect2 = noop.useEffect(E, tmp13);
      if (cResult[10] !== externalPipActive) {
        class E {
          constructor() {
            obj = setExternalPipActive(closure_1_2[6]);
            closure_0 = obj.addOnPipModeWillChangeListener(() => {
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
              obj = setExternalPipActive(closure_1_2[6]);
              closure_0 = obj.addOnPipModeWillChangeListener(() => {
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
          const tmp16 = <closure_8 />;
        }
        cResult[10] = externalPipActive;
        cResult[11] = tmp16;
        const tmp15 = tmp16;
      } else {
        class E {
          constructor() {
            obj = setExternalPipActive(closure_1_2[6]);
            closure_0 = obj.addOnPipModeWillChangeListener(() => {
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
    }
  : () => {
      const obj = { disabled: null };
      const tmp = setExternalPipActive(17154);
      obj.disabled = !setExternalPipActive(9110).isSupported();
      const externalPipEnabled = tmp(obj).externalPipEnabled;
      const tmp2 = closure_7();
      setExternalPipActive = tmp2.setExternalPipActive;
      const items = [externalPipEnabled];
      const effect = noop.useEffect(() => {
        ExternalPipDefault.setEnabled(externalPipEnabled);
      }, items);
      const items1 = [setExternalPipActive];
      const effect1 = noop.useEffect(() => {
        closure_0 = setExternalPipActive(9110).addOnPipModeChangedListener((arg0) => {
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
        closure_0 = setExternalPipActive(9110).addOnPipModeWillChangeListener(() => {
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
    };
