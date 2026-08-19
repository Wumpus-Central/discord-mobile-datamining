// === Module 10574: useInappropriateConversationWarningsForChannel ===

// Module 10574 (useInappropriateConversationWarningsForChannel)
import handleConnectionOpen from "handleConnectionOpen" /* 9921 */;
import { SafetyWarningTypes } from "handleConnectionOpen" /* 9921 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx");

export const useInappropriateConversationWarningsForChannel = function useInappropriateConversationWarningsForChannel(channelId) {
  const _require = channelId;
  const items = [closure_2];
  const items1 = [channelId];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_2.getChannelSafetyWarnings(closure_0), items1);
  return stateFromStores.filter((item, index) => item.type === obj.INAPPROPRIATE_CONVERSATION_TIER_1 || item.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2);
};