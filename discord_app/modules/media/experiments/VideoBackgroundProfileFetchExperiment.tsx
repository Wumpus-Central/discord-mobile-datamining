// === Module 8252: useIsVideoBackgroundProfileFetchEnabled ===

// Module 8252 (useIsVideoBackgroundProfileFetchEnabled)
import set from "set" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1433 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-09-video-background-profile-fetch", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = set.fileFinishedImporting("modules/media/experiments/VideoBackgroundProfileFetchExperiment.tsx");

export const useIsVideoBackgroundProfileFetchEnabled = function useIsVideoBackgroundProfileFetchEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
};