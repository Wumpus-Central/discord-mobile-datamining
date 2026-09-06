// discord_app/modules/media/experiments/VideoBackgroundProfileFetchExperiment.tsx
import set from "../../../../_runtime/00002_set.js";
import ApexExperiment from "../../experiments/apex/index.tsx";

let closure_0 = ApexExperiment.createApexExperiment({
  name: "2026-09-video-background-profile-fetch",
  kind: "user",
  defaultConfig: { enabled: false },
  variations: { 0: { enabled: false }, 1: { enabled: true } },
});
const result = set.fileFinishedImporting("modules/media/experiments/VideoBackgroundProfileFetchExperiment.tsx");

export const useIsVideoBackgroundProfileFetchEnabled = function useIsVideoBackgroundProfileFetchEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};
