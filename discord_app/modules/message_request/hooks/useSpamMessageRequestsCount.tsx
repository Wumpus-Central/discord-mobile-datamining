// === Module 16885: useSpamMessageRequestsCount ===

// Module 16885 (useSpamMessageRequestsCount)
import initialize from "initialize" /* 504 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 7220 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useSpamMessageRequestsCount.tsx");

export const useSpamMessageRequestCount = function useSpamMessageRequestCount() {
  const items = [SpamMessageRequestStore];
  return initialize.useStateFromStores(items, () => spamChannelsCount.getSpamChannelsCount());
};