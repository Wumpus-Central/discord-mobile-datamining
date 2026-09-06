// === Module 11396: useShouldShowInitialSafetyToolsButtonTooltip ===

// Module 11396 (useShouldShowInitialSafetyToolsButtonTooltip)
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10915 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx");

export const useShouldShowInitialSafetyToolsButtonTooltip = function useShouldShowInitialSafetyToolsButtonTooltip(channelId) {
  _require = channelId;
  const inappropriateConversationSafetyToolsWarningForChannel = require("useInappropriateConversationSafetyToolsWarningForChannel").useInappropriateConversationSafetyToolsWarningForChannel(channelId);
  const obj = require("useInappropriateConversationSafetyToolsWarningForChannel");
  const items = [ChannelSafetyWarningsStore];
  const obj2 = require("initialize");
  return null != inappropriateConversationSafetyToolsWarningForChannel && !require("initialize").useStateFromStores(items, () => ChannelSafetyWarningsStore.hasShownInitialTooltipForChannel(closure_0));
};