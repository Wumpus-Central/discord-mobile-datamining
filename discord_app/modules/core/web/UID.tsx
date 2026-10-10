// === Module 9365: UID ===

// Module 9365 (UID)
import c from "c" /* 576 */;
import uniqueIdDefault from "uniqueId" /* 5935 */;
import useInitialValueDefault from "useInitialValue" /* 6169 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useUID() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      return uniqueIdDefault("uid_");
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return useInitialValueDefault(first);
}) : (function useUID() {
  return useInitialValueDefault(() => uniqueIdDefault("uid_"));
});
let closure_3 = tmp2;
let ReactCompilerGating = ReactCompilerGating_mod;
function uid() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "uid_";
  }
  return uniqueIdDefault(str);
}
const result = size.fileFinishedImporting("modules/core/web/UID.tsx");

export { uid };
export const useUID = tmp2;
export const UID = ReactCompilerGating.isReactCompilerEnabled() ? (function UID(children) {
  const cResult = c.c(3);
  children = children.children;
  const tmp2 = closure_3();
  if (cResult[0] === children) {
    if (cResult[1] === tmp2) {
      let tmp3 = cResult[2];
    }
    return tmp3;
  }
  const childrenResult = children(tmp2);
  cResult[0] = children;
  cResult[1] = tmp2;
  cResult[2] = childrenResult;
  tmp3 = childrenResult;
}) : (function UID(children) {
  return children.children(closure_3());
});