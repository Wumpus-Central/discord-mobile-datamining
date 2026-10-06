// === Module 12795: useMediaLoading ===

// Module 12795 (useMediaLoading)
import react2 from "react" /* 576 */;
import hooks_useStableCallbackDefault from "hooks/useStableCallback" /* 6460 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let onLoad;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((onLoad) => {
  let closure_129_3;
  let closure_129_4;
  let closure_129_5;
  let first;
  let tmp11;
  let tmp4;
  let tmp6;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(19);
  onLoad = onLoad.onLoad;
  const onError = onLoad.onError;
  const onLoadingVisible = onLoad.onLoadingVisible;
  [tmp4, closure_129_3] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [tmp6, closure_129_4] = _slicedToArray(react.useState(false), 2);
  const tmp5 = _slicedToArray(react.useState(false), 2);
  [tmp8, closure_129_5] = _slicedToArray(react.useState(0), 2);
  const tmp7 = _slicedToArray(react.useState(0), 2);
  let closure_6 = react.useRef("idle");
  let closure_7 = react.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      if (null != ref2.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref2.current);
        ref2.current = null;
      }
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor() {
        return first;
      }
    }
    const items = [first];
    cResult[1] = V;
    cResult[2] = items;
    tmp11 = items;
  } else {
    class V {
      constructor() {
        return first;
      }
    }
    tmp11 = cResult[2];
  }
  const effect = react.useEffect(V, tmp11);
  if (cResult[3] !== onLoadingVisible) {
    class P {
      constructor() {
        let tmp;
        if (onLoadingVisible != null) {
          tmp = onLoadingVisible();
        }
        return tmp;
      }
    }
    let num2 = 3;
    cResult[3] = onLoadingVisible;
    cResult[4] = P;
  } else {
    class P {
      constructor() {
        let tmp;
        if (onLoadingVisible != null) {
          tmp = onLoadingVisible();
        }
        return tmp;
      }
    }
  }
  const tmp14 = hooks_useStableCallbackDefault(P);
  let closure_9 = tmp14;
  if (cResult[5] !== tmp14) {
    class P {
      constructor() {
        let tmp;
        if (onLoadingVisible != null) {
          tmp = onLoadingVisible();
        }
        return tmp;
      }
    }
    cResult[5] = tmp14;
    cResult[6] = tmp16;
  } else {
    class P {
      constructor() {
        let tmp;
        if (onLoadingVisible != null) {
          tmp = onLoadingVisible();
        }
        return tmp;
      }
    }
  }
  if (cResult[7] !== onLoad) {
    class I {
      constructor() {
        const tmp2 = "loaded" !== ref.current && "error" !== ref.current;
        if (tmp2) {
          first();
          ref.current = "loaded";
          closure_1_4(false);
          if (onLoad != null) {
            onLoad();
          }
        }
      }
    }
    cResult[7] = onLoad;
    cResult[8] = I;
  } else {
    class I {
      constructor() {
        const tmp2 = "loaded" !== ref.current && "error" !== ref.current;
        if (tmp2) {
          first();
          ref.current = "loaded";
          closure_1_4(false);
          if (onLoad != null) {
            onLoad();
          }
        }
      }
    }
  }
  if (cResult[9] !== onError) {
    class I {
      constructor() {
        const tmp2 = "loaded" !== ref.current && "error" !== ref.current;
        if (tmp2) {
          first();
          ref.current = "loaded";
          closure_1_4(false);
          if (onLoad != null) {
            onLoad();
          }
        }
      }
    }
    cResult[9] = onError;
    cResult[10] = tmp19;
  } else {
    class I {
      constructor() {
        const tmp2 = "loaded" !== ref.current && "error" !== ref.current;
        if (tmp2) {
          first();
          ref.current = "loaded";
          closure_1_4(false);
          if (onLoad != null) {
            onLoad();
          }
        }
      }
    }
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor(arg0, arg1) {
        const tmp = "loaded" !== ref.current && "error" !== ref.current;
        if (tmp) {
          let num2 = 0;
          if (arg1 > 0) {
            const _Math = Math;
            const _Math2 = Math;
            num2 = Math.max(0, Math.min(100, 100 * arg0 / arg1));
          }
          closure_1_5(num2);
        }
      }
    }
    cResult[11] = A;
  } else {
    class A {
      constructor(arg0, arg1) {
        const tmp = "loaded" !== ref.current && "error" !== ref.current;
        if (tmp) {
          let num2 = 0;
          if (arg1 > 0) {
            const _Math = Math;
            const _Math2 = Math;
            num2 = Math.max(0, Math.min(100, 100 * arg0 / arg1));
          }
          closure_1_5(num2);
        }
      }
    }
  }
  if (cResult[12] === tmp19) {
    class A {
      constructor(arg0, arg1) {
        const tmp = "loaded" !== ref.current && "error" !== ref.current;
        if (tmp) {
          let num2 = 0;
          if (arg1 > 0) {
            const _Math = Math;
            const _Math2 = Math;
            num2 = Math.max(0, Math.min(100, 100 * arg0 / arg1));
          }
          closure_1_5(num2);
        }
      }
    }
  }
  const obj3 = { hasError: tmp4, isLoadingVisible: tmp6, progress: tmp8, handleLoadStart: tmp16, handleLoad: I, handleError: tmp19, handleProgress: A };
  cResult[12] = tmp19;
  cResult[13] = I;
  cResult[14] = tmp16;
  cResult[15] = tmp4;
  cResult[16] = tmp6;
  cResult[17] = tmp8;
  cResult[18] = obj3;
}) : ((onLoad) => {
  let c3;
  let closure_4;
  let closure_5;
  let first;
  let first1;
  let items1;
  let items2;
  let items3;
  let tmp2;
  onLoad = onLoad.onLoad;
  const onError = onLoad.onError;
  const onLoadingVisible = onLoad.onLoadingVisible;
  c3 = undefined;
  closure_4 = undefined;
  closure_5 = undefined;
  let tmp = _slicedToArray(react.useState(false), 2);
  [tmp2, c3] = tmp;
  [first, closure_4] = react.useState(false);
  [first1, closure_5] = react.useState(0);
  let closure_6 = react.useRef("idle");
  let closure_7 = react.useRef(null);
  const callback = react.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, []);
  const items = [callback];
  const effect = react.useEffect(() => callback, items);
  const tmp9 = hooks_useStableCallbackDefault(() => {
    let tmp;
    if (onLoadingVisible != null) {
      tmp = onLoadingVisible();
    }
    return tmp;
  });
  let closure_9 = tmp9;
  const obj = {
    hasError: tmp2,
    isLoadingVisible: first,
    progress: first1,
    handleLoadStart: react.useCallback(() => {
      if ("idle" === closure_6.current) {
        tmp.current = "loading";
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          ref.current = null;
          closure_1_4(true);
          closure_1_9();
        }, 1000);
      }
    }, items1),
    handleLoad: react.useCallback(() => {
      const tmp2 = "loaded" !== closure_6.current && "error" !== closure_6.current;
      if (tmp2) {
        callback();
        closure_6.current = "loaded";
        closure_4(false);
        if (onLoad != null) {
          onLoad();
        }
      }
    }, items2),
    handleError: react.useCallback(() => {
      if ("error" !== closure_6.current) {
        callback();
        tmp.current = "error";
        _undefined(true);
        closure_4(false);
        if (onError != null) {
          onError();
        }
      }
    }, items3),
    handleProgress: react.useCallback((arg0, arg1) => {
      const tmp = "loaded" !== closure_6.current && "error" !== closure_6.current;
      if (tmp) {
        let num2 = 0;
        if (arg1 > 0) {
          const _Math = Math;
          const _Math2 = Math;
          num2 = Math.max(0, Math.min(100, 100 * arg0 / arg1));
        }
        closure_5(num2);
      }
    }, [])
  };
  items1 = [tmp9];
  items2 = [callback, onLoad];
  items3 = [callback, onError];
  return obj;
});
const result = size.fileFinishedImporting("modules/media_viewer/native/useMediaLoading.tsx");

export default tmp2;