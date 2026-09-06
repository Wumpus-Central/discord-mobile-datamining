// === Module 16885: useSpamMessageRequestCount ===

// Module 16885 (useSpamMessageRequestCount)
import initialize from "initialize" /* 504 */;
import closure_2 from "processChannel" /* 7220 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useSpamMessageRequestsCount.tsx");

export const useSpamMessageRequestCount = function useSpamMessageRequestCount() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => spamChannelsCount.getSpamChannelsCount());
};