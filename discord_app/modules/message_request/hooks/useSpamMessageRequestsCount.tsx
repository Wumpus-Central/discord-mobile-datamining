// === Module 16231: useSpamMessageRequestCount ===

// Module 16231 (useSpamMessageRequestCount)
import initialize from "initialize" /* 589 */;
import closure_2 from "processChannel" /* 5948 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useSpamMessageRequestsCount.tsx");

export const useSpamMessageRequestCount = function useSpamMessageRequestCount() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => spamChannelsCount.getSpamChannelsCount());
};