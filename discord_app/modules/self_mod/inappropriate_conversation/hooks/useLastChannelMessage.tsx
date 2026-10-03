// discord_app/modules/self_mod/inappropriate_conversation/hooks/useLastChannelMessage.tsx
import MessageStore from "../../../../stores/MessageStore.tsx";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/self_mod/inappropriate_conversation/hooks/useLastChannelMessage.tsx",
);

export const useLastChannelMessage = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MessageStore];
        cResult[0] = items;
        let first = items;
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
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      return require("initialize").useStateFromStores(first, tmp6);
    }
  : (arg0) => {
      _require = arg0;
      const items = [MessageStore];
      return require("initialize").useStateFromStores(items, () => {
        let lastNonCurrentUserMessage = MessageStore.getLastNonCurrentUserMessage(closure_0);
        if (lastNonCurrentUserMessage == null) {
          lastNonCurrentUserMessage = MessageStore.getLastMessage(closure_0);
        }
        return lastNonCurrentUserMessage;
      });
    };
