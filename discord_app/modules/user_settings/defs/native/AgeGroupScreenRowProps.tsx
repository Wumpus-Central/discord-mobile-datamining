// discord_app/modules/user_settings/defs/native/AgeGroupScreenRowProps.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef2946 from "../../../age_assurance/AgeAssurance.messages.js";
import AgeVerificationUtils from "../../../age_assurance/AgeVerificationUtils.tsx";
import AgeVerificationActionCreatorsDefault from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import AgeVerificationAnalyticsUtils from "../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import TinyBroncoSettingsPredicate from "../../../tiny_bronco/native/TinyBroncoSettingsPredicate.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/user_settings/defs/native/AgeGroupScreenRowProps.tsx");

export const AGE_GROUP_CONFIRM_ROW_PROPS = {
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2946.SH6Tcv);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(_modDef2946.rJiO86);
  },
  onPress: function onAgeGroupConfirmPress() {
    const obj = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.ACCOUNT_AGE_GROUP };
    const result = obj.showAgeVerificationGetStartedModal(obj);
  },
  withArrow: true,
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
