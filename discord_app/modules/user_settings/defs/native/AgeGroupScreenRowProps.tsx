// === Module 14265: AgeGroupScreenRowProps ===

// Module 14265 (AgeGroupScreenRowProps)
import util from "util" /* 1115 */;
import _modDef3038 from "module_3038" /* 3038 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5041 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7851 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 7853 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14219 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupScreenRowProps.tsx");

export const AGE_GROUP_CONFIRM_ROW_PROPS = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3038.SH6Tcv);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3038.rJiO86);
  },
  onPress: function onAgeGroupConfirmPress() {
    const obj = AgeVerificationActionCreatorsDefault;
    const result = obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP });
  },
  withArrow: true
};
export const useShowAssignedAdultAgeGroupRow = function useShowAssignedAdultAgeGroupRow() {
  let showAssignedAgeGroupSettings = AgeVerificationUtils.useShowAssignedAgeGroupSettings();
  TinyBroncoSettingsPredicate;
  if (showAssignedAgeGroupSettings) {
    showAssignedAgeGroupSettings = tmp3 === false;
  }
  return showAssignedAgeGroupSettings;
};
export const useShowAccountStatusAgeGroupRow = function useShowAccountStatusAgeGroupRow() {
  let showAssignedAgeGroupSettings = AgeVerificationUtils.useShowAssignedAgeGroupSettings();
  TinyBroncoSettingsPredicate;
  if (showAssignedAgeGroupSettings) {
    showAssignedAgeGroupSettings = tmp3 === true;
  }
  return showAssignedAgeGroupSettings;
};