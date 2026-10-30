// discord_app/modules/saved_messages/useRefreshSavedMessages.tsx
import SavedMessagesActions from "SavedMessagesActions.tsx";
import noop from "../../../_runtime/metro/00019__.js";

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
}
