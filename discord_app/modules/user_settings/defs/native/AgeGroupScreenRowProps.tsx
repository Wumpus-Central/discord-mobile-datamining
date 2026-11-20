// === Module 15904: AgeGroupScreenRowProps ===

// Module 15904 (AgeGroupScreenRowProps)
import util from "util" /* 1112 */;
import _modDef3345 from "module_3345" /* 3345 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6292 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6295 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7673 */;
import AgeNoticeSettingsPredicate from "AgeNoticeSettingsPredicate" /* 15858 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupScreenRowProps.tsx");

export const AGE_GROUP_CONFIRM_ROW_PROPS = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3345.SH6Tcv);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3345.rJiO86);
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