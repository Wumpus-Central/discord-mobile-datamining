// === Module 11793: useAwaitAnimationComplete ===

// Module 11793 (useAwaitAnimationComplete)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const redux = react.createContext(null);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let handleQueuedCallback;
  let tmp2;
  const obj = react2;
  const cResult = obj.c(5);
  ({ children, handleQueuedCallback } = arg0);
  if (cResult[0] !== handleQueuedCallback) {
    const obj2 = { handleQueuedCallback };
    cResult[0] = handleQueuedCallback;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  if (cResult[2] === children) {
    let tmp3;
    if (cResult[3] === tmp2) {
      tmp3 = cResult[4];
    }
    return tmp3;
  }
  const tmp4 = <redux.Provider value={tmp2}>{children}</redux.Provider>;
  cResult[2] = children;
  cResult[3] = tmp2;
  cResult[4] = tmp4;
  tmp3 = tmp4;
}) : ((children) => {
  const handleQueuedCallback = children.handleQueuedCallback;
  const items = [handleQueuedCallback];
  return <redux.Provider value={react.useMemo(() => ({ handleQueuedCallback }), items)}>{children.children}</redux.Provider>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let handleQueuedCallback;
  const obj = react2;
  const cResult = obj.c(1);
  const context = react.useContext(redux);
  if (null == context) {
    let first;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function l(fn) {
        return fn();
      };
      cResult[0] = fn;
      first = fn;
    } else {
      first = cResult[0];
    }
    handleQueuedCallback = first;
  } else {
    handleQueuedCallback = context.handleQueuedCallback;
  }
  return handleQueuedCallback;
}) : (() => {
  let fn;
  const context = react.useContext(redux);
  if (null == context) {
    fn = (fn) => fn();
  } else {
    fn = context.handleQueuedCallback;
  }
  return fn;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useAwaitAnimationComplete.tsx");

export const AwaitAnimationContext = tmp2;
export const useAwaitAnimationCompletion = tmp3;