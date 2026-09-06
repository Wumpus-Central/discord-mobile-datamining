// === Module 13283: useRefreshSavedMessages ===

// Module 13283 (useRefreshSavedMessages)
import SavedMessagesActions from "SavedMessagesActions" /* 11705 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default function useRefreshSavedMessages() {
  const effect = noop.useEffect(() => {
    const andUpdateSavedMessages = SavedMessagesActions.fetchAndUpdateSavedMessages();
  }, []);
};