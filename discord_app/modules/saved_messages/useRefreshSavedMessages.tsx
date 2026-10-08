// === Module 12661: useRefreshSavedMessages ===

// Module 12661 (useRefreshSavedMessages)
import c from "c" /* 576 */;
import SavedMessagesActions from "SavedMessagesActions" /* 12662 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useRefreshSavedMessages() {
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
}) : (function useRefreshSavedMessages() {
  const effect = noop.useEffect(() => {
    const andUpdateSavedMessages = SavedMessagesActions.fetchAndUpdateSavedMessages();
  }, []);
});