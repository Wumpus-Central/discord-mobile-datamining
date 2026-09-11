// === Module 16970: useMessageRequestsCount ===

// Module 16970 (useMessageRequestsCount)
import initialize from "initialize" /* 504 */;
import MessageRequestStore from "MessageRequestStore" /* 7292 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export const useMessageRequestsCount = function useMessageRequestsCount() {
  const items = [MessageRequestStore];
  return initialize.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
};