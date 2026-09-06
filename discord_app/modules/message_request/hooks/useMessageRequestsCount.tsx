// discord_app/modules/message_request/hooks/useMessageRequestsCount.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import MessageRequestStore from "../MessageRequestStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export const useMessageRequestsCount = function useMessageRequestsCount() {
  const items = [MessageRequestStore];
  return initialize.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
};
