// === Module 19799: useSpamMessageRequestsCount ===

// Module 19799 (useSpamMessageRequestsCount)
import initialize from "initialize" /* 504 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 7039 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useSpamMessageRequestsCount.tsx");

export function useSpamMessageRequestCount() {
  items = [SpamMessageRequestStore];
  return initialize.useStateFromStores(items, () => spamChannelsCount.getSpamChannelsCount());
}