// discord_app/modules/voice_panel/native/hooks/useChatBadge.tsx
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useChatBadge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useChatBadge(arg0) {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ReadStateStore];
        cResult[0] = items;
        let first = items;
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
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      return require("initialize").useStateFromStores(first, tmp6);
    }
  : function useChatBadge(arg0) {
      _require = arg0;
      const items = [ReadStateStore];
      return require("initialize").useStateFromStores(items, () => {
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
