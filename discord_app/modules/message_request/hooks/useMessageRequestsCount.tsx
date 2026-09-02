// === Module 16699: useMessageRequestsCount ===

// Module 16699 (useMessageRequestsCount)
import initialize from "initialize" /* 586 */;
import closure_2 from "processChannel" /* 6074 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export const useMessageRequestsCount = function useMessageRequestsCount() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
};