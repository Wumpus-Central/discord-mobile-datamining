// === Module 10371: useLikelyAtoWarning ===

// Module 10371 (useLikelyAtoWarning)
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10266 */;
import useIsSpamMessageRequest from "useIsSpamMessageRequest" /* 10363 */;
import useIsMessageRequest from "useIsMessageRequest" /* 10364 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 10365 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 10366 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const result = size.fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = ReactCompilerGating.isReactCompilerEnabled() ? (function useLikelyAtoWarning(arg0) {
  const isSpamMessageRequest = useIsSpamMessageRequest.useIsSpamMessageRequest(arg0);
  const isMessageRequest = useIsMessageRequest.useIsMessageRequest(arg0);
  const channelSafetyWarning = useChannelSafetyWarning.useChannelSafetyWarning(arg0, SafetyWarningTypes.LIKELY_ATO);
  const tmp4 = useInappropriateConversationWarningsForChannel.useInappropriateConversationWarningsForChannel(arg0).length > 0;
  if (!isSpamMessageRequest) {
    if (!isMessageRequest) {
      if (!tmp4) {
        if (null == obj5.useStrangerDangerWarning(arg0)) {
          return channelSafetyWarning;
        }
      }
    }
  }
}) : (function useLikelyAtoWarning(arg0) {
  const isSpamMessageRequest = useIsSpamMessageRequest.useIsSpamMessageRequest(arg0);
  const isMessageRequest = useIsMessageRequest.useIsMessageRequest(arg0);
  const channelSafetyWarning = useChannelSafetyWarning.useChannelSafetyWarning(arg0, SafetyWarningTypes.LIKELY_ATO);
  const tmp4 = useInappropriateConversationWarningsForChannel.useInappropriateConversationWarningsForChannel(arg0).length > 0;
  if (!isSpamMessageRequest) {
    if (!isMessageRequest) {
      if (!tmp4) {
        if (null == obj5.useStrangerDangerWarning(arg0)) {
          return channelSafetyWarning;
        }
      }
    }
  }
});