// discord_app/modules/message_request/hooks/useMessageRequestsCount.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import MessageRequestStore from "../MessageRequestStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export const useMessageRequestsCount = ReactCompilerGating.isReactCompilerEnabled()
  ? function useMessageRequestsCount() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MessageRequestStore];
        const fn = function u() {
          return messageRequestsCount.getMessageRequestsCount();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      return initialize.useStateFromStores(tmp4, tmp5);
    }
  : function useMessageRequestsCount() {
      const items = [MessageRequestStore];
      return initialize.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
    };
