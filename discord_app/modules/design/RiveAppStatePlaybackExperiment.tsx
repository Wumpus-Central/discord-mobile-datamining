// discord_app/modules/design/RiveAppStatePlaybackExperiment.tsx
import ApexExperiment from "../experiments/apex/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  name: "2026-06-rive-app-state-playback",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: null,
};
obj = { 1: null };
obj[1] = { enabled: true };
obj.variations = obj;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/design/RiveAppStatePlaybackExperiment.tsx");

export default apexExperiment;
export const useRiveAppStatePlaybackExperiment = function useRiveAppStatePlaybackExperiment(AppContainer) {
  return apexExperiment.useConfig({ location: AppContainer }).enabled;
};
