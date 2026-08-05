// discord_app/modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx
import handleConnectionOpen from "handleConnectionOpen";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx");

export const useShouldShowInitialSafetyToolsButtonTooltip = function useShouldShowInitialSafetyToolsButtonTooltip(channelId) {
  const _require = channelId;
  const inappropriateConversationSafetyToolsWarningForChannel = _require("useInappropriateConversationSafetyToolsWarningForChannel.tsx").useInappropriateConversationSafetyToolsWarningForChannel(channelId);
  const obj = _require("useInappropriateConversationSafetyToolsWarningForChannel.tsx");
  const items = [handleConnectionOpen];
  const obj2 = _require("../../../../../discord_common/js/packages/flux/index.tsx");
  return null != inappropriateConversationSafetyToolsWarningForChannel && !_require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => outer1_2.hasShownInitialTooltipForChannel(closure_0));
};