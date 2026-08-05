// discord_app/modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx
import handleConnectionOpen from "handleConnectionOpen";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useInappropriateConversationSafetyToolsWarningForChannel } from "useInappropriateConversationSafetyToolsWarningForChannel.tsx";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx");

export const useShouldShowInitialSafetyToolsButtonTooltip = function useShouldShowInitialSafetyToolsButtonTooltip(channelId) {
  const _require = channelId;
  const inappropriateConversationSafetyToolsWarningForChannel = _useInappropriateConversationSafetyToolsWarningForChannel.useInappropriateConversationSafetyToolsWarningForChannel(channelId);
  const obj = _useInappropriateConversationSafetyToolsWarningForChannel;
  const items = [handleConnectionOpen];
  const obj2 = _initialize;
  return null != inappropriateConversationSafetyToolsWarningForChannel && !_initialize.useStateFromStores(items, () => outer1_2.hasShownInitialTooltipForChannel(closure_0));
};