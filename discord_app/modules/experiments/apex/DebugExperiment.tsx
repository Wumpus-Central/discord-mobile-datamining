// discord_app/modules/experiments/apex/DebugExperiment.tsx
import set from "../../../../_runtime/00002_set.js";
import ApexExperiment from "index.tsx";

const obj = { 1: null, 2: {} };
obj[2] = {};
const apexExperiment = ApexExperiment.createApexExperiment({
  name: "2026-03-debug-experiment",
  kind: "user",
  defaultConfig: {},
  variations: obj,
});
const result = set.fileFinishedImporting("modules/experiments/apex/DebugExperiment.tsx");

export default apexExperiment;
export const DebugExperiment = apexExperiment;
export const useDebugExperiment = function useDebugExperiment() {
  return apexExperiment.useConfig({ location: "debug_experiment" });
};
