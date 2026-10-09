// === Module 13022: useMediaLoading ===

// Module 13022 (useMediaLoading)
import c from "c" /* 576 */;
import hooks_useStableCallbackDefault from "hooks/useStableCallback" /* 6645 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/useMediaLoading.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useMediaLoading(onLoad) {
  const cResult = c.c(19);
  onLoad = onLoad.onLoad;
  const onError = onLoad.onError;
  const onLoadingVisible = onLoad.onLoadingVisible;
  [tmp4, _slicedToArray] = noop.useState(false);
  const tmp3 = _slicedToArray(noop.useState(false), 2);
  [tmp6, noop] = noop.useState(false);
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  [tmp8, closure_5] = noop.useState(0);
  closure_6 = noop.useRef("idle");
  noop.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
        ref.current = null;
      }
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor() {
        return closure_8;
      }
    }
    const items = [first];
    cResult[1] = V;
    cResult[2] = items;
    let tmp11 = items;
  } else {
    class V {
      constructor() {
        return closure_8;
      }
    }
    tmp11 = cResult[2];
  }
  const effect = noop.useEffect(V, tmp11);
  if (cResult[3] !== onLoadingVisible) {
    class P {
      constructor() {
        tmp = undefined;
        if (onLoadingVisible != null) {
          tmp = onLoadingVisible();
        }
        return tmp;
      }
    }
    cResult[3] = onLoadingVisible;
    cResult[4] = P;
  } else {
    class P {
      constructor() {
        tmp = undefined;
        if (onLoadingVisible != null) {
          tmp = onLoadingVisible();
        }
        return tmp;
      }
    }
  }
  const tmp14 = hooks_useStableCallbackDefault(P);
  closure_9 = tmp14;
  if (cResult[5] !== tmp14) {
    class P {
      constructor() {
        tmp = undefined;
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
        tmp = undefined;
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
        tmp = closure_6;
        tmp2 = "loaded" !== closure_6.current;
        if (tmp2) {
          str = "error";
          tmp2 = "error" !== tmp.current;
        }
        if (tmp2) {
          tmp3 = closure_8;
          tmp4 = closure_8();
          tmp.current = "loaded";
          tmp5 = closure_4;
          flag = false;
          tmp6 = closure_4(false);
          tmp7 = null;
          if (onLoad != null) {
            tmp8 = onLoad();
          }
        }
        return;
      }
    }
    cResult[7] = onLoad;
    cResult[8] = I;
  } else {
    class I {
      constructor() {
        tmp = closure_6;
        tmp2 = "loaded" !== closure_6.current;
        if (tmp2) {
          str = "error";
          tmp2 = "error" !== tmp.current;
        }
        if (tmp2) {
          tmp3 = closure_8;
          tmp4 = closure_8();
          tmp.current = "loaded";
          tmp5 = closure_4;
          flag = false;
          tmp6 = closure_4(false);
          tmp7 = null;
          if (onLoad != null) {
            tmp8 = onLoad();
          }
        }
        return;
      }
    }
  }
  if (cResult[9] !== onError) {
    class I {
      constructor() {
        tmp = closure_6;
        tmp2 = "loaded" !== closure_6.current;
        if (tmp2) {
          str = "error";
          tmp2 = "error" !== tmp.current;
        }
        if (tmp2) {
          tmp3 = closure_8;
          tmp4 = closure_8();
          tmp.current = "loaded";
          tmp5 = closure_4;
          flag = false;
          tmp6 = closure_4(false);
          tmp7 = null;
          if (onLoad != null) {
            tmp8 = onLoad();
          }
        }
        return;
      }
    }
    cResult[9] = onError;
    cResult[10] = tmp19;
  } else {
    class I {
      constructor() {
        tmp = closure_6;
        tmp2 = "loaded" !== closure_6.current;
        if (tmp2) {
          str = "error";
          tmp2 = "error" !== tmp.current;
        }
        if (tmp2) {
          tmp3 = closure_8;
          tmp4 = closure_8();
          tmp.current = "loaded";
          tmp5 = closure_4;
          flag = false;
          tmp6 = closure_4(false);
          tmp7 = null;
          if (onLoad != null) {
            tmp8 = onLoad();
          }
        }
        return;
      }
    }
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor(arg0, arg1) {
        tmp = "loaded" !== closure_6.current;
        if (tmp) {
          str = "error";
          tmp = "error" !== closure_6.current;
        }
        if (tmp) {
          tmp2 = arg1;
          num = 0;
          num2 = 0;
          tmp3 = closure_5;
          if (arg1 > 0) {
            tmp4 = onLoad;
            tmp5 = globalThis;
            _Math = Math;
            _Math2 = Math;
            num3 = 100;
            num2 = Math.max(0, Math.min(100, 100 * onLoad / arg1));
          }
          tmp3Result = tmp3(num2);
        }
        return;
      }
    }
    cResult[11] = A;
  } else {
    class A {
      constructor(arg0, arg1) {
        tmp = "loaded" !== closure_6.current;
        if (tmp) {
          str = "error";
          tmp = "error" !== closure_6.current;
        }
        if (tmp) {
          tmp2 = arg1;
          num = 0;
          num2 = 0;
          tmp3 = closure_5;
          if (arg1 > 0) {
            tmp4 = onLoad;
            tmp5 = globalThis;
            _Math = Math;
            _Math2 = Math;
            num3 = 100;
            num2 = Math.max(0, Math.min(100, 100 * onLoad / arg1));
          }
          tmp3Result = tmp3(num2);
        }
        return;
      }
    }
  }
  if (cResult[12] === tmp19) {
    class A {
      constructor(arg0, arg1) {
        tmp = "loaded" !== closure_6.current;
        if (tmp) {
          str = "error";
          tmp = "error" !== closure_6.current;
        }
        if (tmp) {
          tmp2 = arg1;
          num = 0;
          num2 = 0;
          tmp3 = closure_5;
          if (arg1 > 0) {
            tmp4 = onLoad;
            tmp5 = globalThis;
            _Math = Math;
            _Math2 = Math;
            num3 = 100;
            num2 = Math.max(0, Math.min(100, 100 * onLoad / arg1));
          }
          tmp3Result = tmp3(num2);
        }
        return;
      }
    }
  }
  cResult[12] = tmp19;
  cResult[13] = I;
  cResult[14] = tmp16;
  cResult[15] = tmp4;
  cResult[16] = tmp6;
  cResult[17] = tmp8;
  cResult[18] = { hasError: tmp4, isLoadingVisible: tmp6, progress: tmp8, handleLoadStart: tmp16, handleLoad: I, handleError: tmp19, handleProgress: A };
  const obj3 = { hasError: tmp4, isLoadingVisible: tmp6, progress: tmp8, handleLoadStart: tmp16, handleLoad: I, handleError: tmp19, handleProgress: A };
  const tmp7 = _slicedToArray(noop.useState(0), 2);
}) : (function useMediaLoading(onLoad) {
  onLoad = onLoad.onLoad;
  const onError = onLoad.onError;
  const onLoadingVisible = onLoad.onLoadingVisible;
  c3 = undefined;
  [tmp2, c3] = noop.useState(false);
  const tmp3 = _slicedToArray(noop.useState(false), 2);
  closure_4 = tmp3[1];
  const tmp4 = _slicedToArray(noop.useState(0), 2);
  closure_5 = tmp4[1];
  closure_6 = noop.useRef("idle");
  noop.useRef(null);
  const callback = noop.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, []);
  const items = [callback];
  const effect = noop.useEffect(() => callback, items);
  const tmp7 = hooks_useStableCallbackDefault(() => {
    let tmp;
    if (onLoadingVisible != null) {
      tmp = onLoadingVisible();
    }
    return tmp;
  });
  closure_9 = tmp7;
  const obj = {
    hasError: tmp2,
    isLoadingVisible: tmp3[0],
    progress: tmp4[0],
    handleLoadStart: null,
    handleLoad: null,
    handleError: null,
    handleProgress: noop.useCallback((arg0, arg1) => {
      let tmp = "loaded" !== closure_6.current;
      if (tmp) {
        tmp = "error" !== closure_6.current;
      }
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
  const items1 = [tmp7];
  obj.handleLoadStart = noop.useCallback(() => {
    if ("idle" === closure_6.current) {
      tmp.current = "loading";
      const _setTimeout = setTimeout;
      closure_7.current = setTimeout(() => {
        ref.current = null;
        closure_1_4(true);
        closure_1_9();
      }, 1000);
    }
  }, items1);
  const items2 = [callback, onLoad];
  obj.handleLoad = noop.useCallback(() => {
    let tmp2 = "loaded" !== closure_6.current;
    if (tmp2) {
      tmp2 = "error" !== closure_6.current;
    }
    if (tmp2) {
      callback();
      closure_6.current = "loaded";
      closure_4(false);
      if (onLoad != null) {
        onLoad();
      }
    }
  }, items2);
  const items3 = [callback, onError];
  obj.handleError = noop.useCallback(() => {
    if ("error" !== closure_6.current) {
      callback();
      tmp.current = "error";
      _undefined(true);
      closure_4(false);
      if (onError != null) {
        onError();
      }
    }
  }, items3);
  return obj;
});