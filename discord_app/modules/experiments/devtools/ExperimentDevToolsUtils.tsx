// === Module 4366: getExperimentVariantsForDevTools ===

// Module 4366 (getExperimentVariantsForDevTools)
import obj132 from "obj132" /* 2 */;
import trackExposureToExperiment from "trackExposureToExperiment" /* 4296 */;
import create from "create" /* 4367 */;

const result = obj132.fileFinishedImporting("modules/experiments/devtools/ExperimentDevToolsUtils.tsx");

export const getExperimentVariantsForDevTools = function getExperimentVariantsForDevTools(experiment) {
  if (experiment.system !== trackExposureToExperiment.ExperimentSystem.APEX) {
    let variants = experiment.variants;
  } else {
    const items = [obj];
    variants = items.concat(experiment.variants);
  }
  return variants;
};