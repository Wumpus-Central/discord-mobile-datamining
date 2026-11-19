// discord_app/modules/user_profile/experiments/ProfileEditSheetNitroUpdatesExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_0 = ApexExperiment.createApexExperiment({
  name: "2026-11-profile-edit-sheet-nitro-updates",
  kind: "user",
  defaultConfig: { enabled: false, skipRoadblock: false },
  variations: {
    0: { enabled: false, skipRoadblock: false },
    1: { enabled: true, skipRoadblock: false },
    2: { enabled: true, skipRoadblock: true },
  },
});
const result = size.fileFinishedImporting(
  "modules/user_profile/experiments/ProfileEditSheetNitroUpdatesExperiment.tsx",
);

export function useProfileEditSheetNitroUpdatesConfig(change_avatar_action_sheet_native) {
  return closure_0.useConfig({ location: change_avatar_action_sheet_native });
}
