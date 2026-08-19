// === Module 10579: useLikelyAtoWarning ===

// Module 10579 (useLikelyAtoWarning)
import obj132 from "obj132" /* 2 */;
import handleConnectionOpen from "handleConnectionOpen" /* 9921 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 10571 */;
import useIsMessageRequest from "useIsMessageRequest" /* 10572 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 10573 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 10574 */;

const SafetyWarningTypes = handleConnectionOpen.SafetyWarningTypes;
const result = obj132.fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

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