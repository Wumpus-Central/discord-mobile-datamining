// discord_app/modules/saved_messages/useRefreshSavedMessages.tsx
import c from "../../../_runtime/00576_c.js";
import SavedMessagesActions from "SavedMessagesActions.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          const andUpdateSavedMessages = SavedMessagesActions.fetchAndUpdateSavedMessages();
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
    }
  : () => {
      const effect = noop.useEffect(() => {
        const andUpdateSavedMessages = SavedMessagesActions.fetchAndUpdateSavedMessages();
      }, []);
    };
