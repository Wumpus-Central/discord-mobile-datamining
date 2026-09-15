// === Module 14854: AgeGroupScreenRowProps ===

// Module 14854 (AgeGroupScreenRowProps)
import util from "util" /* 1115 */;
import _modDef2947 from "module_2947" /* 2947 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 4852 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8532 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8534 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14779 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupScreenRowProps.tsx");

export const AGE_GROUP_CONFIRM_ROW_PROPS = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2947.SH6Tcv);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2947.rJiO86);
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