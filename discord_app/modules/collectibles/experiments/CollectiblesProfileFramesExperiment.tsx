import ApexExperiment from "ApexExperiment";

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-03-collectibles-profile-frames", kind: "user", defaultConfig: { enableProfileFrames: false }, variations: { 0: { enableProfileFrames: false }, 1: { enableProfileFrames: true } } });
const result = require("set").fileFinishedImporting("modules/collectibles/experiments/CollectiblesProfileFramesExperiment.tsx");

export default apexExperiment;
export const useIsProfileFramesEnabled = function useIsProfileFramesEnabled(location) {
  return apexExperiment.useConfig({ location }).enableProfileFrames;
};