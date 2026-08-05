// discord_app/modules/ato_alerts/hooks/useLikelyAtoWarning.tsx
import { SafetyWarningTypes } from "handleConnectionOpen";
import { useIsMessageRequest } from "../../message_request/hooks/useIsMessageRequest.tsx";
import { useIsSpamMessageRequest } from "../../message_request/hooks/useIsSpamMessageRequest.tsx";
import { useChannelSafetyWarning } from "../../self_mod/hooks/useChannelSafetyWarning.tsx";
import { useInappropriateConversationWarningsForChannel } from "../../self_mod/inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx";

const result = require("useIsMessageRequest").fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = function useLikelyAtoWarning(channelId) {
  const isSpamMessageRequest = useIsSpamMessageRequest /* useIsSpamMessageRequest */.useIsSpamMessageRequest(channelId);
  const obj = useIsSpamMessageRequest /* useIsSpamMessageRequest */;
  const isMessageRequest = useIsMessageRequest /* useIsMessageRequest */.useIsMessageRequest(channelId);
  const obj2 = useIsMessageRequest /* useIsMessageRequest */;
  const channelSafetyWarning = useChannelSafetyWarning /* useChannelSafetyWarning */.useChannelSafetyWarning(channelId, SafetyWarningTypes.LIKELY_ATO);
  const obj3 = useChannelSafetyWarning /* useChannelSafetyWarning */;
  const obj4 = useInappropriateConversationWarningsForChannel /* useInappropriateConversationWarningsForChannel */;
  const tmp4 = useInappropriateConversationWarningsForChannel /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId).length > 0;
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