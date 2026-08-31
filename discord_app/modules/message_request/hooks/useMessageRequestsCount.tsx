// === Module 16428: useMessageRequestsCount ===

// Module 16428 (useMessageRequestsCount)
import initialize from "initialize" /* 589 */;
import closure_2 from "processChannel" /* 6034 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export const useMessageRequestsCount = function useMessageRequestsCount() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
};