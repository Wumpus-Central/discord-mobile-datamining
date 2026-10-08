// === Module 13079: conjurePreviewModeRequests ===

// Module 13079 (conjurePreviewModeRequests)
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const set = new Set();
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewModeRequests.tsx");

export const requestConjurePreviewMode = function requestConjurePreviewMode(arg0, widget) {
  for (const item10007 of set) {
    let item10007Result = item10007(arg0, arg1);
    continue;
  }
};
export const useConjurePreviewModeRequests = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePreviewModeRequests(arg0, current) {
  _require = arg0;
  dependencyMap = current;
  const cResult = require("c").c(5);
  noop = noop.useRef(current);
  if (cResult[0] !== current) {
    const fn = function s() {
      closure_2.current = current;
    };
    cResult[0] = current;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  const layoutEffect = obj2.useLayoutEffect(tmp2);
  if (cResult[2] !== arg0) {
    const fn2 = function f() {
      if (null != listener) {
        listener = function listener(arg0, AUTO_DISMISS) {
          if (arg0 === listener) {
            ref.current(AUTO_DISMISS);
          }
        };
        set.add(listener);
        return () => {
          set.delete(listener);
        };
      }
    };
    const items = [arg0];
    cResult[2] = arg0;
    cResult[3] = fn2;
    cResult[4] = items;
    let tmp5 = items;
    let tmp4 = fn2;
  } else {
    tmp4 = cResult[3];
    tmp5 = cResult[4];
  }
  const effect = obj2.useEffect(tmp4, tmp5);
}) : (function useConjurePreviewModeRequests(arg0, current) {
  closure_0 = arg0;
  noop = noop.useRef(current);
  const layoutEffect = noop.useLayoutEffect(() => {
    closure_2.current = current;
  });
  const items = [arg0];
  const effect = noop.useEffect(() => {
    if (null != listener) {
      listener = function listener(arg0, AUTO_DISMISS) {
        if (arg0 === listener) {
          ref.current(AUTO_DISMISS);
        }
      };
      set.add(listener);
      return () => {
        set.delete(listener);
      };
    }
  }, items);
});