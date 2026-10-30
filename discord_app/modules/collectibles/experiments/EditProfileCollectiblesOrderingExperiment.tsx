// discord_app/modules/collectibles/experiments/EditProfileCollectiblesOrderingExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_0 = ApexExperiment.createApexExperiment({
  name: "2026-09-edit-profile-collectibles-ordering",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = size.fileFinishedImporting(
  "modules/collectibles/experiments/EditProfileCollectiblesOrderingExperiment.tsx",
);

export function useIsEditProfileCollectiblesOrderingEnabled(collectibles_picker) {
  return closure_0.useConfig({ location: collectibles_picker }).enabled;
}
