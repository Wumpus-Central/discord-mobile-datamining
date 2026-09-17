// === Module 13440: useRefreshSavedMessages ===

// Module 13440 (useRefreshSavedMessages)
import SavedMessagesActions from "SavedMessagesActions" /* 11856 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/useRefreshSavedMessages.tsx");

export default function useRefreshSavedMessages() {
  const effect = noop.useEffect(() => {
    const andUpdateSavedMessages = SavedMessagesActions.fetchAndUpdateSavedMessages();
  }, []);
};