// === Module 17045: DirectMessageSafetyAlertsSetting ===

// Module 17045 (DirectMessageSafetyAlertsSetting)
import util from "util" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8503 */;
import SelfModInappropriateConversationExperiment from "SelfModInappropriateConversationExperiment" /* 11403 */;
import useSafetyAlertsSettingOrDefault from "useSafetyAlertsSettingOrDefault" /* 11404 */;
import InappropriateConversationsDefaultOn from "InappropriateConversationsDefaultOn" /* 11405 */;
import useUserIsConsideredAdultDefault from "useUserIsConsideredAdult" /* 13537 */;
import updateDmSafetyAlertsSetting from "updateDmSafetyAlertsSetting" /* 17046 */;
import SettingBuilders from "SettingBuilders" /* 11685 */;
import size from "module_2" /* 2 */;

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
    const isEligibleForInappropriateConversationWarning = SelfModInappropriateConversationExperiment.useIsEligibleForInappropriateConversationWarning({ location: "user_settings_mobile_redesign" });
    let tmp4 = !flag;
    const isEligibleForInappropriateConversationDefaultOn = InappropriateConversationsDefaultOn.useIsEligibleForInappropriateConversationDefaultOn({ location: "user_settings_mobile_redesign" });
    if (!flag) {
      tmp4 = isEligibleForInappropriateConversationWarning;
    }
    if (tmp4) {
      tmp4 = !isEligibleForInappropriateConversationDefaultOn;
    }
    return tmp4;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DirectMessageSafetyAlertsSetting.tsx");

export default toggle;