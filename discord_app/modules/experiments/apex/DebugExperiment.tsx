// === Module 13961: DebugExperiment ===

// Module 13961 (DebugExperiment)
import c from "c" /* 576 */;
import ApexExperiment from "ApexExperiment" /* 1453 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-03-debug-experiment", kind: "user", defaultConfig: {}, variations: null };
let obj2 = { 1: null, 2: {} };
obj2[2] = {};
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/experiments/apex/DebugExperiment.tsx");

export default apexExperiment;
export const DebugExperiment = apexExperiment;
export const useDebugExperiment = ReactCompilerGating.isReactCompilerEnabled() ? (function useDebugExperiment() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "debug_experiment" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  return apexExperiment.useConfig(first);
}) : (function useDebugExperiment() {
  return apexExperiment.useConfig({ location: "debug_experiment" });
});