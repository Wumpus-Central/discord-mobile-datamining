// discord_app/modules/app_dms/useIsAppDM.tsx
import UserStore from "../../stores/UserStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let dM;
      let first;
      let tmp6;
      _require = arg0;
      let tmp = _require;
      const obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          let tmp = null != dM && dM.isDM() && 1 === dM.recipients.length;
          if (tmp) {
            const user = UserStore.getUser(dM.recipients[0]);
            let bot;
            if (user != null) {
              bot = user.bot;
            }
            tmp = true === bot;
          }
          return tmp;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(573);
      return tmpResult.useStateFromStores(first, tmp6);
    }
  : (arg0) => {
      let dM;
      _require = arg0;
      const items = [UserStore];
      const obj = require("useStateFromStores");
      return obj.useStateFromStores(items, () => {
        let tmp = null != dM && dM.isDM() && 1 === dM.recipients.length;
        if (tmp) {
          const user = UserStore.getUser(dM.recipients[0]);
          let bot;
          if (user != null) {
            bot = user.bot;
          }
          tmp = true === bot;
        }
        return tmp;
      });
    };
const result = size.fileFinishedImporting("modules/app_dms/useIsAppDM.tsx");

export default tmp2;
