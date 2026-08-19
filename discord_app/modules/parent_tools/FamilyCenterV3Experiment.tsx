// discord_app/modules/parent_tools/FamilyCenterV3Experiment.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ApexExperiment from "../experiments/apex/index.tsx";

const apexExperiment = ApexExperiment.createApexExperiment({ kind: "user", name: "2026-01-family-center-v3", defaultConfig: { enabled: false }, variations: { 0: { enabled: false }, 1: { enabled: true } } });
const result = obj132.fileFinishedImporting("modules/parent_tools/FamilyCenterV3Experiment.tsx");

export default apexExperiment;
export const getIsFamilyCenterV3Enabled = function getIsFamilyCenterV3Enabled(location) {
  return apexExperiment.getConfig({ location: location.location }).enabled;
};
export const useIsFamilyCenterV3Enabled = function useIsFamilyCenterV3Enabled(location) {
  return apexExperiment.useConfig({ location: location.location }).enabled;
};