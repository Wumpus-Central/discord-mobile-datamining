// discord_app/modules/parent_tools/hooks/useRefreshLinkCodeOnExpiry.tsx
import react2 from "../../../../_runtime/00576_react.js";
import useStableCallbackDefault from "../../../hooks/useStableCallback.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0 = arg0;
      const obj = react2;
      const cResult = obj.c(4);
      const tmp2 = useStableCallbackDefault(arg1);
      let closure_1 = tmp2;
      if (cResult[0] === arg0) {
        let tmp3;
        let tmp4;
        if (cResult[1] === tmp2) {
          tmp3 = cResult[2];
          tmp4 = cResult[3];
        }
        const effect = react.useEffect(tmp3, tmp4);
      }
      const fn = function u() {
        let timeout;
        if (null != timeout) {
          const _Date = Date;
          const diff = tmp - Date.now();
          if (diff <= 0) {
            closure_1();
          } else {
            const _setTimeout = setTimeout;
            timeout = setTimeout(closure_1, diff);
            return () => clearTimeout(closure_0);
          }
        }
      };
      const items = [arg0, tmp2];
      cResult[0] = arg0;
      cResult[1] = tmp2;
      cResult[2] = fn;
      cResult[3] = items;
      tmp4 = items;
      tmp3 = fn;
    }
  : (arg0, arg1) => {
      let closure_0 = arg0;
      const tmp = useStableCallbackDefault(arg1);
      let closure_1 = tmp;
      const items = [arg0, tmp];
      const effect = react.useEffect(() => {
        let timeout;
        if (null != timeout) {
          const _Date = Date;
          const diff = tmp - Date.now();
          if (diff <= 0) {
            closure_1();
          } else {
            const _setTimeout = setTimeout;
            timeout = setTimeout(closure_1, diff);
            return () => clearTimeout(closure_0);
          }
        }
      }, items);
    };
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useRefreshLinkCodeOnExpiry.tsx");

export default tmp2;
