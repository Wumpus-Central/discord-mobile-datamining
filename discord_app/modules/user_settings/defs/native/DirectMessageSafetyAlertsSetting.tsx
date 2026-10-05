// discord_app/modules/user_settings/defs/native/DirectMessageSafetyAlertsSetting.tsx
import react from "../../../../../_runtime/00576_react.js";
import intl2 from "../../../../intl/index.native.tsx";
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
  ? () => {
      let first;
      let tmp6;
      const obj = react;
      const cResult = obj.c(2);
      let flag = useUserIsConsideredAdultDefault();
      if (flag == null) {
        flag = true;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "user_settings_mobile_redesign" };
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      const tmpResult = SelfModInappropriateConversationExperiment;
      const isEligibleForInappropriateConversationWarning =
        tmpResult.useIsEligibleForInappropriateConversationWarning(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { location: "user_settings_mobile_redesign" };
        cResult[1] = obj3;
        tmp6 = obj3;
      } else {
        tmp6 = cResult[1];
      }
      let tmp8 = !flag;
      const tmpResult2 = InappropriateConversationsDefaultOn;
      const isEligibleForInappropriateConversationDefaultOn =
        tmpResult2.useIsEligibleForInappropriateConversationDefaultOn(tmp6);
      if (!flag) {
        tmp8 = isEligibleForInappropriateConversationWarning;
      }
      if (tmp8) {
        tmp8 = !isEligibleForInappropriateConversationDefaultOn;
      }
      return tmp8;
    }
  : () => {
      let flag = useUserIsConsideredAdultDefault();
      if (flag == null) {
        flag = true;
      }
      const obj = SelfModInappropriateConversationExperiment;
      const isEligibleForInappropriateConversationWarning = obj.useIsEligibleForInappropriateConversationWarning({
        location: "user_settings_mobile_redesign",
      });
      let tmp4 = !flag;
      const obj2 = InappropriateConversationsDefaultOn;
      const isEligibleForInappropriateConversationDefaultOn = obj2.useIsEligibleForInappropriateConversationDefaultOn({
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
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.qFsx5q);
  },
  parent() {
    return MobileUserSettings.CONTENT_AND_SOCIAL;
  },
  useValue: useSafetyAlertsSettingOrDefault.useSafetyAlertsSettingOrDefault,
  onValueChange: updateDmSafetyAlertsSetting.updateDmSafetyAlertsSetting,
  usePredicate: tmp2,
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DirectMessageSafetyAlertsSetting.tsx");

export default toggle;
