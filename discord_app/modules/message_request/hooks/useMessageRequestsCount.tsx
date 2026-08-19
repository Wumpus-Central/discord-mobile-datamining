// === Module 16100: useMessageRequestsCount ===

// Module 16100 (useMessageRequestsCount)
import initialize from "initialize" /* 589 */;
import processChannel from "processChannel" /* 4799 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export const useMessageRequestsCount = function useMessageRequestsCount() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
};