// discord_app/modules/message_request/hooks/useSpamMessageRequestsCount.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import SpamMessageRequestStore from "../SpamMessageRequestStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useSpamMessageRequestsCount.tsx");

export const useSpamMessageRequestCount = function useSpamMessageRequestCount() {
  const items = [SpamMessageRequestStore];
  return initialize.useStateFromStores(items, () => spamChannelsCount.getSpamChannelsCount());
};
