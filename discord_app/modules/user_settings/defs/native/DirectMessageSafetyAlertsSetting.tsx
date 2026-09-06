// discord_app/modules/user_settings/defs/native/DirectMessageSafetyAlertsSetting.tsx
import util from "../../../../intl/index.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SelfModInappropriateConversationExperiment from "../../../self_mod/inappropriate_conversation/SelfModInappropriateConversationExperiment.tsx";
import useSafetyAlertsSettingOrDefault from "../../../self_mod/inappropriate_conversation/hooks/useSafetyAlertsSettingOrDefault.tsx";
import InappropriateConversationsDefaultOn from "../../../self_mod/inappropriate_conversation/InappropriateConversationsDefaultOn.tsx";
import useUserIsConsideredAdultDefault from "../../../parent_tools/hooks/useUserIsConsideredAdult.tsx";
import updateDmSafetyAlertsSetting from "../../../self_mod/inappropriate_conversation/updateDmSafetyAlertsSetting.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
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
  usePredicate: function useHasDmSafetyAlertsSetting() {
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
