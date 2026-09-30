// === Module 11114: useLikelyAtoWarning ===

// Module 11114 (useLikelyAtoWarning)
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10579 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 10638 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 10639 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 11112 */;
import useIsMessageRequest from "useIsMessageRequest" /* 11113 */;
import size from "module_2" /* 2 */;

const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const result = size.fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = function useLikelyAtoWarning(channelId) {
  const isSpamMessageRequest = useIsSpamMessageRequest.useIsSpamMessageRequest(channelId);
  const isMessageRequest = useIsMessageRequest.useIsMessageRequest(channelId);
  const channelSafetyWarning = useChannelSafetyWarning.useChannelSafetyWarning(channelId, SafetyWarningTypes.LIKELY_ATO);
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