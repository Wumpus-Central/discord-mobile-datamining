// discord_app/modules/auth/native/useLoginReset.tsx
import react2 from "../../../../_runtime/00576_react.js";
import react from "../../../../_runtime/00019_react.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
    }
  : () => {
      const effect = react.useEffect(() => {
        let authenticated;
        return () => {
          if (!authenticated.isAuthenticated()) {
            const obj = closure_1_1(closure_1_2[4]);
            obj.loginReset();
          }
        };
      }, []);
    };
const result = size.fileFinishedImporting("modules/auth/native/useLoginReset.tsx");

export default tmp2;
