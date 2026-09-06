// discord_app/modules/ato_alerts/hooks/useLikelyAtoWarning.tsx
import ChannelSafetyWarningsStore from "../../self_mod/ChannelSafetyWarningsStore.tsx";
import useInappropriateConversationWarningsForChannel from "../../self_mod/inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx";
import useChannelSafetyWarning from "../../self_mod/hooks/useChannelSafetyWarning.tsx";
import useIsSpamMessageRequest from "../../message_request/hooks/useIsSpamMessageRequest.tsx";
import useIsMessageRequest from "../../message_request/hooks/useIsMessageRequest.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const result = size.fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = function useLikelyAtoWarning(channelId) {
  const isSpamMessageRequest = useIsSpamMessageRequest.useIsSpamMessageRequest(channelId);
  const isMessageRequest = useIsMessageRequest.useIsMessageRequest(channelId);
  const channelSafetyWarning = useChannelSafetyWarning.useChannelSafetyWarning(
    channelId,
    SafetyWarningTypes.LIKELY_ATO,
  );
  const tmp4 =
    useInappropriateConversationWarningsForChannel.useInappropriateConversationWarningsForChannel(channelId).length > 0;
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
