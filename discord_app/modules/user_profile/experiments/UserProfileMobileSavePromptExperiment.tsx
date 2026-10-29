// discord_app/modules/user_profile/experiments/UserProfileMobileSavePromptExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = {
  name: "2026-10-user-profile-mobile-save-prompt",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/user_profile/experiments/UserProfileMobileSavePromptExperiment.tsx");

export function getIsUserProfileMobileSavePromptEnabled(location) {
  return config.getConfig({ location }).enabled;
}
