// discord_app/modules/self_mod/inappropriate_conversation/hooks/useLastChannelMessage.tsx
import MessageStore from "../../../../stores/MessageStore.tsx";
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
        const items = [MessageStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          let lastNonCurrentUserMessage = MessageStore.getLastNonCurrentUserMessage(closure_0);
          if (lastNonCurrentUserMessage == null) {
            lastNonCurrentUserMessage = MessageStore.getLastMessage(closure_0);
          }
          return lastNonCurrentUserMessage;
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
      const items = [MessageStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => {
        let lastNonCurrentUserMessage = MessageStore.getLastNonCurrentUserMessage(closure_0);
        if (lastNonCurrentUserMessage == null) {
          lastNonCurrentUserMessage = MessageStore.getLastMessage(closure_0);
        }
        return lastNonCurrentUserMessage;
      });
    };
const result = size.fileFinishedImporting(
  "modules/self_mod/inappropriate_conversation/hooks/useLastChannelMessage.tsx",
);

export const useLastChannelMessage = tmp2;
