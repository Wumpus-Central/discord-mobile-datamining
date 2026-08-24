// discord_app/modules/experiments/devtools/ExperimentDevToolsUtils.tsx
import set from "../../../../_runtime/00002_set.js";
import trackExposureToExperiment from "../ExperimentManager.tsx";
import create from "../../../../discord_common/js/packages/protos/discord_protos/discord_experimentation/v1/experiment.tsx";

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