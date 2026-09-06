// discord_app/modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx
import ChannelSafetyWarningsStore from "../../ChannelSafetyWarningsStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx",
);

export const useShouldShowInitialSafetyToolsButtonTooltip = function useShouldShowInitialSafetyToolsButtonTooltip(
  channelId,
) {
  _require = channelId;
  const inappropriateConversationSafetyToolsWarningForChannel =
    require("useInappropriateConversationSafetyToolsWarningForChannel").useInappropriateConversationSafetyToolsWarningForChannel(
      channelId,
    );
  const obj = require("useInappropriateConversationSafetyToolsWarningForChannel");
  const items = [ChannelSafetyWarningsStore];
  const obj2 = require("initialize");
  return (
    null != inappropriateConversationSafetyToolsWarningForChannel &&
    !require("initialize").useStateFromStores(items, () =>
      ChannelSafetyWarningsStore.hasShownInitialTooltipForChannel(closure_0),
    )
  );
};
