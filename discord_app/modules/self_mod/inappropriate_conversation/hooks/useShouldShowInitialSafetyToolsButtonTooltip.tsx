// === Module 10447: useShouldShowInitialSafetyToolsButtonTooltip ===

// Module 10447 (useShouldShowInitialSafetyToolsButtonTooltip)
import closure_2 from "handleConnectionOpen" /* 9818 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx");

export const useShouldShowInitialSafetyToolsButtonTooltip = function useShouldShowInitialSafetyToolsButtonTooltip(channelId) {
  const _require = channelId;
  const inappropriateConversationSafetyToolsWarningForChannel = _require(10446).useInappropriateConversationSafetyToolsWarningForChannel(channelId);
  const obj = _require(10446);
  const items = [closure_2];
  const obj2 = _require(589);
  return null != inappropriateConversationSafetyToolsWarningForChannel && !_require(589).useStateFromStores(items, () => closure_1_2.hasShownInitialTooltipForChannel(closure_0));
};