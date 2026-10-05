// discord_app/modules/voice_panel/native/hooks/useChatBadge.tsx
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ReadStateStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function u() {
          let str = "mention";
          if (ReadStateStore.getMentionCount(closure_0) <= 0) {
            let str2 = null;
            if (ReadStateStore.hasUnread(closure_0)) {
              str2 = "unread";
            }
            str = str2;
          }
          return str;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [ReadStateStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => {
        let str = "mention";
        if (ReadStateStore.getMentionCount(closure_0) <= 0) {
          let str2 = null;
          if (ReadStateStore.hasUnread(closure_0)) {
            str2 = "unread";
          }
          str = str2;
        }
        return str;
      });
    };
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useChatBadge.tsx");

export default tmp2;
