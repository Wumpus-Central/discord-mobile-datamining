// discord_app/modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx
import closure_2 from "../../ChannelSafetyWarningsStore.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useInappropriateConversationSafetyToolsWarningForChannel } from "useInappropriateConversationSafetyToolsWarningForChannel.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx",
);

export const useShouldShowInitialSafetyToolsButtonTooltip = function useShouldShowInitialSafetyToolsButtonTooltip(
  channelId,
) {
  const _require = channelId;
  const inappropriateConversationSafetyToolsWarningForChannel =
    require("useInappropriateConversationSafetyToolsWarningForChannel.tsx").useInappropriateConversationSafetyToolsWarningForChannel(
      channelId,
    );
  const obj = useInappropriateConversationSafetyToolsWarningForChannel;
  const items = [closure_2];
  const obj2 = initialize;
  return (
    null != inappropriateConversationSafetyToolsWarningForChannel &&
    !require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () =>
      closure_1_2.hasShownInitialTooltipForChannel(closure_0),
    )
  );
};
