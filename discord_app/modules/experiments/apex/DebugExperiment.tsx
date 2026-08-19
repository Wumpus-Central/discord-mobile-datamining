// === Module 13240: apexExperiment ===

// Module 13240 (apexExperiment)
import obj132 from "obj132" /* 2 */;
import ApexExperiment from "ApexExperiment" /* 1472 */;

const obj = { 1: null, 2: {} };
obj[2] = {};
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-03-debug-experiment", kind: "user", defaultConfig: {}, variations: obj });
const result = obj132.fileFinishedImporting("modules/experiments/apex/DebugExperiment.tsx");

export default apexExperiment;
export const DebugExperiment = apexExperiment;
export const useDebugExperiment = function useDebugExperiment() {
  return apexExperiment.useConfig({ location: "debug_experiment" });
};