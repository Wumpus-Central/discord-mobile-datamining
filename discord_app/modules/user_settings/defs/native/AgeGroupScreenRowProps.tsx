// === Module 16865: AgeGroupScreenRowProps ===

// Module 16865 (AgeGroupScreenRowProps)
import util from "util" /* 1113 */;
import _modDef3223 from "module_3223" /* 3223 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6861 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6864 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8095 */;
import AgeNoticeSettingsPredicate from "AgeNoticeSettingsPredicate" /* 16819 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupScreenRowProps.tsx");

export const AGE_GROUP_CONFIRM_ROW_PROPS = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3223.SH6Tcv);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3223.rJiO86);
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