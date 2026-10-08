// === Module 6627: useLoginReset ===

// Module 6627 (useLoginReset)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/useLoginReset.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useLoginReset() {
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
}) : (function useLoginReset() {
  const effect = noop.useEffect(() => () => {
    if (!authenticated.isAuthenticated()) {
      closure_1_1(dependencyMap[4]).loginReset();
      const obj = closure_1_1(dependencyMap[4]);
    }
  }, []);
});