// discord_app/modules/auth/native/useLoginReset.tsx
import c from "../../../../_runtime/00576_c.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/useLoginReset.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s() {
          return () => {
            if (!authenticated.isAuthenticated()) {
              closure_1_1(dependencyMap[4]).loginReset();
              const obj = closure_1_1(dependencyMap[4]);
            }
          };
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp2 = fn;
        tmp3 = items;
      } else {
        [tmp2, tmp3] = cResult;
      }
      const effect = noop.useEffect(tmp2, tmp3);
    }
  : () => {
      const effect = noop.useEffect(
        () => () => {
          if (!authenticated.isAuthenticated()) {
            closure_1_1(dependencyMap[4]).loginReset();
            const obj = closure_1_1(dependencyMap[4]);
          }
        },
        [],
      );
    };
