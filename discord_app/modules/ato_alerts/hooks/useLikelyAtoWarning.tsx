import { SafetyWarningTypes } from "handleConnectionOpen";

const result = require("useIsMessageRequest").fileFinishedImporting("modules/ato_alerts/hooks/useLikelyAtoWarning.tsx");

export const useLikelyAtoWarning = function useLikelyAtoWarning(channelId) {
  const isSpamMessageRequest = require(10255) /* useIsSpamMessageRequest */.useIsSpamMessageRequest(channelId);
  const obj = require(10255) /* useIsSpamMessageRequest */;
  const isMessageRequest = require(10256) /* useIsMessageRequest */.useIsMessageRequest(channelId);
  const obj2 = require(10256) /* useIsMessageRequest */;
  const channelSafetyWarning = require(10257) /* useChannelSafetyWarning */.useChannelSafetyWarning(channelId, SafetyWarningTypes.LIKELY_ATO);
  const obj3 = require(10257) /* useChannelSafetyWarning */;
  const obj4 = require(10258) /* useInappropriateConversationWarningsForChannel */;
  const tmp4 = require(10258) /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId).length > 0;
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