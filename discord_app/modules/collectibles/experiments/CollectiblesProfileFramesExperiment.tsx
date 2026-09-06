// discord_app/modules/collectibles/experiments/CollectiblesProfileFramesExperiment.tsx
import ApexExperiment from "../../experiments/apex/index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-03-collectibles-profile-frames",
  kind: "user",
  defaultConfig: { enableProfileFrames: false },
  variations: { 0: { enableProfileFrames: false }, 1: { enableProfileFrames: true } },
});
const result = size.fileFinishedImporting("modules/collectibles/experiments/CollectiblesProfileFramesExperiment.tsx");

export default apexExperiment;
export const useIsProfileFramesEnabled = function useIsProfileFramesEnabled(location) {
  return apexExperiment.useConfig({ location }).enableProfileFrames;
};
