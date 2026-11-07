// === Module 19330: useMessageRequestsCount ===

// Module 19330 (useMessageRequestsCount)
import initialize from "initialize" /* 504 */;
import MessageRequestStore from "MessageRequestStore" /* 6911 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useMessageRequestsCount.tsx");

export function useMessageRequestsCount() {
  items = [MessageRequestStore];
  return initialize.useStateFromStores(items, () => messageRequestsCount.getMessageRequestsCount());
}