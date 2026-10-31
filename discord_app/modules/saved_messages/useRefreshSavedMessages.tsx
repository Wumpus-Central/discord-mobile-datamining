// === Module 11155: useRefreshSavedMessages ===

// Module 11155 (useRefreshSavedMessages)
import SavedMessagesActions from "SavedMessagesActions" /* 11156 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default function useRefreshSavedMessages() {
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
};