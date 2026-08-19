// === Module 10608: useInappropriateConversationSafetyToolsWarningForChannel ===

// Module 10608 (useInappropriateConversationSafetyToolsWarningForChannel)
import obj132 from "obj132" /* 2 */;
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel" /* 10574 */;
import InappropriateConversationExperiment from "InappropriateConversationExperiment" /* 10576 */;
import useSafetyAlertsSettingOrDefault from "useSafetyAlertsSettingOrDefault" /* 10577 */;

const result = obj132.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationSafetyToolsWarningForChannel.tsx");

export const useInappropriateConversationSafetyToolsWarningForChannel = function useInappropriateConversationSafetyToolsWarningForChannel(channelId) {
  const isEligibleForInappropriateConversationWarning = InappropriateConversationExperiment.useIsEligibleForInappropriateConversationWarning({ location: "safety-tools-button" });
  const safetyAlertsSettingOrDefault = useSafetyAlertsSettingOrDefault.useSafetyAlertsSettingOrDefault();
  const inappropriateConversationWarningsForChannel = useInappropriateConversationWarningsForChannel.useInappropriateConversationWarningsForChannel(channelId);
  if (isEligibleForInappropriateConversationWarning) {
    if (safetyAlertsSettingOrDefault) {
      const found = inappropriateConversationWarningsForChannel.filter((item, index) => null != item.dismiss_timestamp);
      if (0 !== found.length) {
        return found.sort((type, type2) => {
          if (type.type > type2.type) {
            let num = 1;
          } else {
            num = -1;
          }
          return num;
        })[0];
      }
    }
  }
};