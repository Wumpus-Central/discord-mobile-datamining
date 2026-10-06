// === Module 6449: useLoginReset ===

// Module 6449 (useLoginReset)
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp2;
  let tmp3;
  let obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      let authenticated;
      return () => {
        if (!authenticated.isAuthenticated()) {
          const obj = closure_1_1(closure_1_2[4]);
          obj.loginReset();
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
  const effect = react.useEffect(tmp2, tmp3);
}) : (() => {
  const effect = react.useEffect(() => {
    let authenticated;
    return () => {
      if (!authenticated.isAuthenticated()) {
        const obj = closure_1_1(closure_1_2[4]);
        obj.loginReset();
      }
    };
  }, []);
});
const result = size.fileFinishedImporting("modules/auth/native/useLoginReset.tsx");

export default tmp2;