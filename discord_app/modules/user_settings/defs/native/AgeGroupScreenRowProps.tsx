// === Module 14817: AgeGroupScreenRowProps ===

// Module 14817 (AgeGroupScreenRowProps)
import util from "util" /* 1126 */;
import _modDef3117 from "module_3117" /* 3117 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5905 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 5915 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 7492 */;
import TinyBroncoSettingsPredicate from "TinyBroncoSettingsPredicate" /* 14771 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
let closure_3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAgeGroupRowPredicate(arg0) {
  let showAssignedAgeGroupSettings = AgeVerificationUtils.useShowAssignedAgeGroupSettings();
  TinyBroncoSettingsPredicate;
  if (showAssignedAgeGroupSettings) {
    showAssignedAgeGroupSettings = tmp3 === arg0;
  }
  return showAssignedAgeGroupSettings;
}) : (function useAgeGroupRowPredicate(arg0) {
  let showAssignedAgeGroupSettings = AgeVerificationUtils.useShowAssignedAgeGroupSettings();
  TinyBroncoSettingsPredicate;
  if (showAssignedAgeGroupSettings) {
    showAssignedAgeGroupSettings = tmp3 === arg0;
  }
  return showAssignedAgeGroupSettings;
});
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result2 = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupScreenRowProps.tsx");

export const AGE_GROUP_CONFIRM_ROW_PROPS = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3117.SH6Tcv);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3117.rJiO86);
  },
  onPress: function onAgeGroupConfirmPress() {
    const obj = AgeVerificationActionCreatorsDefault;
    const result = obj.showAgeVerificationGetStartedModal({ entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP });
  },
  withArrow: true
};
export const useShowAssignedAdultAgeGroupRow = function useShowAssignedAdultAgeGroupRow() {
  return closure_3(false);
};
export const useShowAccountStatusAgeGroupRow = function useShowAccountStatusAgeGroupRow() {
  return closure_3(true);
};