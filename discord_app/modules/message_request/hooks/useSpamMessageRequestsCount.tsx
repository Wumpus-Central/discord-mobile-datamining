// discord_app/modules/message_request/hooks/useSpamMessageRequestsCount.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import closure_2 from "../SpamMessageRequestStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useSpamMessageRequestsCount.tsx");

export const useSpamMessageRequestCount = function useSpamMessageRequestCount() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => spamChannelsCount.getSpamChannelsCount());
};