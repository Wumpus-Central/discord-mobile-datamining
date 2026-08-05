// discord_app/modules/message_request/hooks/useSpamMessageRequestsCount.tsx
import processChannel from "processChannel";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useSpamMessageRequestsCount.tsx");

export const useSpamMessageRequestCount = function useSpamMessageRequestCount() {
  const items = [processChannel];
  return initialize.useStateFromStores(items, () => spamChannelsCount.getSpamChannelsCount());
};