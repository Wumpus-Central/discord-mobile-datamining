// discord_app/modules/ato_alerts/hooks/useLikelyAtoWarning.tsx
import set from "../../../../_runtime/00002_set.js";
import handleConnectionOpen from "../../self_mod/ChannelSafetyWarningsStore.tsx";
import useIsSpamMessageRequest from "../../message_request/hooks/useIsSpamMessageRequest.tsx";
import useIsMessageRequest from "../../message_request/hooks/useIsMessageRequest.tsx";
import useChannelSafetyWarning from "../../self_mod/hooks/useChannelSafetyWarning.tsx";
import useInappropriateConversationWarningsForChannel from "../../self_mod/inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx";

const SafetyWarningTypes = handleConnectionOpen.SafetyWarningTypes;
const result = set.fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = function useLikelyAtoWarning(channelId) {
  const isSpamMessageRequest = useIsSpamMessageRequest.useIsSpamMessageRequest(channelId);
  const obj = useIsSpamMessageRequest;
  const isMessageRequest = useIsMessageRequest.useIsMessageRequest(channelId);
  const obj2 = useIsMessageRequest;
  const channelSafetyWarning = useChannelSafetyWarning.useChannelSafetyWarning(channelId, SafetyWarningTypes.LIKELY_ATO);
  const obj3 = useChannelSafetyWarning;
  const obj4 = useInappropriateConversationWarningsForChannel;
  const tmp4 = useInappropriateConversationWarningsForChannel.useInappropriateConversationWarningsForChannel(channelId).length > 0;
  if (!isSpamMessageRequest) {
    if (!isMessageRequest) {
      if (!tmp4) {
        if (null == obj5.useStrangerDangerWarning(channelId)) {
          return channelSafetyWarning;
        }
      }
    }
  }
};