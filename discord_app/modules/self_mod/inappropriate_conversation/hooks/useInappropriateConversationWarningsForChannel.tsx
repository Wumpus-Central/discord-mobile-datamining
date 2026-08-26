// === Module 10479: useInappropriateConversationWarningsForChannel ===

// Module 10479 (useInappropriateConversationWarningsForChannel)
import closure_2 from "handleConnectionOpen" /* 9885 */;
import { SafetyWarningTypes } from "handleConnectionOpen" /* 9885 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx");

export const useInappropriateConversationWarningsForChannel = function useInappropriateConversationWarningsForChannel(channelId) {
  const _require = channelId;
  const items = [closure_2];
  const items1 = [channelId];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_2.getChannelSafetyWarnings(closure_0), items1);
  return stateFromStores.filter((type) => type.type === obj.INAPPROPRIATE_CONVERSATION_TIER_1 || type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2);
};