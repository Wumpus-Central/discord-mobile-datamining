// discord_app/modules/experiments/apex/DebugExperiment.tsx
import ApexExperiment from "index.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const obj = { name: "2026-03-debug-experiment", kind: "user", defaultConfig: {}, variations: null };
const obj2 = { 1: null, 2: {} };
obj2[2] = {};
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/experiments/apex/DebugExperiment.tsx");

export default apexExperiment;
export const DebugExperiment = apexExperiment;
export const useDebugExperiment = function useDebugExperiment() {
  return apexExperiment.useConfig({ location: "debug_experiment" });
};
