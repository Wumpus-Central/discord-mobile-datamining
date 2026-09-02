// === Module 11244: useLastChannelMessage ===

// Module 11244 (useLastChannelMessage)
import closure_2 from "reinjectEphemerals" /* 4735 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useLastChannelMessage.tsx");

export const useLastChannelMessage = function useLastChannelMessage(channelId) {
  const _require = channelId;
  const items = [closure_2];
  return _require(586).useStateFromStores(items, () => {
    let lastNonCurrentUserMessage = closure_1_2.getLastNonCurrentUserMessage(closure_0);
    if (lastNonCurrentUserMessage == null) {
      lastNonCurrentUserMessage = closure_1_2.getLastMessage(closure_0);
    }
    return lastNonCurrentUserMessage;
  });
};