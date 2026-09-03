// === Module 16719: useMessageRequestsCount ===

// Module 16719 (useMessageRequestsCount)
import initialize from "initialize" /* 586 */;
import closure_2 from "processChannel" /* 6075 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export const useMessageRequestsCount = function useMessageRequestsCount() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
};