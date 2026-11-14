// discord_app/modules/game_profile/experiments/GameProfilesServerPreviewExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = { enabled: false };
let closure_0 = ApexExperiment.createApexExperiment({
  name: "2026-10-game-profiles-server-preview",
  kind: "user",
  defaultConfig: obj,
  variations: { 0: obj, 1: { enabled: true } },
});
const result = size.fileFinishedImporting("modules/game_profile/experiments/GameProfilesServerPreviewExperiment.tsx");

export function useIsGameProfilesServerPreviewEnabled(location) {
  return closure_0.useConfig({ location: location.location }).enabled;
}
