// discord_app/modules/activity_privacy/ActivityPrivacyMatchingExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_0 = ApexExperiment.createApexExperiment({
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
  const config = closure_0.useConfig({ location: ActivityPrivacyDefaultSharingSetting });
  return true;
};
export const getIsInActivityPrivacyUpsellExperiment = function getIsInActivityPrivacyUpsellExperiment(
  ActivityPrivacyDefaultSharingSetting,
) {
  const config = closure_0.getConfig({ location: ActivityPrivacyDefaultSharingSetting });
  return true;
};
