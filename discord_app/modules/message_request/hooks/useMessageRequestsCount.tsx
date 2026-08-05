// discord_app/modules/message_request/hooks/useMessageRequestsCount.tsx
import processChannel from "processChannel";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export const useMessageRequestsCount = function useMessageRequestsCount() {
  const items = [processChannel];
  return require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
};