// discord_app/modules/user_settings/defs/native/DirectMessageSafetyAlertsSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SelfModInappropriateConversationExperiment from "../../../self_mod/inappropriate_conversation/SelfModInappropriateConversationExperiment.tsx";
import useSafetyAlertsSettingOrDefault from "../../../self_mod/inappropriate_conversation/hooks/useSafetyAlertsSettingOrDefault.tsx";
import InappropriateConversationsDefaultOn from "../../../self_mod/inappropriate_conversation/InappropriateConversationsDefaultOn.tsx";
import useUserIsConsideredAdultDefault from "../../../parent_tools/hooks/useUserIsConsideredAdult.tsx";
import updateDmSafetyAlertsSetting from "../../../self_mod/inappropriate_conversation/updateDmSafetyAlertsSetting.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useHasDmSafetyAlertsSetting() {
      const cResult = c.c(2);
      let flag = useUserIsConsideredAdultDefault();
      if (flag == null) {
        flag = true;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "user_settings_mobile_redesign" };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      const isEligibleForInappropriateConversationWarning =
        SelfModInappropriateConversationExperiment.useIsEligibleForInappropriateConversationWarning(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { location: "user_settings_mobile_redesign" };
        cResult[1] = obj3;
        let tmp6 = obj3;
      } else {
        tmp6 = cResult[1];
      }
      const tmpResult = SelfModInappropriateConversationExperiment;
      let tmp8 = !flag;
      const isEligibleForInappropriateConversationDefaultOn =
        InappropriateConversationsDefaultOn.useIsEligibleForInappropriateConversationDefaultOn(tmp6);
      if (!flag) {
        tmp8 = isEligibleForInappropriateConversationWarning;
      }
      if (tmp8) {
        tmp8 = !isEligibleForInappropriateConversationDefaultOn;
      }
      return tmp8;
    }
  : function useHasDmSafetyAlertsSetting() {
      let flag = useUserIsConsideredAdultDefault();
      if (flag == null) {
        flag = true;
      }
      const isEligibleForInappropriateConversationWarning =
        SelfModInappropriateConversationExperiment.useIsEligibleForInappropriateConversationWarning({
          location: "user_settings_mobile_redesign",
        });
      let tmp4 = !flag;
      const isEligibleForInappropriateConversationDefaultOn =
        InappropriateConversationsDefaultOn.useIsEligibleForInappropriateConversationDefaultOn({
          location: "user_settings_mobile_redesign",
        });
      if (!flag) {
        tmp4 = isEligibleForInappropriateConversationWarning;
      }
      if (tmp4) {
        tmp4 = !isEligibleForInappropriateConversationDefaultOn;
      }
      return tmp4;
    };
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.qFsx5q);
  },
  parent() {
    return MobileUserSettings.CONTENT_AND_SOCIAL;
  },
  useValue: useSafetyAlertsSettingOrDefault.useSafetyAlertsSettingOrDefault,
  onValueChange: updateDmSafetyAlertsSetting.updateDmSafetyAlertsSetting,
  usePredicate: ReactCompilerGating.isReactCompilerEnabled()
    ? function useHasDmSafetyAlertsSetting() {
        const cResult = c.c(2);
        let flag = useUserIsConsideredAdultDefault();
        if (flag == null) {
          flag = true;
        }
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { location: "user_settings_mobile_redesign" };
          cResult[0] = obj2;
          let first = obj2;
        } else {
          first = cResult[0];
        }
        const isEligibleForInappropriateConversationWarning =
          SelfModInappropriateConversationExperiment.useIsEligibleForInappropriateConversationWarning(first);
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { location: "user_settings_mobile_redesign" };
          cResult[1] = obj3;
          let tmp6 = obj3;
        } else {
          tmp6 = cResult[1];
        }
        const tmpResult = SelfModInappropriateConversationExperiment;
        let tmp8 = !flag;
        const isEligibleForInappropriateConversationDefaultOn =
          InappropriateConversationsDefaultOn.useIsEligibleForInappropriateConversationDefaultOn(tmp6);
        if (!flag) {
          tmp8 = isEligibleForInappropriateConversationWarning;
        }
        if (tmp8) {
          tmp8 = !isEligibleForInappropriateConversationDefaultOn;
        }
        return tmp8;
      }
    : function useHasDmSafetyAlertsSetting() {
        let flag = useUserIsConsideredAdultDefault();
        if (flag == null) {
          flag = true;
        }
        const isEligibleForInappropriateConversationWarning =
          SelfModInappropriateConversationExperiment.useIsEligibleForInappropriateConversationWarning({
            location: "user_settings_mobile_redesign",
          });
        let tmp4 = !flag;
        const isEligibleForInappropriateConversationDefaultOn =
          InappropriateConversationsDefaultOn.useIsEligibleForInappropriateConversationDefaultOn({
            location: "user_settings_mobile_redesign",
          });
        if (!flag) {
          tmp4 = isEligibleForInappropriateConversationWarning;
        }
        if (tmp4) {
          tmp4 = !isEligibleForInappropriateConversationDefaultOn;
        }
        return tmp4;
      },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DirectMessageSafetyAlertsSetting.tsx");

export default toggle;
