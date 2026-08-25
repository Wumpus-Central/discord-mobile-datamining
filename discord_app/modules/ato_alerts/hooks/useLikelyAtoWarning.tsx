// === Module 10416: useLikelyAtoWarning ===

// Module 10416 (useLikelyAtoWarning)
import set from "set" /* 2 */;
import handleConnectionOpen from "handleConnectionOpen" /* 9818 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 10408 */;
import useIsMessageRequest from "useIsMessageRequest" /* 10409 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 10410 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 10411 */;

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