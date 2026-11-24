// discord_app/modules/user_profile/experiments/UserProfileMobileEditingRefreshExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-11-user-profile-mobile-editing-refresh",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting(
  "modules/user_profile/experiments/UserProfileMobileEditingRefreshExperiment.tsx",
);

export function useIsUserProfileEditingRefreshEnabled(ProfileCustomizationSettingScreenExperimentWrapper) {
  return closure_0.useConfig({ location: ProfileCustomizationSettingScreenExperimentWrapper }).enabled;
}
