// discord_app/modules/user_profile/experiments/UserProfileMobileGameCollectionExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = { name: "2026-07-mobile-game-collection", kind: "user", defaultConfig: { enabled: false }, variations: null };
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
let closure_0 = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting(
  "modules/user_profile/experiments/UserProfileMobileGameCollectionExperiment.tsx",
);

export const useIsMobileGameCollectionExperimentEnabled = function useIsMobileGameCollectionExperimentEnabled(
  UserProfileWidgetsBoard,
) {
  return closure_0.useConfig({ location: UserProfileWidgetsBoard }).enabled;
};
