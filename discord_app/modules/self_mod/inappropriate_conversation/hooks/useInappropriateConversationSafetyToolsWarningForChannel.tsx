// discord_app/modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationSafetyToolsWarningForChannel.tsx
const result = require("useInappropriateConversationWarningsForChannel").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationSafetyToolsWarningForChannel.tsx");

export const useInappropriateConversationSafetyToolsWarningForChannel = function useInappropriateConversationSafetyToolsWarningForChannel(channelId) {
  const isEligibleForInappropriateConversationWarning = require("../SelfModInappropriateConversationExperiment.tsx") /* InappropriateConversationExperiment */.useIsEligibleForInappropriateConversationWarning({ location: "safety-tools-button" });
  const obj = require("../SelfModInappropriateConversationExperiment.tsx") /* InappropriateConversationExperiment */;
  const safetyAlertsSettingOrDefault = require("useSafetyAlertsSettingOrDefault.tsx") /* useSafetyAlertsSettingOrDefault */.useSafetyAlertsSettingOrDefault();
  const obj2 = require("useSafetyAlertsSettingOrDefault.tsx") /* useSafetyAlertsSettingOrDefault */;
  const inappropriateConversationWarningsForChannel = require("useInappropriateConversationWarningsForChannel.tsx") /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId);
  if (isEligibleForInappropriateConversationWarning) {
    if (safetyAlertsSettingOrDefault) {
      const found = inappropriateConversationWarningsForChannel.filter((dismiss_timestamp) => null != dismiss_timestamp.dismiss_timestamp);
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