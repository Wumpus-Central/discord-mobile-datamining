// === Module 10575: useInappropriateConversationBannerForChannel ===

// Module 10575 (useInappropriateConversationBannerForChannel)
import obj132 from "obj132" /* 2 */;
import handleConnectionOpen from "handleConnectionOpen" /* 9921 */;
import useChannelSafetyWarning from "useChannelSafetyWarning" /* 10573 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 10574 */;
import InappropriateConversationExperiment from "InappropriateConversationExperiment" /* 10576 */;
import useSafetyAlertsSettingOrDefault from "useSafetyAlertsSettingOrDefault" /* 10577 */;

const SafetyWarningTypes = handleConnectionOpen.SafetyWarningTypes;
const result = obj132.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationBannerForChannel.tsx");

export const useInappropriateConversationBannerForChannel = function useInappropriateConversationBannerForChannel(channelId, LOCATION_CONTEXT_MOBILE) {
  const obj = { location: LOCATION_CONTEXT_MOBILE };
  const isEligibleForInappropriateConversationWarning = obj.useIsEligibleForInappropriateConversationWarning(obj);
  const safetyAlertsSettingOrDefault = useSafetyAlertsSettingOrDefault.useSafetyAlertsSettingOrDefault();
  const inappropriateConversationWarningsForChannel = useInappropriateConversationWarningsForChannel.useInappropriateConversationWarningsForChannel(channelId);
  useChannelSafetyWarning;
  if (isEligibleForInappropriateConversationWarning) {
    if (safetyAlertsSettingOrDefault) {
      if (0 !== inappropriateConversationWarningsForChannel.length) {
        if (!inappropriateConversationWarningsForChannel.some((item, index) => {
          let tmp2 = item.type === obj.INAPPROPRIATE_CONVERSATION_TIER_1;
          if (!tmp2) {
            let tmp3 = item.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2;
            if (tmp3) {
              tmp3 = null != item.dismiss_timestamp;
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