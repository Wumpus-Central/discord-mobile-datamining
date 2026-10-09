// === Module 12601: useRefreshSavedMessages ===

// Module 12601 (useRefreshSavedMessages)
import SavedMessagesActions from "SavedMessagesActions" /* 12602 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useRefreshSavedMessages(arg0) {
  const cResult = require("c").c(3);
  _require = tmp2;
  if (cResult[0] !== (undefined === arg0 || arg0)) {
    const fn = function f() {
      if (closure_0) {
        const andUpdateSavedMessages = SavedMessagesActions.fetchAndUpdateSavedMessages();
      }
    };
    const items = [tmp2];
    cResult[0] = tmp2;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp4 = items;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  const effect = noop.useEffect(tmp3, tmp4);
}) : (function useRefreshSavedMessages() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = true;
  }
  const items = [flag];
  const effect = noop.useEffect(() => {
    if (flag) {
      const andUpdateSavedMessages = SavedMessagesActions.fetchAndUpdateSavedMessages();
    }
  }, items);
});