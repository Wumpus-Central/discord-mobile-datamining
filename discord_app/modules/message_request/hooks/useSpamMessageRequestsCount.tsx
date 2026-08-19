// === Module 16101: useSpamMessageRequestCount ===

// Module 16101 (useSpamMessageRequestCount)
import initialize from "initialize" /* 589 */;
import processChannel from "processChannel" /* 4800 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/message_request/hooks/useSpamMessageRequestsCount.tsx");

export const useSpamMessageRequestCount = function useSpamMessageRequestCount() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => spamChannelsCount.getSpamChannelsCount());
};