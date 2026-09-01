// discord_app/modules/collectibles/experiments/CollectiblesProfileFramesExperiment.tsx
import set from "../../../../_runtime/00002_set.js";
import ApexExperiment from "../../experiments/apex/index.tsx";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-03-collectibles-profile-frames",
  kind: "user",
  defaultConfig: { enableProfileFrames: false },
  variations: { 0: { enableProfileFrames: false }, 1: { enableProfileFrames: true } },
});
const result = set.fileFinishedImporting("modules/collectibles/experiments/CollectiblesProfileFramesExperiment.tsx");

export default apexExperiment;
export const useIsProfileFramesEnabled = function useIsProfileFramesEnabled(location) {
  return apexExperiment.useConfig({ location }).enableProfileFrames;
};
