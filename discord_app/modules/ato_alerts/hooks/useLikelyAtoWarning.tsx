// discord_app/modules/ato_alerts/hooks/useLikelyAtoWarning.tsx
import { SafetyWarningTypes } from "handleConnectionOpen";

const result = require("useIsMessageRequest").fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = function useLikelyAtoWarning(channelId) {
  const isSpamMessageRequest = require("../../message_request/hooks/useIsSpamMessageRequest.tsx") /* useIsSpamMessageRequest */.useIsSpamMessageRequest(channelId);
  const obj = require("../../message_request/hooks/useIsSpamMessageRequest.tsx") /* useIsSpamMessageRequest */;
  const isMessageRequest = require("../../message_request/hooks/useIsMessageRequest.tsx") /* useIsMessageRequest */.useIsMessageRequest(channelId);
  const obj2 = require("../../message_request/hooks/useIsMessageRequest.tsx") /* useIsMessageRequest */;
  const channelSafetyWarning = require("../../self_mod/hooks/useChannelSafetyWarning.tsx") /* useChannelSafetyWarning */.useChannelSafetyWarning(channelId, SafetyWarningTypes.LIKELY_ATO);
  const obj3 = require("../../self_mod/hooks/useChannelSafetyWarning.tsx") /* useChannelSafetyWarning */;
  const obj4 = require("../../self_mod/inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx") /* useInappropriateConversationWarningsForChannel */;
  const tmp4 = require("../../self_mod/inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx") /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId).length > 0;
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