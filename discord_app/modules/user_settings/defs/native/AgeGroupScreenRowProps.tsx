// discord_app/modules/user_settings/defs/native/AgeGroupScreenRowProps.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef3045 from "../../../age_assurance/AgeAssurance.messages.js";
import AgeVerificationUtils from "../../../age_assurance/AgeVerificationUtils.tsx";
import AgeVerificationActionCreatorsDefault from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import TinyBroncoSettingsPredicate from "../../../tiny_bronco/native/TinyBroncoSettingsPredicate.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let ReactCompilerGating = ReactCompilerGating_mod;
let closure_3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let showAssignedAgeGroupSettings = AgeVerificationUtils.useShowAssignedAgeGroupSettings();
      TinyBroncoSettingsPredicate;
      if (showAssignedAgeGroupSettings) {
        showAssignedAgeGroupSettings = tmp3 === arg0;
      }
      return showAssignedAgeGroupSettings;
    }
  : (arg0) => {
      let showAssignedAgeGroupSettings = AgeVerificationUtils.useShowAssignedAgeGroupSettings();
      TinyBroncoSettingsPredicate;
      if (showAssignedAgeGroupSettings) {
        showAssignedAgeGroupSettings = tmp3 === arg0;
      }
      return showAssignedAgeGroupSettings;
    };
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result2 = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupScreenRowProps.tsx");

export const AGE_GROUP_CONFIRM_ROW_PROPS = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef3045.SH6Tcv);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef3045.rJiO86);
  },
  onPress: function onAgeGroupConfirmPress() {
    const obj = AgeVerificationActionCreatorsDefault;
    const result = obj.showAgeVerificationGetStartedModal({
      entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP,
    });
  },
  withArrow: true,
};
export const useShowAssignedAdultAgeGroupRow = () => closure_3(false);
export const useShowAccountStatusAgeGroupRow = () => closure_3(true);
