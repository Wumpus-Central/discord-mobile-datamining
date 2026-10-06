// discord_app/modules/core/web/UID.tsx
import react from "../../../../_runtime/00576_react.js";
import uniqueIdDefault from "../../../../_runtime/05100_uniqueId.js";
import useInitialValueDefault from "../../../hooks/useInitialValue.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let children;

let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          return uniqueIdDefault("uid_");
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      return useInitialValueDefault(first);
    }
  : () => useInitialValueDefault(() => uniqueIdDefault("uid_"));
let closure_3 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const obj = react;
      const cResult = obj.c(3);
      children = children.children;
      const tmp2 = closure_3();
      if (cResult[0] === children) {
        let tmp3;
        if (cResult[1] === tmp2) {
          tmp3 = cResult[2];
        }
        return tmp3;
      }
      const childrenResult = children(tmp2);
      cResult[0] = children;
      cResult[1] = tmp2;
      cResult[2] = childrenResult;
      tmp3 = childrenResult;
    }
  : (children) => children.children(closure_3());
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
export const UID = tmp3;
