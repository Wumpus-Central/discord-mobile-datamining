// discord_app/modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationBannerForChannel.tsx
import c from "../../../../../_runtime/00576_c.js";
import ChannelSafetyWarningsStore from "../../ChannelSafetyWarningsStore.tsx";
import useChannelSafetyWarning from "../../hooks/useChannelSafetyWarning.tsx";
import useInappropriateConversationWarningsForChannel from "useInappropriateConversationWarningsForChannel.tsx";
import SelfModInappropriateConversationExperiment from "../SelfModInappropriateConversationExperiment.tsx";
import useSafetyAlertsSettingOrDefault from "useSafetyAlertsSettingOrDefault.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const SafetyWarningTypes = ChannelSafetyWarningsStore.SafetyWarningTypes;
const result = size.fileFinishedImporting(
  "modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationBannerForChannel.tsx",
);

export const useInappropriateConversationBannerForChannel = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, location) => {
      const cResult = c.c(2);
      if (cResult[0] !== location) {
        const obj2 = { location };
        cResult[0] = location;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const isEligibleForInappropriateConversationWarning =
        SelfModInappropriateConversationExperiment.useIsEligibleForInappropriateConversationWarning(tmp4);
      const tmpResult = SelfModInappropriateConversationExperiment;
      const safetyAlertsSettingOrDefault = useSafetyAlertsSettingOrDefault.useSafetyAlertsSettingOrDefault();
      const tmpResult4 = useSafetyAlertsSettingOrDefault;
      const inappropriateConversationWarningsForChannel =
        useInappropriateConversationWarningsForChannel.useInappropriateConversationWarningsForChannel(arg0);
      useChannelSafetyWarning;
      if (isEligibleForInappropriateConversationWarning) {
        if (safetyAlertsSettingOrDefault) {
          if (0 !== inappropriateConversationWarningsForChannel.length) {
            if (
              !inappropriateConversationWarningsForChannel.some((type) => {
                let tmp2 = type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1;
                if (!tmp2) {
                  let tmp3 = type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2;
                  if (tmp3) {
                    tmp3 = null != type.dismiss_timestamp;
                  }
                  tmp2 = tmp3;
                }
                return tmp2;
              })
            ) {
              return tmp8;
            }
          }
        }
      }
      const tmpResult5 = useInappropriateConversationWarningsForChannel;
    }
  : (arg0, location) => {
      const isEligibleForInappropriateConversationWarning =
        SelfModInappropriateConversationExperiment.useIsEligibleForInappropriateConversationWarning({ location });
      const obj2 = { location };
      const safetyAlertsSettingOrDefault = useSafetyAlertsSettingOrDefault.useSafetyAlertsSettingOrDefault();
      const inappropriateConversationWarningsForChannel =
        useInappropriateConversationWarningsForChannel.useInappropriateConversationWarningsForChannel(arg0);
      useChannelSafetyWarning;
      if (isEligibleForInappropriateConversationWarning) {
        if (safetyAlertsSettingOrDefault) {
          if (0 !== inappropriateConversationWarningsForChannel.length) {
            if (
              !inappropriateConversationWarningsForChannel.some((type) => {
                let tmp2 = type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1;
                if (!tmp2) {
                  let tmp3 = type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2;
                  if (tmp3) {
                    tmp3 = null != type.dismiss_timestamp;
                  }
                  tmp2 = tmp3;
                }
                return tmp2;
              })
            ) {
              return tmp4;
            }
          }
        }
      }
    };
