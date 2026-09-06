// === Module 11367: useLikelyAtoWarning ===

// Module 11367 (useLikelyAtoWarning)
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10915 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 10972 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 10973 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 11365 */;
import useIsMessageRequest from "useIsMessageRequest" /* 11366 */;
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