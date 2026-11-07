// === Module 16936: AgeGroupScreenRowProps ===

// Module 16936 (AgeGroupScreenRowProps)
import util from "util" /* 1113 */;
import _modDef3252 from "module_3252" /* 3252 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6781 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6784 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8024 */;
import AgeNoticeSettingsPredicate from "AgeNoticeSettingsPredicate" /* 16890 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupScreenRowProps.tsx");

export const AGE_GROUP_CONFIRM_ROW_PROPS = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3252.SH6Tcv);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3252.rJiO86);
  },
  onPress: function onAgeGroupConfirmPress() {
    const obj = AgeVerificationActionCreatorsDefault;
    const result = obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP });
  },
  withArrow: true
};
export function useShowAssignedAdultAgeGroupRow() {
  let showAssignedAgeGroupSettings = AgeVerificationUtils.useShowAssignedAgeGroupSettings();
  AgeNoticeSettingsPredicate;
  if (showAssignedAgeGroupSettings) {
    showAssignedAgeGroupSettings = tmp3 === false;
  }
  return showAssignedAgeGroupSettings;
}
export function useShowAccountStatusAgeGroupRow() {
  let showAssignedAgeGroupSettings = AgeVerificationUtils.useShowAssignedAgeGroupSettings();
  AgeNoticeSettingsPredicate;
  if (showAssignedAgeGroupSettings) {
    showAssignedAgeGroupSettings = tmp3 === true;
  }
  return showAssignedAgeGroupSettings;
}