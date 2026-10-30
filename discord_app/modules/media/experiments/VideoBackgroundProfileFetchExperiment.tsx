// === Module 8817: VideoBackgroundProfileFetchExperiment ===

// Module 8817 (VideoBackgroundProfileFetchExperiment)
import ApexExperiment from "ApexExperiment" /* 1448 */;
import size from "module_2" /* 2 */;

let closure_0 = ApexExperiment.createApexExperiment({ name: "2026-09-video-background-profile-fetch", kind: "user", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = size.fileFinishedImporting("modules/media/experiments/VideoBackgroundProfileFetchExperiment.tsx");

export function useIsVideoBackgroundProfileFetchEnabled(location) {
  return closure_0.useConfig({ location }).enabled;
}