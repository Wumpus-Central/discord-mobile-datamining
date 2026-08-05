// discord_app/modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationSafetyToolsWarningForChannel.tsx
import { InappropriateConversationExperiment } from "../SelfModInappropriateConversationExperiment.tsx";
import { useInappropriateConversationWarningsForChannel } from "useInappropriateConversationWarningsForChannel.tsx";
import { useSafetyAlertsSettingOrDefault } from "useSafetyAlertsSettingOrDefault.tsx";
const result = require("useInappropriateConversationWarningsForChannel").fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationSafetyToolsWarningForChannel.tsx");

export const useInappropriateConversationSafetyToolsWarningForChannel = function useInappropriateConversationSafetyToolsWarningForChannel(channelId) {
  const isEligibleForInappropriateConversationWarning = InappropriateConversationExperiment /* InappropriateConversationExperiment */.useIsEligibleForInappropriateConversationWarning({ location: "safety-tools-button" });
  const obj = InappropriateConversationExperiment /* InappropriateConversationExperiment */;
  const safetyAlertsSettingOrDefault = useSafetyAlertsSettingOrDefault /* useSafetyAlertsSettingOrDefault */.useSafetyAlertsSettingOrDefault();
  const obj2 = useSafetyAlertsSettingOrDefault /* useSafetyAlertsSettingOrDefault */;
  const inappropriateConversationWarningsForChannel = useInappropriateConversationWarningsForChannel /* useInappropriateConversationWarningsForChannel */.useInappropriateConversationWarningsForChannel(channelId);
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