// === Module 17292: AgeGroupScreenRowProps ===

// Module 17292 (AgeGroupScreenRowProps)
import util from "util" /* 1113 */;
import _modDef3323 from "module_3323" /* 3323 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 6815 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 6818 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8201 */;
import AgeNoticeSettingsPredicate from "AgeNoticeSettingsPredicate" /* 17246 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupScreenRowProps.tsx");

export const AGE_GROUP_CONFIRM_ROW_PROPS = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3323.SH6Tcv);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3323.rJiO86);
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