// discord_app/modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationSafetyToolsWarningForChannel.tsx
import SelfModInappropriateConversationExperiment from "../SelfModInappropriateConversationExperiment.tsx";
import useSafetyAlertsSettingOrDefault from "useSafetyAlertsSettingOrDefault.tsx";
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationSafetyToolsWarningForChannel.tsx",
);

export const useInappropriateConversationSafetyToolsWarningForChannel =
  function useInappropriateConversationSafetyToolsWarningForChannel(channelId) {
    const isEligibleForInappropriateConversationWarning =
      SelfModInappropriateConversationExperiment.useIsEligibleForInappropriateConversationWarning({
        location: "safety-tools-button",
      });
    const safetyAlertsSettingOrDefault = useSafetyAlertsSettingOrDefault.useSafetyAlertsSettingOrDefault();
    const inappropriateConversationWarningsForChannel =
      useInappropriateConversationWarningsForChannel.useInappropriateConversationWarningsForChannel(channelId);
    if (isEligibleForInappropriateConversationWarning) {
      if (safetyAlertsSettingOrDefault) {
        const found = inappropriateConversationWarningsForChannel.filter(
          (dismiss_timestamp) => null != dismiss_timestamp.dismiss_timestamp,
        );
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
