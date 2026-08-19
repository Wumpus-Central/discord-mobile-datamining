// discord_app/modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import useUserIsTeen from "../../hooks/useUserIsTeen.tsx";
import useIsSpamMessageRequest from "../../../message_request/hooks/useIsSpamMessageRequest.tsx";
import useIsMessageRequest from "../../../message_request/hooks/useIsMessageRequest.tsx";
import useChannelSafetyWarning from "../../hooks/useChannelSafetyWarning.tsx";
import useInappropriateConversationWarningsForChannel from "../../inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import { SafetyWarningTypes } from "../../ChannelSafetyWarningsStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/self_mod/stranger_danger/hooks/useStrangerDangerWarning.tsx");

export const useStrangerDangerWarning = function useStrangerDangerWarning(id) {
  const items = [closure_2];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const isSpamMessageRequest = useIsSpamMessageRequest.useIsSpamMessageRequest(id);
  const isMessageRequest = useIsMessageRequest.useIsMessageRequest(id);
  const channelSafetyWarning = useChannelSafetyWarning.useChannelSafetyWarning(id, SafetyWarningTypes.STRANGER_DANGER);
  const userIsTeen = useUserIsTeen.useUserIsTeen();
  if (stateFromStores != null) {
    stateFromStores.isStaff();
  }
  if (userIsTeen) {
    if (!isSpamMessageRequest) {
      if (!isMessageRequest) {
        if (tmpResult.useInappropriateConversationWarningsForChannel(id).length <= 0) {
          return channelSafetyWarning;
        }
      }
    }
  }
  tmpResult = useInappropriateConversationWarningsForChannel;
};