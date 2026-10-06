// discord_app/modules/user_settings/defs/native/AgeGroupScreenRowProps.tsx
import intl2 from "../../../../intl/index.native.tsx";
import _modDef3073 from "../../../age_assurance/AgeAssurance.messages.js";
import AgeVerificationUtils from "../../../age_assurance/AgeVerificationUtils.tsx";
import AgeVerificationActionCreatorsDefault from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import TinyBroncoSettingsPredicate from "../../../tiny_bronco/native/TinyBroncoSettingsPredicate.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3073.SH6Tcv);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3073.rJiO86);
  },
  onPress: function onAgeGroupConfirmPress() {
    const obj = AgeVerificationActionCreatorsDefault;
    const obj2 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj2);
  },
  withArrow: true,
};
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const obj = AgeVerificationUtils;
      let showAssignedAgeGroupSettings = obj.useShowAssignedAgeGroupSettings();
      TinyBroncoSettingsPredicate;
      if (showAssignedAgeGroupSettings) {
        showAssignedAgeGroupSettings = tmp3 === arg0;
      }
      return showAssignedAgeGroupSettings;
    }
  : (arg0) => {
      const obj = AgeVerificationUtils;
      let showAssignedAgeGroupSettings = obj.useShowAssignedAgeGroupSettings();
      TinyBroncoSettingsPredicate;
      if (showAssignedAgeGroupSettings) {
        showAssignedAgeGroupSettings = tmp3 === arg0;
      }
      return showAssignedAgeGroupSettings;
    };
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const result2 = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupScreenRowProps.tsx");

export const AGE_GROUP_CONFIRM_ROW_PROPS = obj;
export const useShowAssignedAdultAgeGroupRow = () => closure_3(false);
export const useShowAccountStatusAgeGroupRow = () => closure_3(true);
