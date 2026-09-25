// === Module 12845: useRefreshSavedMessages ===

// Module 12845 (useRefreshSavedMessages)
import SavedMessagesActions from "SavedMessagesActions" /* 11191 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default function useRefreshSavedMessages() {
  const effect = noop.useEffect(() => {
    const andUpdateSavedMessages = SavedMessagesActions.fetchAndUpdateSavedMessages();
  }, []);
};