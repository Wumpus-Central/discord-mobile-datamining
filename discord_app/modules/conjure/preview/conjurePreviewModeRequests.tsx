// === Module 12910: conjurePreviewModeRequests ===

// Module 12910 (conjurePreviewModeRequests)
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let react = react_mod;
const set = new Set();
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, current) => {
  let closure_0;
  let closure_2;
  let tmp2;
  let tmp4;
  let tmp5;
  _require = arg0;
  dependencyMap = current;
  const obj = require("react");
  const cResult = obj.c(5);
  react = react.useRef(current);
  if (cResult[0] !== current) {
    const fn = function f() {
      closure_2.current = current;
    };
    cResult[0] = current;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  const layoutEffect = obj2.useLayoutEffect(tmp2);
  if (cResult[2] !== arg0) {
    const fn2 = function s() {
      let listener;
      let ref;
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
    tmp5 = items;
    tmp4 = fn2;
  } else {
    tmp4 = cResult[3];
    tmp5 = cResult[4];
  }
  const effect = obj2.useEffect(tmp4, tmp5);
}) : ((arg0, current) => {
  let closure_2;
  let closure_0 = arg0;
  react = react.useRef(current);
  const layoutEffect = react.useLayoutEffect(() => {
    closure_2.current = current;
  });
  const items = [arg0];
  const effect = react.useEffect(() => {
    let listener;
    let ref;
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
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewModeRequests.tsx");

export const requestConjurePreviewMode = function requestConjurePreviewMode(arg0, widget) {
  for (const item10007 of set) {
    let item10007Result = item10007(arg0, widget);
    continue;
  }
};
export const useConjurePreviewModeRequests = tmp3;