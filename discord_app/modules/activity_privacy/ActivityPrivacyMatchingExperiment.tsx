// discord_app/modules/activity_privacy/ActivityPrivacyMatchingExperiment.tsx
import PrivateProfilesExperiment from "../user_profile/PrivateProfilesExperiment.tsx";
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_2 = ApexExperiment.createApexExperiment({
  name: "2026-02-activity-privacy-matching",
  kind: "user",
  defaultConfig: { copyChanges: false, upsell: false },
  variations: {
    0: { copyChanges: false, upsell: false },
    1: { copyChanges: true, upsell: false },
    2: { copyChanges: true, upsell: true },
  },
});
const result = size.fileFinishedImporting("modules/activity_privacy/ActivityPrivacyMatchingExperiment.tsx");

export const useIsInActivityPrivacyCopyExperiment = function useIsInActivityPrivacyCopyExperiment(
  ActivityPrivacyDefaultSharingSetting,
) {
  let obj = PrivateProfilesExperiment;
  let copyChanges = obj.useIsInPrivateProfilesExperiment(ActivityPrivacyDefaultSharingSetting);
  obj = { location: ActivityPrivacyDefaultSharingSetting };
  if (!copyChanges) {
    copyChanges = closure_2.useConfig(obj).copyChanges;
  }
  return copyChanges;
};
export const getIsInActivityPrivacyUpsellExperiment = function getIsInActivityPrivacyUpsellExperiment(
  ActivityPrivacyDefaultSharingSetting,
) {
  let obj = PrivateProfilesExperiment;
  let upsell = obj.getIsInPrivateProfilesExperiment(ActivityPrivacyDefaultSharingSetting);
  if (!upsell) {
    obj = { location: ActivityPrivacyDefaultSharingSetting };
    upsell = closure_2.getConfig(obj).upsell;
  }
  return upsell;
};
