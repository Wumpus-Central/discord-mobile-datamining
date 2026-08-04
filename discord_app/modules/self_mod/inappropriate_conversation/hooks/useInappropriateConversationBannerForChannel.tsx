// discord_app/modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationBannerForChannel.tsx
import { SafetyWarningTypes } from "handleConnectionOpen";

const result = require("useSafetyAlertsSettingOrDefault").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationBannerForChannel.tsx");

export const useInappropriateConversationBannerForChannel = function useInappropriateConversationBannerForChannel(channelId, LOCATION_CONTEXT_MOBILE) {
  let obj = require(10143) /* InappropriateConversationExperiment */;
  obj = { location: LOCATION_CONTEXT_MOBILE };
  const isEligibleForInappropriateConversationWarning = obj.useIsEligibleForInappropriateConversationWarning(obj);
  const safetyAlertsSettingOrDefault = require(10144) /* useSafetyAlertsSettingOrDefault */.useSafetyAlertsSettingOrDefault();
  const obj3 = require(10144) /* useSafetyAlertsSettingOrDefault */;
  const inappropriateConversationWarningsForChannel = require(10146) /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId);
  require(10448) /* useChannelSafetyWarning */;
  if (isEligibleForInappropriateConversationWarning) {
    if (safetyAlertsSettingOrDefault) {
      if (0 !== inappropriateConversationWarningsForChannel.length) {
        if (!inappropriateConversationWarningsForChannel.some((type) => {
          let tmp2 = type.type === obj.INAPPROPRIATE_CONVERSATION_TIER_1;
          if (!tmp2) {
            let tmp3 = type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2;
            if (tmp3) {
              tmp3 = null != type.dismiss_timestamp;
            }
            tmp2 = tmp3;
          }
          return tmp2;
        })) {
          return tmp4;
        }
      }
    }
  }
};