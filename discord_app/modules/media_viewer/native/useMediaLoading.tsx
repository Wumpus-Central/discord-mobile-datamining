// === Module 14753: useMediaLoading ===

// Module 14753 (useMediaLoading)
import hooks_useStableCallbackDefault from "hooks/useStableCallback" /* 7126 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/useMediaLoading.tsx");

export default function useMediaLoading(onLoad) {
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
};