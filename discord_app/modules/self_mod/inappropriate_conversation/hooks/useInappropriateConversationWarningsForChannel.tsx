// discord_app/modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx
import closure_2 from "../../ChannelSafetyWarningsStore.tsx";
import { SafetyWarningTypes } from "../../ChannelSafetyWarningsStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx",
);

export const useInappropriateConversationWarningsForChannel = function useInappropriateConversationWarningsForChannel(
  channelId,
) {
  const _require = channelId;
  const items = [closure_2];
  const items1 = [channelId];
  const stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items,
    () => closure_1_2.getChannelSafetyWarnings(closure_0),
    items1,
  );
  return stateFromStores.filter(
    (type) =>
      type.type === obj.INAPPROPRIATE_CONVERSATION_TIER_1 || type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2,
  );
};
