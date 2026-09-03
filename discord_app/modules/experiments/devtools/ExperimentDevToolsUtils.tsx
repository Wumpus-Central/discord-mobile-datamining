// === Module 7646: getExperimentVariantsForDevTools ===

// Module 7646 (getExperimentVariantsForDevTools)
import set from "set" /* 2 */;
import trackExposureToExperiment from "trackExposureToExperiment" /* 4399 */;
import create from "create" /* 7647 */;

const obj = { id: -1, label: "Not Eligible", shortLabel: "Not Eligible", type: create.Variation_Type.OVERRIDE };
const result = set.fileFinishedImporting("modules/experiments/devtools/ExperimentDevToolsUtils.tsx");

export const getExperimentVariantsForDevTools = function getExperimentVariantsForDevTools(experiment) {
  if (experiment.system !== trackExposureToExperiment.ExperimentSystem.APEX) {
    let variants = experiment.variants;
  } else {
    const items = [obj];
    variants = items.concat(experiment.variants);
  }
  return variants;
};