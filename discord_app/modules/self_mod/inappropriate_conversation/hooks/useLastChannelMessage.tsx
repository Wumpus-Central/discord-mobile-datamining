// === Module 10603: useLastChannelMessage ===

// Module 10603 (useLastChannelMessage)
import reinjectEphemerals from "reinjectEphemerals" /* 4994 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useLastChannelMessage.tsx");

export const useLastChannelMessage = function useLastChannelMessage(channelId) {
  const _require = channelId;
  const items = [closure_2];
  return _require(589).useStateFromStores(items, () => {
    let lastNonCurrentUserMessage = closure_1_2.getLastNonCurrentUserMessage(closure_0);
    if (lastNonCurrentUserMessage == null) {
      lastNonCurrentUserMessage = closure_1_2.getLastMessage(closure_0);
    }
    return lastNonCurrentUserMessage;
  });
};