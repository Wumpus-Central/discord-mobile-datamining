// === Module 10972: useInappropriateConversationWarningsForChannel ===

// Module 10972 (useInappropriateConversationWarningsForChannel)
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10915 */;

const require = fn;
const SafetyWarningTypes = fn(10915).SafetyWarningTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx");

export const useInappropriateConversationWarningsForChannel = function useInappropriateConversationWarningsForChannel(channelId) {
  _require = channelId;
  const items = [ChannelSafetyWarningsStore];
  const items1 = [channelId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelSafetyWarningsStore.getChannelSafetyWarnings(closure_0), items1);
  return stateFromStores.filter((type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2);
};