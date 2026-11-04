// === Module 8728: ExperimentDevToolsUtils ===

// Module 8728 (ExperimentDevToolsUtils)
import ExperimentManager from "ExperimentManager" /* 5367 */;
import experiment2 from "experiment" /* 8729 */;
import size from "module_2" /* 2 */;

const obj = { id: -1, label: "Not Eligible", shortLabel: "Not Eligible", type: experiment2.Variation_Type.OVERRIDE };
const result = size.fileFinishedImporting("modules/experiments/devtools/ExperimentDevToolsUtils.tsx");

export function getExperimentVariantsForDevTools(experiment) {
  if (experiment.system !== ExperimentManager.ExperimentSystem.APEX) {
    let variants = experiment.variants;
  } else {
    items = [obj];
    variants = items.concat(experiment.variants);
  }
  return variants;
}