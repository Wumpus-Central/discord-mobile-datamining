// discord_app/modules/user_profile/experiments/UserProfileRecentActivityMobileExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = { name: "2026-09-recent-activity-mobile", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting(
  "modules/user_profile/experiments/UserProfileRecentActivityMobileExperiment.tsx",
);

export const useIsRecentActivityMobileEnabled = function useIsRecentActivityMobileEnabled(UserProfileContent) {
  return closure_0.useConfig({ location: UserProfileContent }).enabled;
};
