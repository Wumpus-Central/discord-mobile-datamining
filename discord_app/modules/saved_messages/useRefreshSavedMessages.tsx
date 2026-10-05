// === Module 13125: useRefreshSavedMessages ===

// Module 13125 (useRefreshSavedMessages)
import react2 from "react" /* 576 */;
import SavedMessagesActions from "SavedMessagesActions" /* 11335 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp2;
  let tmp3;
  let obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const obj = SavedMessagesActions;
      const andUpdateSavedMessages = obj.fetchAndUpdateSavedMessages();
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
}) : (() => {
  const effect = react.useEffect(() => {
    const obj = SavedMessagesActions;
    const andUpdateSavedMessages = obj.fetchAndUpdateSavedMessages();
  }, []);
});
const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default tmp2;